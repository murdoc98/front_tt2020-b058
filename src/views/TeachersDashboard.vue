<template>
<div class="student-dashboard">
    
    
    <!-- NavBar -->
    <section>
      <nav class="navbar navbar-expand-lg navbar-light">
        
        <a class="navbar-brand" href="#" v-on:click='this.$router.push({name: "TeachersDashboardGrupos"});'>
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
            
            <a class="nav-item nav-link" href="#" v-on:click='this.$router.push({name: "TeachersDashboardGrupos"});'>Grupos</a
            >
            
            <hr class="divider-menu mobile" color="black" />

            <!-- USER MENU -DESKTOṔ -->
            <div class="dropdown desktop text-end">
            <a
              href="#"
              class="d-block link-dark text-decoration-none dropdown-toggle"
              id="dropdownUser1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="../assets/logoElements/iconEvaIO.png"
                alt="mdo"
                width="40"
                height="40"
                class="rounded-circle"
              />
            </a>
            <ul class="dropdown-menu text-small" aria-labelledby="dropdownUser1">
              
              <li class="item-menu-user">
      
                <a class="dropdown-item" href="#" v-on:click='this.$router.push({name: "TeachersDashboardVerPerfil"});'>
                  <i class="bx bx-user-circle"></i>
                  Ver Perfil
                </a>
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li class="item-menu-user">
                
                <a class="dropdown-item" href="#" v-on:click='logout'>
                  <i class="bx bx-log-out"></i>
                  Cerrar Sesión
                  </a>
              </li>
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

      <div class="text-header-1">
        <h1>Bienvenido Docente</h1>
      </div>

      <!-- <div class="text-header-2">
        <h1>Promesa</h1>
      </div> -->

      <div class="container">
        <div class=" card-section row">
          
          <div class="col-sm">
            <div class="card" style="width: 18rem;">
              <img class="card-img-top" src="../assets/iconos-landing/icon-grad.png" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">VER MIS GRUPOS</h5>
                <a href="#" v-on:click='this.$router.push({name: "TeachersDashboardGrupos"});' class="btn btn-primary">Vamos</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  </div>
  
  <footer>
      <div class="custom-shape-divider-bottom-1639115775">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
        </svg>
    </div>
    <!-- Copyright -->
    <div class="text-center p-3" style="background-color: rgb(15 114 185); height: 95px;">
    <img src="../assets/logoElements/Logo-Horizontal-Completo.png" style="height: 60px;" alt="">
    </div>

    

    
  </footer>

</template>

<script>
// import PopupRole from '../components/PopupRole';
// import Groups from '../components/TeachersGroups';
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

@import url('https://fonts.googleapis.com/css2?family=Baloo+Bhaijaan+2:wght@400;500;600;800&family=Nunito+Sans:wght@700;900&display=swap');

.icon_EvaIO {
  width: 65px;
}

.student-dashboard
{
  min-height: 100vh;
  background: #7EB4E2;
}

.navbar
{
  background: #307CC0;
}

.navbar-expand-lg .navbar-nav .nav-link
{
  color: white;
  margin-right: 15px;
  background: #7EB4E2;
  border-radius: 40px;
  font-weight: 600;
  padding-left: 15px;
  padding-right: 19px;
}

.navbar-expand-lg .navbar-nav .nav-link.active
{
  color: white;
  font-weight: 600;
  padding-left: 15px;
  padding-right: 19px;
  background: #7EB4E2;

}
.navbar-expand-lg .navbar-collapse {
  justify-content: flex-end;
}

.dropdown-menu {
  top: 40px !important;
  left: -100px !important;
}

.navbar-expand-lg .navbar-nav .dropdown-menu
{
  margin-top: 10px;
  margin-left: -12px;
  border-radius: 20px;
  background: #7EB4E2;
}

.dropdown-item
{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: azure;
}

.dropdown-item:hover
{
  background: rgba(41, 28, 28, 0.405);
  border-radius: 15px;
  color: azure;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.bx
{
  margin-bottom: 2px;
  margin-right: 5px;
}

.item-menu-user
{
  margin: 5px;
  background: #3778b1;
  border-radius: 15px;
}

/* TITLE SECTION */
.text-header-1
{
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 900;
}

/* TITLE SECTION */
.text-header-2
{
  font-family: 'Nunito Sans', sans-serif;
    margin-bottom: 35px;
}

/*CARD SECTIONS*/

.col-sm
{
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.card-section .card
{
  margin-top: 15px;
  align-items: center;
  background: #0E72B9;
}

.card-section .card .card-body
{
  text-align: center;
}

.card-section .card .card-body .card-title
{
  font-family: 'Baloo Bhaijaan 2', cursive;
  color:white;
  font-weight: 600;
  margin-top: 25px;
}

.card-section .card .card-body .btn
{
  font-family: 'Baloo Bhaijaan 2', cursive;
  color:white;
  background: #1C3E92;
  font-weight: 600;
  margin-top: 10px;
  margin-bottom: 10px;
}

.card-section .card .card-body .btn:hover
{
  background: #2b52b5;
}


.card-section .card img
{
  height: 140px;
  width: 140px;
  margin-top: 10px
}


/* SHAPE DIVIDER */
.custom-shape-divider-bottom-1639115775 {
    position: inherit;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
    background: #7EB4E2;
}

.custom-shape-divider-bottom-1639115775 svg {
    position: relative;
    display: block;
    width: calc(111% + 1.3px);
    height: 115px;
}

.custom-shape-divider-bottom-1639115775 .shape-fill {
    fill: #0E72B9;
}

.text-header-1
{
  text-align: center;
  margin-top: 50px;
}

.text-header-2
{
  text-align: center;
}



@media (min-width: 991px)
{
  .mobile{
    display: none;
  }
}

@media (max-width: 991px)
{
  .navbar-nav {
    align-items: center;
    margin-bottom: 15px;
  }

  .navbar-expand-lg .navbar-nav .nav-link
  {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .divider-menu
  {
    height: 2px;
    width: 300px;
    color: rgb(102, 76, 76);
    opacity: 1;
  }

  .text-end
  {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .text-end img
  {
    margin-right: 10px;
  }

  .mobile-user-menu
  {
    margin: 5px;
    background: #106043;
    border-radius: 15px;
  }
}

</style>
