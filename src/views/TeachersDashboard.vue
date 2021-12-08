<template>
  <div class="welcome">
    <div class="container-fluid">
      <header class="welcome-header">
        <nav class="navbar navbar-expand-lg navbar-light">
          <a class="navbar-brand" href="#">
            <img
              class="icon_EvaIO"
              src="../assets/logoElements/Logo-Horizontal-Completo.png"
              alt=""
            />
          </a>
          <h1>Profesores</h1>
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
              <a class="nav-item nav-link" href="#">Features</a>
              <a class="nav-item nav-link" href="#">Pricing</a>
              <a class="nav-item nav-link disabled" href="#">Disabled</a>
            </div>

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
                  width="32"
                  height="32"
                  class="rounded-circle"
                />
              </a>
              <ul
                class="dropdown-menu text-small"
                aria-labelledby="dropdownUser1"
              >
                <li><a class="dropdown-item" href="#">New project...</a></li>
                <li><a class="dropdown-item" href="#">Settings</a></li>
                <li><a class="dropdown-item" href="#">Profile</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href="#" v-on:click='logout'>Cerrar sesión</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <div class="welcome-body">
        <Groups v-if="status === 'Groups'"/>
      </div>

      <div class="custom-shape-divider-bottom-1638064983">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            class="shape-fill"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            class="shape-fill"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
// import PopupRole from '../components/PopupRole';
import Groups from '../components/TeachersGroups';
import auth from '@/logic/auth';

export default {
  name: "popupRole",

  components: {
    // PopupRole
    Groups
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
  width: 180px;
}
.navbar-expand-lg .navbar-collapse {
  justify-content: flex-end;
}
.welcome {
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(#88e988, #44a944);
  display: flex;
  justify-content: space-between;
}
.custom-shape-divider-bottom-1638064983 {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
}
.custom-shape-divider-bottom-1638064983 svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 79px;
}
.custom-shape-divider-bottom-1638064983 .shape-fill {
  fill: #50e3c2;
}
.dropdown-menu {
  top: 40px !important;
  left: -100px !important;
}
</style>
