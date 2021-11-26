<template>

    <div class="instruction">
        <h1>SELECCIONA TU ROL</h1>
    </div>

    <div class="body-inicio"> 
        
        <div class="container">
            

            <div class="card">
                <div class="content">
                    <h2>ESTUDIANTE</h2>
                        <p>
                            No te rindas nunca porque nunca sabes si el próximo intento será el que funcionará.
                        </p>
                    <a href="#">Empezar</a>
                </div>
                <img style="margin-bottom:40px;" src="../assets/landingPage/Student.svg">
            </div>

            <div class="card-profesor">
                <div class="content">
                    <h2>Profesor</h2>
                        <p>
                            Puedes enseñar una lección un día; pero si puedes enseñar creando curiosidad, el aprendizaje será un proceso para toda la vida 
                        </p>
                    <a href="#">Empezar</a>
                </div>
                <img src="../assets/landingPage/Teacher.svg">
            </div>
        </div>
    </div>

</template>

<style>

    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@500&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

    

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
        background-color: azure;
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
    }

    .container .card{
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

    .container .card img{
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%);
        height: 300px;
        transition: 0.5s;
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

    .container .card:hover img{
        left: 75%;
        height: 300px;   
    }

    .container .card-profesor:hover img{
        left: 75%;
        height: 260px;   
    }

    .container .card .content, .card-profesor .content{
        position: relative;
        width: 50%;
        left: 20%;
        padding: 20px 20px 20px 40px;
        opacity: 0;
        visibility: hidden;
        transition: 0.5s;
    }

    .container .card:hover .content, .card-profesor:hover .content{
        left: 0;
        opacity: 1;
        visibility: visible;
    }

    .container .card .content h2, .card-profesor .content h2{
        color: #fff;
        text-transform: uppercase;
        font-size: 2.2em;
        line-height: 2em;
        font-family: 'Open Sans', sans-serif;
        letter-spacing: 2px;
    }

    .container .card .content p, .card-profesor .content p{
        color: #fff;
        font-family: 'Open Sans', sans-serif;
    }

    .container .card .content a, .card-profesor .content a{
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

    @media (max-widith: 991px) {
        .container .card{
            width: auto;
            max-width: 600px;
            align-items: flex-start;
        }

        .container .card:hover{
            height: 600px;
        }

        .container .card:hover img{
            left: 50%;
            height: 350px;
        }nathan

        .container .card .content{
            width: 100px;
            left: 0;
            padding: 40px
        }
        
    }

    @media (max-widith: 767px){
        .container{
            flex-direction: column;
        }

        .container .card{
            margin: 40px 20px;
        }
    }

    @media (max-widith: 420px){
        .container .card .content{
            padding: 30;
        }
        .container .card:hover img{
            left: 50%;
            height: 300px;
        }
    }



</style>
