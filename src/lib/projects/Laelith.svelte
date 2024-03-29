<script>
import video from '../../../public/Laelith_video.mp4'
import pres from '../../../public/Laelith_initial.pdf'
import design from '../../../public/Laelith_design.pdf'
import demo from '../../../public/Laelith_demo.mp4'
import im1 from '../../../public/Laelith_presentation/presentation1.png'
import im2 from '../../../public/Laelith_presentation/presentation2.png'
import im3 from '../../../public/Laelith_presentation/presentation3.png'
import im4 from '../../../public/Laelith_presentation/presentation4.png'
import im5 from '../../../public/Laelith_presentation/presentation5.png'
import im6 from '../../../public/Laelith_presentation/presentation6.png'
import im7 from '../../../public/Laelith_presentation/presentation7.png'
import im8 from '../../../public/Laelith_presentation/presentation8.png'
import im9 from '../../../public/Laelith_presentation/presentation9.png'
import im10 from '../../../public/Laelith_presentation/presentation10.png'
import im11 from '../../../public/Laelith_presentation/presentation11.png'
import im12 from '../../../public/Laelith_presentation/presentation12.png'
import im13 from '../../../public/Laelith_presentation/presentation13.png'
import im14 from '../../../public/Laelith_presentation/presentation14.png'
import im15 from '../../../public/Laelith_presentation/presentation15.png'
import im16 from '../../../public/Laelith_presentation/presentation16.png'
import im17 from '../../../public/Laelith_presentation/presentation17.png'
import im18 from '../../../public/Laelith_presentation/presentation18.png'
import im19 from '../../../public/Laelith_presentation/presentation19.png'
import im20 from '../../../public/Laelith_presentation/presentation20.png'
import im21 from '../../../public/Laelith_presentation/presentation21.png'
import im22 from '../../../public/Laelith_presentation/presentation22.png'
import im23 from '../../../public/Laelith_presentation/presentation23.png'
import im24 from '../../../public/Laelith_presentation/presentation24.png'
import im25 from '../../../public/Laelith_presentation/presentation25.png'
import im26 from '../../../public/Laelith_presentation/presentation26.png'
import im27 from '../../../public/Laelith_presentation/presentation27.png'
import im28 from '../../../public/Laelith_presentation/presentation28.png'
import im29 from '../../../public/Laelith_presentation/presentation29.png'
import im30 from '../../../public/Laelith_presentation/presentation30.png'
import im31 from '../../../public/Laelith_presentation/presentation31.png'
import im32 from '../../../public/Laelith_presentation/presentation32.png'
import im33 from '../../../public/Laelith_presentation/presentation33.png'
import im34 from '../../../public/Laelith_presentation/presentation34.png'
import im35 from '../../../public/Laelith_presentation/presentation35.png'
import im36 from '../../../public/Laelith_presentation/presentation36.png'
import im37 from '../../../public/Laelith_presentation/presentation37.png'
import im38 from '../../../public/Laelith_presentation/presentation38.png'
import im39 from '../../../public/Laelith_presentation/presentation39.png'
import im40 from '../../../public/Laelith_presentation/presentation40.png'
import im41 from '../../../public/Laelith_presentation/presentation41.png'
import im42 from '../../../public/Laelith_presentation/presentation42.png'
import im43 from '../../../public/Laelith_presentation/presentation43.png'

// Define a variable to keep track of the current slide index
let currentSlide = 1;

// Define an array of image sources
let images = [
    im1, im2, im3, im4, im5, im6, im7, im8, im9, im10,
    im11, im12, im13, im14, im15, im16, im17, im18, im19, im20,
    im21, im22, im23, im24, im25, im26, im27, im28, im29, im30,
    im31, im32, im33, im34, im35, im36, im37, im38, im39, im40,
    im41, im42, im43
];

// Function to handle the click event on the right arrow
function nextSlide() {
    currentSlide = (currentSlide + 1) % images.length;
}
</script>
<div class="title">
    <h1 class="title-h">Laelith</h1>
