<script>
    import github from '../../../public/github.png'
    import rules from '../../../public/IA_rules.pdf'
</script>
    
    <div class="title">
        <h1 class="title-h">Warbot</h1>
    </div>
    
    <div class="presentation">
        <p>This project consists to optimize a behaviour for the Warbot game</p>
        <p>Duel between two team</p>
        <p>The team with the more "hamburger" at the end win</p>
        <p>We can attack, defend and farm</p>
    </div>

    <div class="CR">
        <h2>The rules</h2>
        <object data={rules} type="application/pdf" width="100%" height="800px">
            <p>Unable to display PDF file. <a href={rules} target="_blank">Open</a> instead.</p>
          </object>
    </div>

    <div class="CR">
        <h2>Our solution</h2>
        <p>We choose to attack the enemy to destroy the base</p>
    </div>

    <div class="github">
        <a href="https://github.com/MargotPellegrin/Warbot" target="_blank"><img class="logo" src={github} width="70px" height="70px" alt="github logo"/></a>
        <p>You can see the code for the project <a href="https://github.com/MargotPellegrin/Warbot">here</a></p>
    </div>

    <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQefKF_qHQxQG1AyamHRmkD3YWiPGBWr5Z214p-sSI6gAlSC4Y_TV61ls4bNBPCPR8tweKXnaO3GfMP/embed?start=true&loop=true&delayms=5000" frameborder="0" width="1200" height="700"></iframe>
    
    
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