<template>

  <!-- ENCABEZADO -->

  <!-- NavBar -->

  <div class="custom-shape-divider-top-1638680168">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" class="shape-fill"></path>
      </svg>
    </div>

  <nav class="navbar navbar-light mt-5 mb-5">
    <a class="navbar-brand" href="#">
      <img src="../assets/logoElements/Logo-Horizontal-Completo.png" width="240" height="58" class="d-inline-block align-cneter" alt="">
    </a>
  </nav>

  <!-- Carusel -->
    <div id="carouselExampleSlidesOnly" class="carousel slide container" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src="../assets/slider/Eva-carusel-001.png" style="border-radius:20px;" alt="First slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="../assets/slider/Eva-carusel-002.png" style="border-radius:20px;" alt="Second slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="../assets/slider/Eva-carusel-003.png" style="border-radius:20px;" alt="Third slide">
        </div>
      </div>
  </div>

  <div class="custom-shape-divider-bottom-1638680595">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" class="shape-fill"></path>
    </svg>
  </div>

  <!-- ESPACIO UNICO -->
  
  <div class="custom-shape-divider-top-1638684850">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
    </svg>
  </div>

  <section class="w-50 mx-auto text-center mt-5 pt-1" id="intro">
    <img class="mb-5" src="../assets/logoElements/iconEvaIO.png" alt="desarrollo">
    <h1 class="p-3 fs-2 border-top border-3">Un espacio único para todas tus necesidades en cuanto al <span class="text-primary"> Reforzamiento de conocimeintos</span></h1>
    <p class="p-3 fs-4"><span class="text-primary">Eva.io </span> es el portal donde puedes reforzar todo lo aprendido sobre tus clases de matemáticas </p>
  </section>

  <div class="buttons">
    <button class="blob-btn btn btn-primary" type="button" data-toggle="modal" data-target="#exampleModalCenter">
      Comenzamos
      <span class="blob-btn__inner">
        <span class="blob-btn__blobs">
          <span class="blob-btn__blob"></span>
          <span class="blob-btn__blob"></span>
          <span class="blob-btn__blob"></span>
          <span class="blob-btn__blob"></span>
        </span>
      </span>
    </button>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style="display: none;">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"></feColorMatrix>
              <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
            </filter>
          </defs>
        </svg>
  </div>

  <div class="custom-shape-divider-bottom-1638685795">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
    </svg>
  </div>

  <div class="custom-shape-divider-top-1638685975">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
    </svg>
  </div>
  
  
  <!-- SERVICIOS ICONOS -->


  <section class="container-fluid">
    <div class="row w-74 mx-auto my-5 servicio-fila">
      
      <div class="col-lg-6 col-md-12 col-sm-12 d-flex my-5 icono-wrap">
        <img src="../assets/iconos-landing/icon-test.png" class="desarrollo" alt="desarrollo">
        <div class="icon-section">
          <h3 class="fs-5 mt-4 px-4 pb-1">Quiz Interactivos</h3>
          <p class="px-4">Pon aprueba tus conocimientos de matemáticas a través de nuestro sistema de quizes. Recuerda lo visto en las clases de tu docente y saca el máximo provecho a la materia</p>
        </div>
      </div>

      <div class="col-lg-6 col-md-12 col-sm-12 d-flex my-5 icono-wrap">
        <img src="../assets/iconos-landing/icon-grad.png" class="desarrollo" alt="desarrollo">
        <div class="icon-section">
          <h3 class="fs-5 mt-4 px-4 pb-1">Crea o unte a grupos</h3>
          <p class="px-4">Escoge tu rol. Podrás crear grupos si eres profesor o unirte a ellos si eres un alumno. Observa los quizes asignados por el profesor y realízalos para no quedarte atrás de tus compañeros.</p>
        </div>
      </div>
    </div>

   

    <div class="row w-74 mx-auto my-5 servicio-fila">
      
      <div class="col-lg-6 col-md-12 col-sm-12 d-flex my-5 icono-wrap ">
        <img src="../assets/iconos-landing/icon-book.png" class="desarrollo" alt="desarrollo">
        <div class="icon-section">
          <h3 class="fs-5 mt-4 px-4 pb-1">Organiza tus temas</h3>
          <p class="px-4">Observa los temas de los quizes a realizar. Revisa la sección de los quizes y mantén organizada toda tu área de pendientes, ya no hay necesidad de recordar donde anotaste la tarea que dejo tu profesor</p>
        </div>
      </div>

      <div class="col-lg-6 col-md-12 col-sm-12 d-flex my-5 icono-wrap">
        <img src="../assets/iconos-landing/icon-star.png" class="desarrollo" alt="desarrollo">
        <div class="icon-section">
          <h3 class="fs-5 mt-4 px-4 pb-1">Se una estrella</h3>
          <p class="px-4">Completa cada uno de los quizes y observa tus resultados. Después, aplica tus conocimientos en clases con ejercicios similares y demuestra a todos tus logros dentro y fuera de la plataforma.</p>
        </div>
      </div>
    </div>

  </section>

  <div class="custom-shape-divider-bottom-1638689510">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
    </svg>
  </div>
  <div class="custom-shape-divider-top-1638689600">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
    </svg>
