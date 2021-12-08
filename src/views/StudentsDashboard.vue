<template>

  <div class="student-dashboard">

    <!-- NavBar -->
    <section>
      <nav class="navbar navbar-expand-lg navbar-light">
        
        <a class="navbar-brand" href="">
          <img
            class="icon_EvaIO"
            src="../assets/logoElements/iconEvaIO.png"
            alt=""
          />
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link active" href="#"
              >Grupos <span class="sr-only">(current)</span></a
            >
            <a class="nav-item nav-link" href="#">Cuestionarios</a>
            <div class="dropdown text-end">
            <a
              href="#"
              class="d-block link-dark text-decoration-none dropdown-toggle"
              id="dropdownUser1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://github.com/mdo.png"
                alt="mdo"
                width="40"
                height="40"
                class="rounded-circle"
              />
            </a>
            <ul
              class="dropdown-menu text-small"
              aria-labelledby="dropdownUser1"
            >
              <li><a class="dropdown-item" href="#">Profile</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#" v-on:click='logout'>Cerrar sesión</a></li>
            </ul>
          </div>
          </div>

          
        </div>
      </nav>
    </section>

    <!-- Body -->
    <section>

      <!-- <div class="welcome-body" style="background: #ABD7C7">
        <Groups v-if="status === 'Groups'"/>
      </div> -->

      <div class="row">
        <div class="col-6 col-md-4"></div>
        <div class="col-6 col-md-4" style="text-align:center"> Bienvenido Joven Promesa</div>
        <div class="col-6 col-md-4"></div>
      </div>

      <div class="card-section row">

        <div class="col-sm-6">
          <div class="card">
            <img src="../assets/logoElements/iconEvaIO.png" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>

        <div class="col-sm-6">
          <div class="card">
            <img src="../assets/logoElements/iconEvaIO.png" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>

      </div>

    </section>

  </div>

</template>

<script>
// import PopupRole from '../components/PopupRole';
// import Groups from '../components/StudentsGroups';
import auth from '@/logic/auth';

export default {
  name: "popupRole",

  components: {
    // PopupRole
    // Groups
  },
  data: () => ({
    status: 'Groups',
  }),
  methods: {
    async logout() {
      try {
        await auth.logout();
        this.$router.push({name: 'LandingPage'});
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

.icon_EvaIO {
  width: 65px;
}

.student-dashboard
{
  background: #ABD7C7;
  height: 100%;
}

.navbar
{
  background: #21B091;
}

.navbar-expand-lg .navbar-nav .nav-link
{
  color: white;
  margin-right: 15px;
  background: #106043;
  border-radius: 40px;
  font-weight: 600;
}

.navbar-expand-lg .navbar-nav .nav-link.active
{
  color: white;
  font-weight: 600;
}
.navbar-expand-lg .navbar-collapse {
  justify-content: flex-end;
}

.dropdown-menu {
  top: 40px !important;
  left: -100px !important;
}

/*CARD SECTIONS*/

.card-section
{
    margin-right: calc(1.5 * var(--bs-gutter-x));
    margin-left: calc(1.5 * var(--bs-gutter-x));
}

.card-section .card
{
  margin-top: 15px;
  align-items: center;
}

.card-section .card .card-body
{
  text-align: center;
}

.card-section .card img
{
  height: 100px;
  width: 100px;
  margin-top: 10px
}


</style>
