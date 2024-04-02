<script>
    import petit_paysan from '../../../public/affiche_petit_paysan.png'
    import poster from '../../../public/Poster_laitquitable.png'
    import noel from '../../../public/Affiche-marché-de-noel.pdf'
    import affiche from '../../../public/Affiche_laitquitable.png'
</script>
    
    <div class="title">
        <h1 class="title-h">Laitquitable 2021-2022</h1>
    </div>
    
    <div class="presentation">
        <p>Laitquitable is a social project that promotes "Faire France" a fair trade milk brand in France</p>
        <p>This is a group project that used management methods</p>
        <p>We learned AGILE method and had a MOOC about it</p>
        <p>We had several meetings and presentations</p>
    </div>
    
    <div class="CR">
        <h2>SIA 2022</h2>
        <p>For the project, we were on the stand of Faire France at "Salon International de l'Agriculture"</p>
    </div>

    <div class="CR">
        <h2>Here a video I made at the end of the project</h2>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/0xFpuvRaAYg?si=kDzDmx1ShG0oAJKY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>

    <div class="CR">
        <h2>Here posters to resume the project</h2>
        <img src={affiche} alt="affiche" width="60%"/>
        <img src={poster} alt="poster" width="80%"/>
    </div>
    
    <div class="CR">
        <h2>Here posters I made during the project</h2>
        <img src={petit_paysan} alt="affiche film" width="60%"/>
        <object data={noel} type="application/pdf" width="60%" height="1120px">
            <p>Unable to display PDF file. <a href={noel} target="_blank">Open</a> instead.</p>
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