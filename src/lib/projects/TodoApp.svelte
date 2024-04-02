<script>
    import github from '../../../public/github.png'
</script>
    
    <div class="title">
        <h1 class="title-h">TodoApp</h1>
    </div>
    
    <div class="presentation">
        <p>This is a mobile development project</p>
        <p>It is a simple Todo App which uses some APIs</p>
        <p>This was coded with Android studio (Kotlin)</p>
    </div>
    
    <div class="github">
        <a href="https://github.com/jondew/TodoDM" target="_blank"><img class="logo" src={github} width="70px" height="70px" alt="github logo"/></a>
        <p>You can see the code for the project <a href="https://github.com/jondew/TodoDM">here</a></p>
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