</div>

  <!-- Nosotros -->
  <section>
    <div class="w-50 m-auto text-center" id="equipo">
      <h1 class="mb-5 mt-5 fs-2">Un lugar pequeño con <span class="fs-10 font-weight-bold"> grandes resultados</span></h1>
      <p>Eva.io proporciona un entorno tanto para alumnos como para profesores en el cual podrán interactuar para reforzar los conocimientos de matemáticas vistos en clase, esto a través de quizes que el alumno ira resolviendo aquí mismo.</p>
    </div>

    <div class="mt-5 mb-5 text-center">
      <img class="img-fluid mb-4" src="../assets/logoElements/nombreEvaIO.png" alt="equipo">
    </div>
  </section>

  
  
  <!-- Footer -->

  <section class="">
  <!-- Footer -->
  <footer class="text-center text-white" style="background-color: #0a4275;">
    <!-- Grid container -->
    <div class="container p-4 pb-0">
      <!-- Section: CTA -->
      <section class="">
        
        <div class="buttons">
          <button class="blob-btn btn btn-primary" type="button" data-toggle="modal" data-target="#exampleModalCenter">
              Comenzamos
              <span class="blob-btn__inner">
                <span class="blob-btn__blobs">
                  <span class="blob-btn__blob"></span>
                  <span class="blob-btn__blob"></span>
                  <span class="blob-btn__blob"></span>
                  <span class="blob-btn__blob"></span>
                </span>
              </span>
            </button>
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style="display: none;">
                <defs>
                  <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"></feColorMatrix>
                    <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
                  </filter>
                </defs>
              </svg>
        </div>
      </section>
      <!-- Section: CTA -->
    </div>
    <!-- Grid container -->

    <!-- Copyright -->
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
      EVA.IO | © 2021  Copyright:
      <a class="text-white" href="https://www.escom.ipn.mx/">IPN | ESCOM</a>
    </div>
    <!-- Copyright -->
  </footer>
  <!-- Footer -->


</section>

</template>

<script>
//import PopupRole from '@/components/PopupRole';
//import Test from '@/components/Test';

  export default {
    name: 'LandingPage',
    
    components: {
      //PopupRole,
      //Test,
    },
  }
</script>


<style lang="scss" scoped>

  /* 1 */  
  .custom-shape-divider-top-1638680168 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
}
.custom-shape-divider-top-1638680168 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 150px;
}

.custom-shape-divider-top-1638680168 .shape-fill {
    fill: #039EB4;
}

/* 2 */  
.custom-shape-divider-bottom-1638680595 {
    position: inherit;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.custom-shape-divider-bottom-1638680595 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 150px;
}

.custom-shape-divider-bottom-1638680595 .shape-fill {
    fill: #577E60;
}

/* 3 */  
.custom-shape-divider-top-1638684850 {
    position: inherit;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
}

.custom-shape-divider-top-1638684850 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 96px;
    transform: rotateY(180deg);
}

.custom-shape-divider-top-1638684850 .shape-fill {
    fill: #577E60;
}
/* 4 */

