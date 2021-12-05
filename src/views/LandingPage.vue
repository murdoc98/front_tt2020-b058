<template>

  <!-- ENCABEZADO -->
  <header>
   
  </header>

  <!-- NavBar -->
  <nav class="navbar navbar-light mb-5">
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

  

  <section class="w-50 mx-auto text-center pt-5" id="intro">
    
    <h1 class="p-3 fs-2 border-top border-3">Una agencia única para todas tus necesidades de <span class="text-primary">Marketing Digital</span></h1>
    <p class="p-3 fs-4"><span class="text-primary">EVA.IO </span> es la agencia donde te ayudamos a establecer tu precencia online SEO paginas Web, tiendas virtuales redes sociales</p>
  </section>

  <!-- Servicios -->
  <section class="container-fluid">
    <div class="row w-74 mx-auto my-5 servicio-fila">
      
      <div class="col-lg-6 col-md-12 col-sm-12 d-flex  my-5 icono-wrap">
        <img src="../assets/logoElements/iconEvaIO.png" alt="desarrollo">
        <div>
          <h3 class="fs-5 mt-4 px-4 pb-1">Desarrollo</h3>
          <p class="px-4">Desarrollo de aplicaciones WEB, moviles y e-comerce</p>
        </div>
      </div>

      <div class="col-lg-6 col-md-12 col-sm-12 d-flex  my-5 icono-wrap">
        <img src="../assets/logoElements/iconEvaIO.png" alt="desarrollo">
        <div>
          <h3 class="fs-5 mt-4 px-4 pb-1">Desarrollo</h3>
          <p class="px-4">Desarrollo de aplicaciones WEB, moviles y e-comerce</p>
        </div>
      </div>
    </div>

    <div class="row w-74 mx-auto my-5 servicio-fila">
      
      <div class="col-lg-6 col-md-12 col-sm-12 d-flex  my-5 icono-wrap">
        <img src="../assets/logoElements/iconEvaIO.png" alt="desarrollo">
        <div>
          <h3 class="fs-5 mt-4 px-4 pb-1">Desarrollo</h3>
          <p class="px-4">Desarrollo de aplicaciones WEB, moviles y e-comerce</p>
        </div>
      </div>

      <div class="col-lg-6 col-md-12 col-sm-12 d-flex  my-5 icono-wrap">
        <img src="../assets/logoElements/iconEvaIO.png" alt="desarrollo">
        <div>
          <h3 class="fs-5 mt-4 px-4 pb-1">Desarrollo</h3>
          <p class="px-4">Desarrollo de aplicaciones WEB, moviles y e-comerce</p>
        </div>
      </div>
    </div>

  </section>

  <!-- Nosotros -->
  <section>
    <div class="w-50 m-auto text-center" id="equipo">
      <h1 class="mb-5 fs-2">Equipo pequeño con <span class="fs-4"> resultados grandes</span></h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et optio magni, quaerat 
        quia exercitationem animi est doloribus consequuntur, laboriosam unde totam cupiditate 
        molestiae nobis, maxime incidunt laudantium voluptatibus ex ea!</p>
    </div>

    <div class="mt-5 text-center">
      <img class="img-fluid" src="../assets/logoElements/iconEvaIO.png" alt="equipo">
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
        <p class="d-flex justify-content-center align-items-center">
          <span class="me-3">Register for free</span>
          <button type="button" class="btn btn-outline-light btn-rounded">
            Sign up!
          </button>
        </p>
      </section>
      <!-- Section: CTA -->
    </div>
    <!-- Grid container -->

    <!-- Copyright -->
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
      © 2020 Copyright:
      <a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
    </div>
    <!-- Copyright -->
  </footer>
  <!-- Footer -->
</section>




</template>

<style lang="scss" scoped>

  .carousel-inner
  {
    max-height: 39rem;
  }

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


</style>