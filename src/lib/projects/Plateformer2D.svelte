<script>
    import CR_interaction from '../../../public/CR_interaction.pdf'
    import CR_IHM from '../../../public/CR_IHM.pdf'
    import github from '../../../public/github.png'
</script>
    
    <div class="title">
        <h1 class="title-h">Platformer 2D</h1>
    </div>
    
    <div class="presentation">
        <p>This project is a platformer 2D that put an effort in the HCI (Human Computer Interaction), we can use a controller to play and also the keyboard.</p>
        <p>We made at first a study of the different interactions for different platformer</p>
        <p>Then we developed our own platformer without using the Unity physics, so we made our own collision system</p>
    </div>
    
    <div class="github">
        <a href="https://github.com/tihine/Platformer_2D" target="_blank"><img class="logo" src={github} width="70px" height="70px" alt="github logo"/></a>
        <p>You can see the code for the platformer <a href="https://github.com/tihine/Platformer_2D" target="_blank">here</a></p>
    </div>
    
    <div class="CR">
        <h2>Our interactions study report</h2>
        <object data={CR_interaction} type="application/pdf" width="100%" height="800px">
            <p>Unable to display PDF file. <a href={CR_interaction} target="_blank">Open</a> instead.</p>
          </object>
    </div>

    <div class="demo">
        <h2>Try out our game here !</h2>
        <iframe src="https://web4.ensiie.fr/~bouyer/IHM/Gamepad2023/CASSE%20PELLEGRIN%20POULAIN/Build_WebGL/" width=100% height=700px></iframe>
    </div>

    <div class="CR">
        <h2>Our final report</h2>
        <object data={CR_IHM} type="application/pdf" width="100%" height="800px">
            <p>Unable to display PDF file. <a href={CR_IHM} target="_blank">Open</a> instead.</p>
          </object>
    </div>
    
    <style>
        .logo{
            margin-bottom: 0;
            padding-bottom: 0;
        }
        .title {
            text-align: center;
            margin: 2em;
        }
        .title-h{
            font-size: 3em;
            color: #ffffff;
        }
        .presentation {
            margin: 2em;
            padding: 1em;
            border-radius: 1em;
            box-shadow: 0 0 1em #000000aa;
            background-color: #252525;
        }
        a{
            color: #ffffff;
            font-weight: bold;
        }
        a:hover{
            color: #ffffff;
            text-decoration: underline;
        }
        p{
            font-size: 1.1em;
            color: #ffffff;
        }
    </style>