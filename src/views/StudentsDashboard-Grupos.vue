<template>
  <div>
    <div class="student-dashboard">
    
    
    <!-- NavBar -->
    <section>
      <nav class="navbar navbar-expand-lg navbar-light">
        
        <a class="navbar-brand" href="/student/dashboard" v-on:click='this.$router.push({name: "StudentsDashboardGrupos"});'>
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
            
            <a class="nav-item nav-link" href="#" v-on:click='this.$router.push({name: "StudentDashboardGrupos"});'>Grupos</a
            >
            <a class="nav-item nav-link" href="#" v-on:click='this.$router.push({name: "StudentsDashboardGruposCuestionarios"});'>Cuestionarios</a>

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
      
                <a class="dropdown-item" href="#" v-on:click='this.$router.push({name: "StudentDashboardVerPerfil"});'>
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

      <div class="container text-header-1">
        <h1>Información de grupos</h1>
        <a href="#" class="btn btn-add-group btn-lg active" data-toggle="modal" data-target="#modalLoginForm" role="button"><i class="bx bxs-group"></i></a>
      </div>

      <!-- <div class="text-header-2">
        <h1>Promesa</h1>
      </div> -->

      <!-- <div class="card-section row">

        <div class="col-sm-6">
          <div class="card">
            <img src="../assets/iconos-landing/icon-grad.png" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">VER MIS GRUPOS</h5>
              <a href="#" v-on:click='this.$router.push({name: "StudentDashboardGrupos"});' class="btn btn-primary">Vamos</a>
            </div>
          </div>
        </div>

        <div class="col-sm-6">
          <div class="card">
            <img src="../assets/iconos-landing/icon-test.png" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">VER MIS CUESTIONARIOS</h5>
              <a href="#" v-on:click='this.$router.push({name: "StudentsDashboardGruposCuestionarios"});' class="btn btn-primary">Vamos</a>
            </div>
          </div>
        </div>

      </div> -->

      
        
        <div class="card-section row" >
          <div class="col-sm" v-for="(group, index) in groups" :key="index">
            <div class="card">
              <img src="../assets/iconos-landing/icon-grad.png" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">{{ group.name }}</h5>
                <a href="#" type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter" v-on:click="changeState(group.name, group.id)">Información</a>
              </div>
            </div>
          </div>
        </div>
        
    </section>
  </div>
  
  <footer>
      <div class="custom-shape-divider-bottom-1639003445">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
        </svg>
    </div>
    <!-- Copyright -->
    <div class="text-center p-3" style="background-color: rgb(18, 123, 55); height: 95px;">
    <img src="../assets/logoElements/Logo-Horizontal-Completo.png" style="height: 60px;" alt="">
    </div>

    
  </footer>
  

  <!-- Modal -->
  <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          
          <h5 class="modal-title info" id="exampleModalLongTitle">Información</h5>
          
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>

        </div>
        <div class="modal-body">
          <div class="modal-data" >
            <h5 class="info">Grupo:</h5>
            <h5 class="data">{{ modalName }}</h5>
          </div>
          <div class="modal-data">
            <h5 class="info">ID:</h5>
            <h5 class="data">{{ modalId }}</h5>
          </div>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Entendido</button>
        </div>

      </div>
    </div>
  </div>

   <!-- Modal addAlumnoGroup -->
  <div class="modal fade" id="modalLoginForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header text-center">
            <h4 class="modal-title w-100 font-weight-bold">Inscribirme a Nuevo Grupo</h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body mx-3">
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text"><i class="bx bxs-group"></i></span>
                </div>
                <input type="text" class="form-control" placeholder="ID Grupo" id="usr" v-model="groupId">
              </div>

          </div>

          <div class="modal-footer d-flex justify-content-center">
            <button class="btn btn-default" data-dismiss="modal" v-on:click="putGroup">Inscribirse</button>
          </div>

        </div>
      </div>
  </div>

 </div>

 

</template>

<script>
// import PopupRole from '../components/PopupRole';
// import Groups from '../components/StudentsGroups';
import auth from '@/logic/auth';
import studentGroups from '@/logic/studentsGroups';

export default {
  name: "popupRole",

  components: {
    // PopupRole
    // Groups
  },
  data: () => ({
    status: 'Groups',
    groups: [],
    modalName: 'test',
    modalId: 'test',
    groupId: '',
  }),
  async beforeMount() {
    const response = await studentGroups.getGroups();
    this.groups = response.data;
  },
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
    },
    changeState(name, id) {
      this.modalName = name;
      this.modalId = id;
    },
    async putGroup() {
      try { 
        await studentGroups.putGroupLogic(this.groupId);
      } catch(err) {
        console.log(err);
      }
      this.groupId = '';
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
  background: #ABD7C7;
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
  padding-left: 15px;
  padding-right: 19px;
}

.navbar-expand-lg .navbar-nav .nav-link.active
{
  color: white;
  font-weight: 600;
  padding-left: 15px;
  padding-right: 19px;
  background: #0e4833;

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
  background: #21B091;
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
  background: #106043;
  border-radius: 15px;
}

/* TITLE SECTION */
.text-header-1
{
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 900;
  margin-top: 50px;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;

}

/* TITLE SECTION */
.text-header-2
{
  font-family: 'Nunito Sans', sans-serif;
    margin-bottom: 35px;
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
  background: #3E9058;
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
}

.card-section .card .card-body .btn
{
  font-family: 'Baloo Bhaijaan 2', cursive;
  color:white;
  background: #106043;
  font-weight: 600;
}

.card-section .card .card-body .btn:hover
{
  background: rgb(19, 73, 5);
}


.card-section .card img
{
  height: 100px;
  width: 100px;
  margin-top: 10px
}


/* SHAPE DIVIDER */
.custom-shape-divider-bottom-1639003445 {
    position: inherit;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
    background: #ABD7C7;

}

.custom-shape-divider-bottom-1639003445 svg {
    position: relative;
    display: block;
    width: calc(140% + 1.3px);
    height: 100px;
    transform: rotateY(180deg);
}

.custom-shape-divider-bottom-1639003445 .shape-fill {
    fill: #127B37;
}


.text-header-2
{
  text-align: center;
}

/* MODAL POPUP SECTION */

.modal-content
{
  background: #2E824D;
}

.modal-body
{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.modal-title
{
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 900;
  text-align: center;
}

.modal-data{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.modal-data .info
{
  margin-right: 10px;
  font-family: 'Baloo Bhaijaan 2', cursive;
  font-weight: 600;
  font-size: 30px;
}

.modal-data .data
{
  font-family: 'Baloo Bhaijaan 2', cursive;
  font-weight: 600;
  font-size: 30px;
  color: azure;
  text-align: center;
}

.modal-header
{
  border-bottom: 1px solid #17412600;
}

.modal-footer
{
  border-top: 1px solid #17412600;
}

.modal-footer .btn {
  background: #0b442f;
  color: azure;
  font-family: 'Baloo Bhaijaan 2', cursive;
  font-weight: 600;
}

.btn-lg
{
  background: #106043;
  color: azure;
  border-radius: 50px;
}

.btn-lg:hover
{
  background: #0b442f;
}

.btn-lg i
{
  margin-right: 0px;
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
