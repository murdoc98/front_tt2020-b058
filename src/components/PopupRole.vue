<template>
        <div class="popup-inner">
            <slot />

                <div class="header-popup">

                    <div class="logo-popup">
                        <img src="../assets/logoElements/iconEvaIO.png" alt="">
                    </div>

                    <div class="instructions"> 
                        <h1>SELECCIONA TU ROL</h1> 
                    </div>

                    <div class="close-button">
                        <button type="button" class="btn-close" data-dismiss="modal"></button>
                    </div>
                    
                </div>

                <div class="body-inicio"> 
                    
                    <div class="container">

                        <div class="card-alumno">
                            <div class="content-alumno">
                                <h2>ESTUDIANTE</h2>
                                    <p>
                                        No te rindas, nunca sabes si el próximo intento será el que funcionará.
                                    </p>
                                <a href="#" data-dismiss="modal" v-on:click='this.$router.push({name: "StudentLogin"})'>Empezar</a>
                            </div>
                            <img style="margin-bottom:40px;" src="../assets/landingPage/Student.svg">
                        </div>

                        <div class="card-profesor">
                            <div class="content-profesor">
                                <h2>Profesor</h2>
                                    <p>
                                        Puedes enseñar una lección un día; pero si puedes enseñar creando curiosidad, el aprendizaje será un proceso para toda la vida 
                                    </p>
                                <a href="#" data-dismiss="modal" v-on:click='this.$router.push({name: "TeachersLogin"})'>Empezar</a>
                            </div>
                            <img src="../assets/landingPage/Teacher.svg">
                        </div>
                    </div>
                </div>
        </div>

</template>


<style lang="scss" scoped>

    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@500&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@500;700;900&display=swap');

    // Header popup

    .header-popup{
        display: flex;
        justify-content: space-between;
    }

    .logo-popup
    {
        & img{
            height: 60px;
            margin-left: 50px ;
        }
    }

    .instructions
    {
        margin-right: 625px;
        margin-top: 13px;
    }

    .instructions h1
    {
        color: #808f8a;
        text-transform: uppercase;
        font-size: 2.2em;
        line-height: 1em;
        font-family: 'M PLUS Rounded 1c', sans-serif;
        letter-spacing: 2px;
        font-weight: 500;
    }

    .popup
    {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 99;
        background-color: rgba(0, 0, 0, 0.2);

        display: flex;
        align-items: center;
        justify-content: center;

    }

    .popup-inner
    {

        background: rgb(196,249,245);
        background: linear-gradient(143deg, rgba(196,249,245,1) 0%, rgba(163,238,233,1) 48%, rgba(171,205,242,1) 67%, rgba(119,175,237,1) 100%);
        padding: 32px;
        transition: width 2s;
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
        border-radius: 50px;

    }

    .popup-close
    {
        margin-top: -10px;
        margin-right: 15px;
        float: right;

    }

    .close {
        position: absolute;
        right: 32px;
        top: 32px;
        width: 32px;
        height: 32px;
        opacity: 0.3;
    }

    .close:hover {
        opacity: 1;
    }

    .close:before, .close:after {
        position: absolute;
        left: 15px;
        content: ' ';
        height: 33px;
        width: 2px;
        background-color: #333;
    }

    .close:before {
        transform: rotate(45deg);
    }
    .close:after {
        transform: rotate(-45deg);
    }    

    // Cards Student - Profesor
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .header-landingpage
    {
        text-align: center;
    }

    .body-inicio{
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 50vh;
        margin-top: -40px
    }

    #verticalEvaIO
    {
        width: 115px;
        margin-top: 10px;
        margin-left: 10px;
    }

    .header-container{
        text-align: center;
        margin: 0px;
        padding: 0px;
        font-family: 'Open Sans', sans-serif;
    }

    .container{
        position: relative;
        display: flex;
        justify-items: center;
        align-items: center;
    }

    .container{
        position: relative;
        display: flex;
        justify-items: center;
        align-items: center;
        margin-top: 75px;
    }

    .container .card-alumno{
        position: relative;
        width: 600px;
        height: 370px;
        margin: 20px;
        display: flex;
        transition: 0.5s;
        justify-content: flex-start;
        align-items: center;
        background-image: radial-gradient(circle at 100.26% 50%, #cfffdc 0, #c1ffdc 12.5%, #b4ffdb 25%, #a8fed9 37.5%, #9df2d5 50%, #94e5d0 62.5%, #8cdacb 75%, #86d0c7 87.5%, #82c7c2 100%);
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
        border-radius: 50px;
    }

    .container .card-profesor{
        position: relative;
        width: 600px;
        height: 370px;
        margin: 20px;
        display: flex;
        transition: 0.5s;
        justify-content: flex-start;
        align-items: center;
        background-image: radial-gradient(circle at 120.44% 56.16%, #ffffff 0, #dffbff 25%, #b5def2 50%, #8bc1dd 75%, #65a8cb 100%);
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
        border-radius: 50px;
    }

    

    .container .card-alumno img{
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%);
        height: 300px;
        transition: 0.5s;
    }

    .container .card-alumno:hover img{
        left: 75%;
        height: 300px;   
    }

    .container .card-profesor img{
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%);
        height: 260px;
        transition: 0.5s;
        margin-bottom: 50px;
    }

    .container .card-profesor:hover img{
        left: 75%;
        height: 260px;   
    }

    .container .card-profesor .content-profesor{
        position: relative;
        width: 50%;
        left: 20%;
        padding: 20px 20px 20px 40px;
        opacity: 0;
        visibility: hidden;
        transition: 0.5s;
    }

    .container .card-profesor:hover .content-profesor{
        left: 0;
        opacity: 1;
        visibility: visible;
    }

    .container .card-profesor .content-profesor h2{
        color: #fff;
        text-transform: uppercase;
        font-size: 2.2em;
        line-height: 2em;
        font-family: 'Open Sans', sans-serif;
        letter-spacing: 2px;
    }

    .container .card-profesor .content-profesor p{
        color: #fff;
        font-family: 'Open Sans', sans-serif;
    }

    .container .card-profesor .content-profesor a{
        position: relative;
        color: #111;
        background: #fff;
        display: inline-block;
        padding: 10px 20px;
        margin-top: 20px;
        text-decoration: none;
        font-weight: 700;
        border-radius: 50px;
        font-family: 'Open Sans', sans-serif;
    }


    .container .card-alumno .content-alumno{
        position: relative;
        width: 50%;
        left: 20%;
        padding: 20px 20px 20px 40px;
        opacity: 0;
        visibility: hidden;
        transition: 0.5s;
    }

    .container .card-alumno:hover .content-alumno{
        left: 0;
        opacity: 1;
        visibility: visible;
    }

    .container .card-alumno .content-alumno h2{
        color: #fff;
        text-transform: uppercase;
        font-size: 2.2em;
        line-height: 2em;
        font-family: 'Open Sans', sans-serif;
        letter-spacing: 2px;
    }

    .container .card-alumno .content-alumno p{
        color: #fff;
        font-family: 'Open Sans', sans-serif;
    }

    .container .card-alumno .content-alumno a{
        position: relative;
        color: #111;
        background: #fff;
        display: inline-block;
        padding: 10px 20px;
        margin-top: 20px;
        text-decoration: none;
        font-weight: 700;
        border-radius: 50px;
        font-family: 'Open Sans', sans-serif;
    }

    
    


</style>