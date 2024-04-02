<script>
    import video from '../../../public/ProjetArduino.mp4'
</script>
    
    <div class="title">
        <h1 class="title-h">Arduino X Unity</h1>
    </div>
    
    <div class="presentation">
        <p>This project mixes Arduino and Unity</p>
        <p>The purpuse is to have interactions between sensors and the game</p>
        <p>The game for the project is "Save the Colors" from the UniJam 2023</p>
    </div>

    <div class="CR">
        <video width="100%" height="auto" controls>
            <source src={video} type="video/mp4">
            Your browser does not support the video tag.
          </video>
    </div>
    
    <div class="CR">
        <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTjAdAuRTVrg61V52IpHFrXUsaWH_3XdmxHE7GzGUPjLfMG25x6xw5w8ntXvQKvapxr_ujYCQYBaVU-/embed?start=true&loop=true&delayms=5000" frameborder="0" width="1200" height="700"></iframe>
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