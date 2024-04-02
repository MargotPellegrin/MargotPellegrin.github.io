<script>
    import github from '../../../public/github.png'
    import TP1 from '../../../public/Rendu_video/TP1.mp4'
    import TP2 from '../../../public/Rendu_video/TP2.mp4'
    import TP3 from '../../../public/Rendu_video/TP3.mp4'
    import Project from '../../../public/Rendu_video/Project.mp4'
</script>
    
    <div class="title">
        <h1 class="title-h">Rendering</h1>
    </div>
    
    <div class="presentation">
        <p>Here is a compilation of rendering in OpenGL projects</p>
        <p>This Rendering methos is really close to the computer system</p>
    </div>
    
    <div class="CR">
        <h2>Practical work 1</h2>
        <video width="100%" height="auto" controls>
            <source src={TP1} type="video/mp4">
            Your browser does not support the video tag.
          </video>
    </div>

    <div class="CR">
        <h2>Practical work 2</h2>
        <video width="100%" height="auto" controls>
            <source src={TP2} type="video/mp4">
            Your browser does not support the video tag.
          </video>
    </div>

    <div class="CR">
        <h2>Practical work 3</h2>
        <video width="100%" height="auto" controls>
            <source src={TP3} type="video/mp4">
            Your browser does not support the video tag.
          </video>
    </div>

    <div class="CR">
        <h2>Final Project</h2>
        <video width="100%" height="auto" controls>
            <source src={Project} type="video/mp4">
            Your browser does not support the video tag.
          </video>
    </div>

    <div class="github">
        <a href="https://github.com/Megakitraz/Projet_Rendu_RopeMan" target="_blank"><img class="logo" src={github} width="70px" height="70px" alt="github logo"/></a>
        <p>You can see the code for the project <a href="https://github.com/Megakitraz/Projet_Rendu_RopeMan">here</a></p>
    </div>
    
    <style>
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