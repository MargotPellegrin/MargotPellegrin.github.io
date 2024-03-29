<script>
    import head from '../../../public/Blender_video/head.mp4'
    import dice from '../../../public/Blender_video/dice.mp4'
    import melting from '../../../public/Blender_video/meltingpot.mp4'
    import robot from '../../../public/Blender_video/robot.mp4'
    import bottle from '../../../public/Blender_video/BrokenBottle.mp4'   
</script>
    
    <div class="title">
        <h1 class="title-h">Blender</h1>
    </div>
    
    <div class="presentation">
        <p>Here are the different projects I made with blender with professor help</p>
    </div>  
    
    <div class="CR">
        <h2>Melting pot</h2>
        <video width="100%" controls>
            <source src={melting} type="video/mp4">
            Your browser does not support the video tag.
    </div>

    <div class="CR">
        <h2>Broken Bottle</h2>
        <video width="100%" controls>
            <source src={bottle} type="video/mp4">
            Your browser does not support the video tag.
    </div>

    <div class="CR">
        <h2>Animated Robot</h2>
        <video width="100%" controls>
            <source src={robot} type="video/mp4">
            Your browser does not support the video tag.
    </div>
    
    <div class="CR">
        <h2>Head modelling</h2>
        <video width="100%" controls>
            <source src={head} type="video/mp4">
            Your browser does not support the video tag.
    </div>

    <div class="CR">
        <h2>Dice modelling</h2>
        <video width="100%" controls>
            <source src={dice} type="video/mp4">
            Your browser does not support the video tag.
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