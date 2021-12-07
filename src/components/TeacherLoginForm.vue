<template>
  <div class="container">
    

    <input type="checkbox" id="flip" />
    <div class="cover">
      <div class="front">
        <img style="margin-bottom:40px; background-color: #6cbfc3" src="../assets/landingPage/Teacher.svg">
      </div>
      <div class="back">
        <img style="margin-bottom:40px;" src="../assets/landingPage/Teacher.svg">
      </div>
    </div>
    <div class="forms">
      <div class="form-content">
        <div class="login-form">
          <div class="title">Iniciar sesión</div>
          <form action @submit.prevent="login">
            <div class="input-boxes">
              <div class="input-box">
                <i class="bx bx-envelope"></i>
                <input
                  v-model="email"
                  type="email"
                  placeholder="Correo electronico"
                  required
                />
              </div>
              <div class="input-box">
                <i class="bx bx-key"></i>
                <input
                  v-model="password"
                  type="password"
                  placeholder="Contraseña"
                  required
                />
              </div>
              
              <div class="text">{{ serverMessage }}</div>
              <div class="button input-box">
                <input type="submit" value="Enviar" />
              </div>
              <div class="text forgot-text">
                ¿Aún no tienes cuenta? <label for="flip">Crear Cuenta</label>
                <br>
                ¿Olvidaste tu contraseña? <label  data-toggle="modal" data-target="#recoveripswdModal">Recuperar</label>
              </div>
            </div>
          </form>
        </div>
        <div class="forgot-form">
          <div class="title">Crear cuenta</div>
          <form action @submit.prevent="recovery">
            <div class="input-boxes">
              
              <!-- Nombre-->
              <div class="input-box">
                <i class="bx bx-user-circle"></i>
                <input
                  v-model="email"
                  type="email"
                  placeholder="Nombre(s)"
                  required
                />
              </div>
              <!-- Apellidos -->
              <div class="input-box">
                <i class="bx bx-user-circle"></i>
                <input
                  v-model="email"
                  type="email"
                  placeholder="Apellidos"
                  required
                />
              </div>
              <!-- Correo -->
              <div class="input-box">
                <i class="bx bx-envelope"></i>
                <input
                  v-model="email2recover"
                  type="text"
                  placeholder="Correo electronico"
                  required
                />
              </div>
              

              <!-- Contraseña -->

              <div class="input-box">
                <i class="bx bx-key"></i>
                <input
                  v-model="password"
                  type="password"
                  placeholder="Contraseña"
                  required
                />
              </div>
              

              <div class="button input-box">
                <input type="submit" value="Registrarse" />
              </div>
              <div class="text forgot-text">
                ¿Ya cuentas con tus credenciales?
                <label for="flip">Inicia sesión</label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

  <!-- recuperar contraseña -->
    <!-- Modal -->
    <div class="modal fade" id="recoveripswdModal" tabindex="-1" role="dialog" aria-labelledby="recoveripswdModal" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">

          <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Recuperar Contraseña</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
              </button>
          </div>
          <div class="modal-body">

            <form action="/action_page.php">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text"><i class="bi bi-envelope"></i></span>
                </div>
                <input type="text" class="form-control" placeholder="Correo Electronico" id="usr" name="Correo Electronico">
              </div>
              
              <div class="btn-enviar">
                <input class="btn btn-enviar" data-dismiss="modal" type="button" value="Enviar">
              </div>
              
            </form>

          </div>
        </div>
      </div>
    </div>
</template>

<script>
import auth from '@/logic/auth';
export default {
  data: () => ({
    email: "",
    password: "",
    email2recover: "",
    serverMessage: ""
  }),
  methods: {
    async login() {
      try {
        const response = await auth.teachersLogin(this.email, this.password);
        auth.setUserToken(response.headers.token);
        auth.setUserRole('teacher');
        this.$router.push({name: 'TeachersDashboard'});
      } catch(e) {
        if(!e.response) this.serverMessage = "Servidor Inhabilitado temporalmente";
        else if(e.response) this.serverMessage = e.response.data.server;
        setInterval(() => this.serverMessage = "", 15000);
      }
    },
    recovery() {
      console.log(this.email2recover)
    }
  }
};
</script>

<style lang="scss" scoped>

