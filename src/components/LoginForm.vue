<template>
  <div class="container">
    <input type="checkbox" id="flip" />
    <div class="cover">
      <div class="front">
        <img src="@/assets/bg1.jpg" alt="" />
        <div class="text">
          <span class="text-1"
            >Este es un texto de <br />
            prueba</span
          >
          <span class="text-2">HCS SafeEagle Platform</span>
        </div>
      </div>
      <div class="back">
        <img class="backImg" src="@/assets/bg2.jpg" alt="" />
        <div class="text">
          <span class="text-1"
            >La seguridad es <br />
            nuestra prioridad</span
          >
          <span class="text-2">HCS SafeEagle Platform</span>
        </div>
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
                ¿Olvidaste tu contraseña? <label for="flip">Recuperala</label>
              </div>
            </div>
          </form>
        </div>
        <div class="forgot-form">
          <div class="title">Recuperar cuenta</div>
          <form action @submit.prevent="recovery">
            <div class="input-boxes">
              <div class="input-box">
                <i class="bx bx-envelope"></i>
                <input
                  v-model="email2recover"
                  type="text"
                  placeholder="Correo electronico"
                  required
                />
              </div>
              <div class="button input-box">
                <input type="submit" value="Recuperar" />
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
</template>


<style lang="scss" scoped>
.container {
  position: relative;
  max-width: 850px;
  background: #fff;
  padding: 40px 30px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  perspective: 2700px;
  margin: auto;
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
      background: #7d2ae8;
      opacity: 0.5;
      z-index: 100;
    }
    &::after {
      content: "";
      position: absolute;
      height: 100%;
      width: 100%;
      background: #7d2ae8;
      opacity: 0.5;
      z-index: 100;
      transform: rotateY(180deg);
    }
    img {
      position: absolute;
      height: 100%;
      width: 100%;
      object-fit: cover;
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
    background: #fff;
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
      color: #fff;
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
        background: #7d2ae8;
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
        background: #7d2ae8;
        border-radius: 6px;
        padding: 0;
        cursor: pointer;
        transition: all 0.4s ease;
        &:hover {
          background: #5b13b9;
        }
      }
    }
    label {
      color: #5b13b9;
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
      &:focus,
      &:valid {
        border-color: #7d2ae8;
      }
    }
    i {
      position: absolute;
      color: #7d2ae8;
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
</style>