</div>

<div class="pitch">
    <p>My group and I have been working with the Laelith Roleplaying Game Foundation to make it more accessible. Our goal is a world where anyone, regardless of their level of experience or knowledge, can become a quest creator.  </p>
    <p>The creation of role-playing scenarios has often been reserved for the elite, for those brave enough to delve into the rules and history of the game. This leaves many enthusiasts on the sidelines, unable to share their adventures because the barrier to entry is too high. </p>
    <p> Our solution is to make Laelith's quest editor accessible to everyone. We've redesigned the editor to make it more intuitive and easier to use. But our biggest contribution is the integration of a generative Artificial Intelligence within the editor. This AI, fed by all the Laelith lore, is capable of understanding the game's universe. Thanks to it, you no longer need to know the world inside out. You can simply give it an idea and it will help you develop a captivating scenario. </p>
    <p> Our solution is for everyone, from enthusiasts to curious beginners, from scriptwriters to players - everyone can benefit from our solution to bring imaginary adventures to life. </p>
</div>

<div class="video">
<h2>Presentation</h2>
<p>Here is a video made for the project</p>
<video width="100%" controls>
    <source src={video} type="video/mp4">
    Your browser does not support the video tag.
</video>
</div>

<div class="more">
    <h2>About the project</h2>
    <p>The initial project</p>
    <object data={pres} type="application/pdf" width="100%" height="800px">
        <p>Unable to display PDF file. <a href={pres} target="_blank">Open</a> instead.</p>
      </object>
</div>

<div class="design">
    <h2>Design improvment</h2>
    <p>In this project, we had to rethink the design of the application, we made a design system and used CSS global.</p>
    <p>At first the project was opening a lot of different pop ups for each asset of the application.</p>
    <p>All the Front-end was made with HTML, CSS, Svelte framework in TypeScript, we used figma for the design.</p>
    <object data={design} type="application/pdf" width="100%" height="800px">
        <p>Unable to display PDF file. <a href={design} target="_blank">Open</a> instead.</p>
    </object>
</div>

<div class="IA">
    <h2>Artificial Intelligence</h2>
    <p>We implemented an AI to help people to create quests</p>
    <p>We used OpenAI API and a python server to be coherent with Laelith</p>
</div>

    <div class="presentation">
        <h2>Final presentation</h2>
        <div class="slides">
            <img src={images[currentSlide]} alt={`Slide ${currentSlide}`}/>
        </div>
        <button class="presentation-button" on:click={nextSlide}><svg fill="#ffffff" height="50" width="50" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z"></path> </g></svg></button>
    </div>

    <div class="demo">
        <h2>Demo</h2>
        <p>Here is a video of the demo</p>
        <video width="100%" controls>
            <source src={demo} type="video/mp4">
            Your browser does not support the video tag.
        </video>
    </div>
<style>
    .presentation-button {
        background-color: #252525;
        padding: 0.5em 1em;
        border: none;
        border-radius: 0.5em;
        cursor: pointer;
    }
    .presentation {
            margin: 2em;
            padding: 1em;
            border-radius: 1em;
            box-shadow: 0 0 1em #000000aa;
            background-color: #252525;
        }
    .slides {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            gap: 1em;
        }
    .slides img {
            max-width: 100%;
            height: auto;
        }
    .title {
        text-align: center;
        margin: 2em;
    }
    .title-h{
        font-size: 3em;
        color: #ffffff;
    }
    .pitch {
        margin: 2em;
        padding: 1em;
        border-radius: 1em;
        box-shadow: 0 0 1em #000000aa;
        background-color: #252525;
    }
    p{
        font-size: 1.1em;
        color: #ffffff;
    }
    a{
        color: #ffffff;
        font-weight: bold;
    }
    a:hover{
        color: #ffffff;
        text-decoration: underline;
    }
</style>