.custom-shape-divider-bottom-1638685795 {
    position: inherit;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.custom-shape-divider-bottom-1638685795 svg {
    position: relative;
    display: block;
    width: calc(108% + 1.3px);
    height: 133px;
    transform: rotateY(180deg);
}

.custom-shape-divider-bottom-1638685795 .shape-fill {
    fill: #378CC5;
}

/* 5 */
.custom-shape-divider-top-1638685975 {
    position: inherit;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.custom-shape-divider-top-1638685975 svg {
    position: relative;
    display: block;
    width: calc(108% + 1.3px);
    height: 101px;
    transform: rotateY(180deg);
}

.custom-shape-divider-top-1638685975 .shape-fill {
    fill: #378CC5;
} 

/* 6 */
.custom-shape-divider-bottom-1638689510 {
    position: inherit;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
}

.custom-shape-divider-bottom-1638689510 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 50px;
    transform: rotateY(180deg);
}

.custom-shape-divider-bottom-1638689510 .shape-fill {
    fill: #E9EEBA;
}

/* 7 */

.custom-shape-divider-top-1638689600 {
    position: inherit;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.custom-shape-divider-top-1638689600 svg {
    position: relative;
    display: block;
    width: calc(152% + 1.3px);
    height: 104px;
    transform: rotateY(180deg);
}

.custom-shape-divider-top-1638689600 .shape-fill {
    fill: #E9EEBA;
}

  //.carousel-inner
  //{
    //max-height: 39rem;
  //}

  .navbar
  {
    justify-content: center;
  }

  @media (max-width:768px) {
    #intro, #equipo
    {
      width: 90% !important;
    }

    .servicio-fila
    {
      width: 100% !important;
      text-align: center;
    }
  }

  @media (max-width: 576px) {
    .icono-wrap
    {
      flex-wrap: wrap;
      justify-content: center !important;
    }
  }

  footer{
    background: blue;
    min-height: 100px;
  }

  footer p
  {
    color: blanchedalmond;
    text-align: center;
  }

  #iconos i{
    font-size: 26px;
    padding: 0 8px;
    color: blanchedalmond;
  }

  .desarrollo
  {
    height: 260px;
  }

  .icon-section
  {
    margin-top: 20px ; // pito
  }

  .buttons {
  text-align: center;
  border-radius:30px;
}

$cyan: #0505A9;
$dark: #FFFFFF;
$borderW: 2px;

.blob-btn {
  $numOfBlobs: 4;
  z-index: 1;
  position: relative;
  padding: 20px 46px;
  margin-bottom: 25px;
  text-align: center;
  text-transform: uppercase;
  color: $cyan;
  font-size: 16px;
  font-weight: bold;
  background-color: transparent;
  outline: none;
  border: none;
  transition: color 0.5s;
  cursor: pointer;
  border-radius:30px;
  
  &:before {
    content: "";
    z-index: 1;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border: $borderW solid $cyan;
    border-radius:30px;
  }
  
  &:after {
    content: "";
    z-index: -2;
    position: absolute;
    left: $borderW*1.5;
    top: $borderW*1.5;
    width: 100%;
    height: 100%;

    transition: all 0.3s 0.2s;
    border-radius:30px;
  }
  
  &:hover {
    color: $dark;
    border-radius:30px;
    
    &:after {
      transition: all 0.3s;
      left: 0;
      top: 0;
      border-radius:30px;
    }
  }
  
  &__inner {
    z-index: -1;
    overflow: hidden;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius:30px;
    background:#ffffff;
  }
  
  // additional container created, because in FF blobs are breaking overflow:hidden of element with svg gooey filter
  &__blobs {
    position: relative;
    display: block;
    height: 100%;
    filter: url('#goo');
  }
  
  &__blob {
    position: absolute;
    top: $borderW;
    width: 100% / $numOfBlobs;
    height: 100%;
    background: $cyan;
    border-radius: 100%;
    transform: translate3d(0,150%,0) scale(1.7);
    transition: transform 0.45s;
    
    @supports(filter: url('#goo')) {
      transform: translate3d(0,150%,0) scale(1.4);
    }
    
    @for $i from 1 through $numOfBlobs {
      &:nth-child(#{$i}) {
        left: ($i - 1) * (120% / $numOfBlobs);
        transition-delay: ($i - 1) * 0.08s;
      }
    }
    
    .blob-btn:hover & {
      transform: translateZ(0) scale(1.7);
      
      @supports(filter: url('#goo')) {
        transform: translateZ(0) scale(1.4);
      }
    }
  }

  /* RESPONSIVE*/

  /* HIGH RESOLUTIONS */
  
  
}
</style>