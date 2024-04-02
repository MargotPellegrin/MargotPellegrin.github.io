<script>
    import Arduino from "./projects/Arduino.svelte"; //
    import Blender from "./projects/Blender.svelte"; //
    import Cassiopee from "./projects/Cassiopee.svelte"; //
    import GameJam from "./projects/GameJam.svelte"; //
    import Gate from "./projects/Gate.svelte"; //
    import Laelith from "./projects/Laelith.svelte"; //
    import MMmeCpp from "./projects/MMmeCpp.svelte"; //
    import Plateformer2D from "./projects/Plateformer2D.svelte"; //
    import Rendu from "./projects/Rendu.svelte"; //
    import Reversint from "./projects/Reversint.svelte"; //
    import Tblox from "./projects/Tblox.svelte"; //
    import Warbot from "./projects/Warbot.svelte"; //
    import TodoApp from "./projects/TodoApp.svelte"; //

    let selectedProject = null;

    function selectProject(project) {
        
        selectedProject = project;
        window.scrollTo(0, 0);
    }
</script>

{#if selectedProject != null}
<div class="goback-button">
    <button on:click={ () => selectProject(null)}>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width=40 height=40><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11.9481 14.8285L10.5339 16.2427L6.29122 12L10.5339 7.7574L11.9481 9.17161L10.1196 11H17.6568V13H10.1196L11.9481 14.8285Z" fill="#ffffff"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M4.22183 19.7782C-0.0739419 15.4824 -0.0739419 8.51759 4.22183 4.22183C8.51759 -0.0739419 15.4824 -0.0739419 19.7782 4.22183C24.0739 8.51759 24.0739 15.4824 19.7782 19.7782C15.4824 24.0739 8.51759 24.0739 4.22183 19.7782ZM5.63604 18.364C2.12132 14.8492 2.12132 9.15076 5.63604 5.63604C9.15076 2.12132 14.8492 2.12132 18.364 5.63604C21.8787 9.15076 21.8787 14.8492 18.364 18.364C14.8492 21.8787 9.15076 21.8787 5.63604 18.364Z" fill="#ffffff"></path> </g></svg>
    </button>
</div>
{/if}

{#if selectedProject === "Laelith"}
<Laelith />
{:else if selectedProject === "Jam"}
<GameJam />
{:else if selectedProject === "Cassiopee"}
<Cassiopee />
{:else if selectedProject === "Plateformer"}
<Plateformer2D />
{:else if selectedProject === "Tblox"}
<Tblox />
{:else if selectedProject === "Blender"}
<Blender />
{:else if selectedProject === "MMmeCpp"}
<MMmeCpp />
{:else if selectedProject === "Rendu"}
<Rendu />
{:else if selectedProject === "Arduino"}
<Arduino />
{:else if selectedProject === "Reversint"}
<Reversint />
{:else if selectedProject === "Gate"}
<Gate />
{:else if selectedProject === "Warbot"}
<Warbot />
{:else if selectedProject === "TodoApp"}
<TodoApp />
{:else}
<div class="title">
    <h1 class="title-h">Projects</h1>   
</div>

<div class="subsequence-Laelith">
    <button on:click={ () => selectProject("Laelith")}>
        <h1>Laelith</h1>
        <p>Domain-specific text generative AI</p>
        <p>Front-end application module </p>
    </button>
</div>

<div class="subsequence-Jam">
    <button on:click={ () => selectProject("Jam")}>
        <h1>Save the colors</h1>
        <h2>UniJam</h2>
        <p>FPS in Unity</p>
    </button>
</div>

<div class="subsequence-Cassiopee">
    <button on:click={ () => selectProject("Cassiopee")}>
        <h1>Wattfor</h1>
        <h2>Cassiopée</h2>
        <p>Experiments to estimate Wh consumption in multiplayer games such as fortnite</p>
    </button>
</div>

<div class="subsequence-Plateformer">
    <button on:click={ () => selectProject("Plateformer")}>
        <h1>Platformer 2D</h1>
        <p>Unity, with controller and recreating the physics</p>
    </button>
</div>

<div class="subsequence-Tblox">
    <button on:click={ () => selectProject("Tblox")}>
        <h1>Tblox</h1>
        <p>A Tetris like game in Unity 3D</p>
    </button>
</div>

<div class="subsequence-Blender">
    <button on:click={ () => selectProject("Blender")}>
        <h1>Blender</h1>
        <p>Compilation of Blender work</p>
    </button>
</div>

<div class="subsequence-MMmeCpp">
    <button on:click={ () => selectProject("MMmeCpp")}>
        <h1>M. & Mme</h1>
        <p>Platformer 2D in C++ from scratch</p>
    </button>
</div>

<div class="subsequence-Rendu">
    <button on:click={ () => selectProject("Rendu")}>
        <h1>Rendering OpenGL</h1>
        <p>Rendering with OpenGL, TP and project</p>
    </button>
</div>

<div class="subsequence-Arduino">
    <button on:click={ () => selectProject("Arduino")}>
        <h1>Arduino in FPS</h1>
        <p>Link between Arduino and Unity</p>
    </button>
</div>

<div class="subsequence-Warbot">
    <button on:click={ () => selectProject("Warbot")}>
        <h1>IA for Warbot</h1>
        <p>Optimise a behaviour for an IA to win Warbot</p>
    </button>
</div>

<div class="subsequence-TodoApp">
    <button on:click={ () => selectProject("TodoApp")}>
        <h1>TodoApp in Android</h1>
        <p>Build a TodoApp with APIs in Android Studio</p>
    </button>
</div>

<div class="subsequence-Reversint">
    <button on:click={ () => selectProject("Reversint")}>
        <h1>Revers'INT</h1>
        <p>Reversi game in Java</p>
    </button>
</div>

<div class="subsequence-Gate">
    <button on:click={ () => selectProject("Gate")}>
        <h1>Laitquitable</h1>
        <h2>Gate</h2>
        <p>Social project concerning fair milk</p>
    </button>
</div>
{/if}

<style>
    button{
        background-color: transparent;
        padding: 0;
        margin: 0;
        width: 100%;
        height: 100%;
    }
    .title {
        text-align: center;
        margin: 2em;
    }
    .title-h{
        font-size: 3em;
        color: #ffffff;
    }
    h1 {
        font-size: 2.7em;
        color: #2d2d2d;
    }
    h2 {
        font-size: 1.5em;
        color: #2d2d2d;
    }
    p {
        font-size: 1.1em;
        color: #2d2d2d;
    }
    .goback-button {
        position: fixed;
        top: 10px;
        left: 10px;
        padding: 10px;
        margin-top: 3.5em;
    }
    .subsequence-Laelith {
        background-image: url("../assets/fond_laelith.png");
        background-repeat: no-repeat;
        background-color: #a5afb8;
        background-position:center;
        background-size: 120%, 100%;
        background-attachment: scroll;
        background-blend-mode: overlay;
        padding: 1em;
        margin: 2em;
        border-radius: 1em;
        box-shadow: 0 0 1em #000000aa;
    }
    .subsequence-Laelith:hover {
        filter: drop-shadow(0 0 2em #383949);
        transform: scale(1.005);
    }
    .subsequence-Jam {
        background-image: url("../assets/fond_gamejam.png");
        background-repeat: no-repeat;
        background-color: #a5afb8;
        background-position:center;
        background-size: 100%, 100%;
        background-attachment: scroll;
        background-blend-mode: overlay;
        padding: 1em;
        margin: 2em;
        border-radius: 1em;
        box-shadow: 0 0 1em #000000aa;
    }
    .subsequence-Jam:hover {
        filter: drop-shadow(0 0 2em #383949);
        transform: scale(1.005);
    }
    .subsequence-Cassiopee {
        background-image: url("../assets/fond_cassiopee.jpg");
        background-repeat: no-repeat;
        background-color: #a5afb8;
        background-position:center;
        background-size: 120%, 100%;
        background-attachment: scroll;
        background-blend-mode: overlay;
        padding: 1em;
        margin: 2em;
        border-radius: 1em;
        box-shadow: 0 0 1em #000000aa;
    }
    .subsequence-Cassiopee:hover {
        filter: drop-shadow(0 0 2em #383949);
        transform: scale(1.005);
    }
    .subsequence-Plateformer {
        background-image: url("../assets/fond_plateformer.png");
        background-repeat: no-repeat;
        background-color: #a5afb8;
        background-position:center;
        background-size: 120%, 100%;
        background-attachment: scroll;
        background-blend-mode: overlay;
        padding: 1em;
        margin: 2em;
        border-radius: 1em;
        box-shadow: 0 0 1em #000000aa;
    }
    .subsequence-Plateformer:hover {
        filter: drop-shadow(0 0 2em #383949);
        transform: scale(1.005);
    }
    .subsequence-Tblox {
        background-image: url("../assets/fond_tblox.png");
        background-repeat: no-repeat;
        background-color: #a5afb8;
        background-position:center;
        background-size: 120%, 100%;
        background-attachment: scroll;
        background-blend-mode: overlay;
        padding: 1em;
        margin: 2em;
        border-radius: 1em;
        box-shadow: 0 0 1em #000000aa;
    }
    .subsequence-Tblox:hover {
        filter: drop-shadow(0 0 2em #383949);
        transform: scale(1.005);
    }
    .subsequence-Blender {
        background-image: url("../assets/fond_blender.jpg");
        background-repeat: no-repeat;
        background-color: #a5afb8;
        background-position:center;
        background-size: 120%, 100%;
        background-attachment: scroll;
        background-blend-mode: overlay;
        padding: 1em;
        margin: 2em;
        border-radius: 1em;
        box-shadow: 0 0 1em #000000aa;
    }
    .subsequence-Blender:hover {
        filter: drop-shadow(0 0 2em #383949);
        transform: scale(1.005);
    }
    .subsequence-MMmeCpp {
        background-image: url("../assets/fond_MMmeCpp.jpg");
        background-repeat: no-repeat;
        background-color: #a5afb8;
        background-position:center;
        background-size: 120%, 100%;
        background-attachment: scroll;
        background-blend-mode: overlay;
        padding: 1em;
        margin: 2em;
        border-radius: 1em;
        box-shadow: 0 0 1em #000000aa;
    }
    .subsequence-MMmeCpp:hover {
        filter: drop-shadow(0 0 2em #383949);
        transform: scale(1.005);
    }
    .subsequence-Rendu {
        background-image: url("../assets/fond_rendu.png");
        background-repeat: no-repeat;
        background-color: #a5afb8;
        background-position:center;
        background-size: 120%, 100%;
        background-attachment: scroll;
        background-blend-mode: overlay;
        padding: 1em;
        margin: 2em;
        border-radius: 1em;
        box-shadow: 0 0 1em #000000aa;
    }
    .subsequence-Rendu:hover {
        filter: drop-shadow(0 0 2em #383949);
        transform: scale(1.005);
    }
    .subsequence-Arduino {
        background-image: url("../assets/fond_arduino.jpg");
        background-repeat: no-repeat;
        background-color: #a5afb8;
        background-position:center;
        background-size: 120%, 100%;
        background-attachment: scroll;
        background-blend-mode: overlay;
        padding: 1em;
        margin: 2em;
        border-radius: 1em;
        box-shadow: 0 0 1em #000000aa;
    }
    .subsequence-Arduino:hover {
        filter: drop-shadow(0 0 2em #383949);
        transform: scale(1.005);
    }
    .subsequence-Warbot {
        background-image: url("../assets/fond_warbot.png");
        background-repeat: no-repeat;
        background-color: #a5afb8;
        background-position:center;
        background-size: 120%, 100%;
        background-attachment: scroll;
        background-blend-mode: overlay;
        padding: 1em;
        margin: 2em;
        border-radius: 1em;
        box-shadow: 0 0 1em #000000aa;
    }
    .subsequence-Warbot:hover {
        filter: drop-shadow(0 0 2em #383949);
        transform: scale(1.005);
    }
    .subsequence-TodoApp {
        background-image: url("../assets/fond_todo.jpg");
        background-repeat: no-repeat;
        background-color: #a5afb8;
        background-position:center;
        background-size: 120%, 100%;
        background-attachment: scroll;
        background-blend-mode: overlay;
        padding: 1em;
        margin: 2em;
        border-radius: 1em;
        box-shadow: 0 0 1em #000000aa;
    }
    .subsequence-TodoApp:hover {
        filter: drop-shadow(0 0 2em #383949);
        transform: scale(1.005);
    }
    .subsequence-Reversint {
        background-image: url("../assets/fond_reversint.png");
        background-repeat: no-repeat;
        background-color: #a5afb8;
        background-position:center;
        background-size: 120%, 100%;
        background-attachment: scroll;
        background-blend-mode: overlay;
        padding: 1em;
        margin: 2em;
        border-radius: 1em;
        box-shadow: 0 0 1em #000000aa;
    }
    .subsequence-Reversint:hover {
        filter: drop-shadow(0 0 2em #383949);
        transform: scale(1.005);
    }
    .subsequence-Gate {
        background-image: url("../assets/fond_gate.jpg");
        background-repeat: no-repeat;
        background-color: #a5afb8;
        background-position:center;
        background-size: 120%, 100%;
        background-attachment: scroll;
        background-blend-mode: overlay;
        padding: 1em;
        margin: 2em;
        border-radius: 1em;
        box-shadow: 0 0 1em #000000aa;
    }
    .subsequence-Gate:hover {
        filter: drop-shadow(0 0 2em #383949);
        transform: scale(1.005);
    }

</style>