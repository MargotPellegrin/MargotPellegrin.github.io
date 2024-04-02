<script>
    import CR from '../../../public/Wattfor_CR.pdf'
    import github from '../../../public/github.png'
</script>
    
    <div class="title">
        <h1 class="title-h">Wattfor</h1>
    </div>
    
    <div class="presentation">
        <p>Wattfor is a research project part of the <a href="https://www.telecom-sudparis.eu/ecole/les-projets-cassiopee/" target="_blank">Cassiopée</a> program</p>
        <p>It consisted in experiments to estimate Wh consumption in multiplayer games such as fortnite.</p>
        <p>We used a Yocto, Wireshark and a simulation of multiplayer game server we coded.</p>
    </div>
    
    <div class="github">
        <a href="https://github.com/mathcoutant/Wattfor" target="_blank"><img class="logo" src={github} width="70px" height="70px" alt="github logo"/></a>
        <p>You can see the code for the simulation <a href="https://github.com/mathcoutant/Wattfor">here</a></p>
    </div>
    
    <div class="CR">
        <h2>Our final report</h2>
        <object data={CR} type="application/pdf" width="100%" height="800px">
            <p>Unable to display PDF file. <a href={CR} target="_blank">Open</a> instead.</p>
          </object>
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