.container {
  position: relative;
  max-width: 850px;
  background: #cfeedc;
  padding: 40px 30px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  perspective: 2700px;
  margin: auto;
  border-radius: 50px;
  .cover {
    position: absolute;
    top: 0;
    left: 50%;
    height: 100%;
    width: 50%;
    z-index: 98;
    transition: all 1s ease;
    transform-origin: left;
    transform-style: preserve-3d;
    &::before {
      content: "";
      position: absolute;
      height: 100%;
      width: 100%;
      opacity: 0.5;
      z-index: 100;
    }
    &::after {
      content: "";
      position: absolute;
      height: 100%;
      width: 100%;
      background: #cfeedc;
      opacity: 0.1;
      z-index: 100;
      transform: rotateY(180deg);
    }
    img {
      position: absolute;
      height: 100%;
      width: 100%;
      object-fit: initial;
      z-index: 12;
      backface-visibility: hidden;
    }
    .back .backImg {
      transform: rotateY(180deg);
      transform: rotateY(180deg);
    }
    .text {
      position: absolute;
      z-index: 111;
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
  #flip:checked ~ .cover {
    transform: rotateY(-180deg);
  }
  .forms {
    height: 100%;
    width: 100%;
    background: #cfeedc;
  }
  .form-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .login-form,
    .forgot-form {
      width: calc(100% / 2 - 25px);
    }
  }
  #flip {
    display: none;
  }
}
.cover {
  .text {
    .text-1,
    .text-2 {
      font-size: 26px;
      font-weight: 600;
      color: #ff0808;
      text-align: center;
      backface-visibility: hidden;
    }
    .text-2 {
      font-size: 15px;
      font-weight: 500;
    }
  }
  .back .text {
    .text-1,
    .text-2 {
      transform: rotateY(180deg);
    }
  }
}
.forms {
  .form-content {
    .title {
      position: relative;
      font-size: 24px;
      font-weight: 500;
      color: #333;
      &::before {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        height: 3px;
        width: 30px;
        background: #015f43;
      }
    }
    .input-boxes {
      margin-top: 30px;
    }
    .input-box {
      display: flex;
      align-items: center;
      height: 50px;
      width: 100%;
      margin: 10px 0;
      position: relative;
    }
    .text {
      font-size: 14px;
      font-weight: 500;
      min-height: 18px;
      color: rgba(190, 4, 10, 1);
      a {
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
    .button {
      color: #fff;
      margin-top: 20px;
      input {
        color: #fff;
        background: #015f43;
        border-radius: 6px;
        padding: 0;
        cursor: pointer;
        transition: all 0.4s ease;
        &:hover {
          background: #00412d;
        }
      }
    }
    label {
      color: #015f43;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
    .login-text,
    .forgot-text {
      text-align: center;
      margin-top: 25px;
      color: #000;
    }
  }
  .forgot-form {
    .title {
      &::before {
        width: 60px;
      }
    }
  }
}
.form-content {
  .input-box {
    input {
      height: 100%;
      width: 100%;
      outline: none;
      border: none;
      padding: 0 30px;
      font-size: 16px;
      font-weight: 500;
      border-bottom: 2px solid rgba(0, 0, 0, 0.2);
      transition: all 0.3s ease;
      background: #cfeedc;
      &:focus,
      &:valid {
        border-color: #015f43;
      }
    }
    i {
      position: absolute;
      color: #015f43;
      font-size: 18px;
    }
  }
}
@media (max-width: 730px) {
  .container {
    .cover {
      display: none;
    }
    #flip:checked ~ .forms .forgot-form {
      display: block;
    }
    #flip:checked ~ .forms .login-form {
      display: none;
    }
  }
  .form-content {
    .login-form,
    .forgot-form {
      width: 100% !important;
    }
    .forgot-form {
      display: none;
    }
  }
}

#recoveripswdModal

  .modal-content
  {
    background: #afebc8;
    border-radius: 30px;
  }
  .modal-header
  {
    border-bottom: 0px;
  }
  .modal-footer
  {
    border-top: 0px;
  }
  h5
  {
    font-weight: 600;
  }
  .btn-enviar
  {
    display: flex;
    justify-content: center;
    
    input.btn-enviar
    {
      color: white;
      font-weight: 800;
      background: #015f43;
      align-items: center;
    }
  }
  .input-group-text
  {
    background: #015f43;
  }
  .input-group-text
  {
    color: #a1d5d5;
  }
  .form-control
  {
    background: #afebc8;
    border: none;
  }


  
</style>

