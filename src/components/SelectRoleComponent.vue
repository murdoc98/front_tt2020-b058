<template>
    <div class="body-role">
        <div class="container-fluid">
            <div class="container-role">

                <div class="card-student">
                    <div class="content">
                        <h2>Alumno</h2>
                        <p>Nunca te rindas, el siguiente intento puede ser el que funcione</p>
                        <a href="#" v-on:click='this.$router.push({name: "StudentLogin"});'>Comenzar</a>
                    </div>
                    <img src="../assets/landingPage/Student.svg" alt="">    
                </div>

                <div class="card-profesor">
                    <div class="content">
                        <h2>Profesor</h2>
                        <p>La docencia, es la unica profesion que crea todas las demas profesiones</p>
                        <a href="#" v-on:click='this.$router.push({name: "TeachersLogin"});'>Comenzar</a>
                    </div>
                    <img src="../assets/landingPage/Teacher.svg" alt="">    
                </div>
                

            </div>
        </div>
        
    </div>    
</template>

<style lang="scss" scoped>
    *
    {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .body-role
    {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        min-height: 100vh;

    }

    .container-role
    {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .container-role .card-student
    {
        position: relative;
        width: 600px;
        height: 350px;
        margin: 20px;
        display: flex;
        transition: 0.5s;
        justify-content: flex-start;
        align-items: center;
        background: rgb(196,249,245);
        background: radial-gradient(circle, rgba(196,249,245,1) 0%, rgba(62,217,206,1) 52%, rgba(16,158,148,1) 95%);
        border-radius: 45px;
    }

    .container-role .card-student img
    {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        height: 310px;
        transition: 0.5s;
    }

    .container-role .card-student:hover img
    {
        left: 75%;
        height: 310px;
    }

    .container-role .card-student .content
    {
        position: relative;
        width: 50%;
        left: 20%;
        padding: 20px 20px 20px 40px;
        opacity: 0;
        visibility: hidden;
        transition: 0.5s;
        text-align: center;
    }

    .container-role .card-student:hover .content
    {
        left: 0;
        opacity: 1;
        visibility: visible;
    }

    .container-role .card-student .content h2
    {
        color: azure;
        text-transform: uppercase;
        font-size: 2.2em;
        line-height: 1em;
        margin-bottom: 10px;
    }

    .container-role .card-student .content p
    {
        color: azure;
        margin-bottom: 10px;
    }
    
    .container-role .card-student .content a
    {
        position: relative;
        color: black;
        background: azure;
        display: inline-block;
        padding: 10px 20px;
        margin-top: 10px;
        text-decoration: none;
        font-weight: 700;
        border-radius: 45px;
    }

    .container-role .card-profesor
    {
        position: relative;
        width: 600px;
        height: 350px;
        margin: 20px;
        display: flex;
        transition: 0.5s;
        justify-content: flex-start;
        align-items: center;
        background: rgb(0,212,255);
        background: radial-gradient(circle, rgba(0,212,255,1) 0%, rgba(66,149,199,1) 33%, rgba(57,138,207,1) 55%, rgba(48,127,215,1) 100%, rgba(5,80,250,1) 100%, rgba(49,47,156,1) 100%);
        border-radius: 45px;
    }

    .container-role .card-profesor img
    {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        height: 250px;
        transition: 0.5s;
        margin-bottom: 20px;
    }

    .container-role .card-profesor:hover img
    {
        left: 78%;
        height: 250x;
    }

    .container-role .card-profesor .content
    {
        position: relative;
        width: 50%;
        left: 20%;
        padding: 20px 20px 20px 40px;
        opacity: 0;
        visibility: hidden;
        transition: 0.5s;
        text-align: center;
    }

    .container-role .card-profesor:hover .content
    {
        left: 0;
        opacity: 1;
        visibility: visible;
    }

    .container-role .card-profesor .content h2
    {
        color: azure;
        text-transform: uppercase;
        font-size: 2.2em;
        line-height: 1em;
        margin-bottom: 10px;
    }

    .container-role .card-profesor .content p
    {
        color: azure;
        margin-bottom: 10px;
        
    }
    
    .container-role .card-profesor .content a
    {
        position: relative;
        color: black;
        background: azure;
        display: inline-block;
        padding: 10px 20px;
        margin-top: 10px;
        text-decoration: none;
        font-weight: 700;
        border-radius: 45px;
    }

    @media (max-width: 991px)
    {
        .container-role .card-student
        {
            width: auto;
            max-width: 600px;
            align-items: flex-start;
        }
        .container-role .card-profesor
        {
            width: auto;
            max-width: 600px;
            align-items: flex-start;
        }

        .container-role .card-student:hover
        {
            height: 600px;
        }
        .container-role .card-profesor:hover
        {
            height: 600px;
        }

        .container-role .card-student img
        {
            
            height: 300px;
            margin-bottom: 30px;
        }
        .container-role .card-profesor img
        {
            height: 230px;
            margin-bottom: 30px;
        }

        .container-role .card-student:hover img
        {
            left: 50%;
            height: 300px;
        }
        .container-role .card-profesor:hover img
        {
            left: 50%;
            height: 230px;
        }

        .container-role .card-student .content
        {
            width: 100%;
            left: 0;
            padding: 40px;
        }
        .container-role .card-profesor .content
        {
            width: 100%;
            left: 0;
            padding: 40px;
        }

    }

    @media (max-width: 767px)
    {
        .container-role
        {
            flex-direction: column;
        }
    }
    
    
    

    



     



</style>