<script>
import im1 from '../../../public/Unijam_images/im1.png'
import im2 from '../../../public/Unijam_images/im2.png'
import im3 from '../../../public/Unijam_images/im3.png'
import im4 from '../../../public/Unijam_images/im4.png'
import im5 from '../../../public/Unijam_images/im5.png'
import im6 from '../../../public/Unijam_images/im6.png'
import im7 from '../../../public/Unijam_images/im7.png'
import im8 from '../../../public/Unijam_images/im8.png'
import im9 from '../../../public/Unijam_images/im9.png'
import im10 from '../../../public/Unijam_images/im10.png'
import im11 from '../../../public/Unijam_images/im11.png'
import im12 from '../../../public/Unijam_images/im12.png'
import im20 from '../../../public/Unijam_images/im12bis.png'
import im13 from '../../../public/Unijam_images/im13.png'
import im21 from '../../../public/Unijam_images/im13bis.png'
import im14 from '../../../public/Unijam_images/im14.png'
import im15 from '../../../public/Unijam_images/im15.png'
import im16 from '../../../public/Unijam_images/im16.png'
import im22 from '../../../public/Unijam_images/im16bis.png'
import im17 from '../../../public/Unijam_images/im17.png'
import im23 from '../../../public/Unijam_images/im17bis.png'
import im18 from '../../../public/Unijam_images/im18.png'
import im24 from '../../../public/Unijam_images/im18bis.png'
import im19 from '../../../public/Unijam_images/im19.png'
import github from '../../../public/github.png'

import { onMount } from 'svelte';

let time = new Date();

// these automatically update when `time`
// changes, because of the `$:` prefix
$: seconds = time.getSeconds();


onMount(() => {
    const interval = setInterval(() => {
        time = new Date();
    }, 1000);

    return () => {
        clearInterval(interval);
    };
});

// Define a variable to keep track of the current slide index
let currentSlide = 1;

// Define an array of image sources
let images = [
    im1, im2, im3, im4, im5, im6, im7, im8, im9, im10,
    im11, im12, im13, im14, im15, im16, im17, im18, im19
];
let alt_images = [null, null, null, null, null, null, null, null, null, null, null,
    im20, im21, null, null, im22, im23, im24, null]

function nextSlide() {
    currentSlide = (currentSlide + 1) % images.length;
}
</script>

<div class="title">
    <h1 class="title-h">Save the colors</h1>
</div>

<div class="presentation">
    <p>Save the colors is a First Person Shooter game that was develop during the <a href="https://www.ensiie.fr/unijam-2023/" target="_blank">UniJam 2023</a></p>
    <p>This game was created by 8 students: developers, game designers and 3D artists for a gamejam during 2 days. (We won the jury prize 🥳)</p>
    <p>It's a platformer-sandbox fps in which you can color the environment to give it effects and progress through the game.</p>
</div>

<div class="tryit">
    <h2>You can try it <a href="https://szakon.itch.io/color">here</a></h2>
    <iframe src="https://itch.io/embed/2386540" width="552" height="167" frameborder="0"><a href="https://szakon.itch.io/color">Save the Color by szakon, Snibaw</a></iframe>
</div>

<div class="github">
    <a href="https://github.com/Snibaw/UniJam" target="_blank"><img class="logo" src={github} width="70px" height="70px" alt="github logo"/></a>
    <p>You can see the code for the game <a href="https://github.com/Snibaw/UniJam" target="_blank">here</a></p>
</div>

<div class="mypart">
    <h2>My contribution</h2>
    <p>In this project, I was responsible for the 3D conception of the objects in the game and the design for the tutorial</p>
    <p>I created the 3D models of the objects and the textures of the game using blender and Unity</p>
</div>

<div class="diaporama">
    <h2>The objects and designs</h2>
    <div class="slides">
        {#if currentSlide === 11 || currentSlide === 12 || currentSlide === 15 || currentSlide === 16 || currentSlide === 17}
            {#if seconds % 2 === 0}
            <img class="slide" src={images[currentSlide]} alt={`Slide ${currentSlide}`} />
            {:else}
            <img class="slide" src={alt_images[currentSlide]} alt={`Slide ${currentSlide}`} />
            {/if}
        {:else}
        <img class="slide" src={images[currentSlide]} alt={`Slide ${currentSlide}`} />
        {/if}
    </div>
    <button class="presentation-button" on:click={nextSlide}><svg fill="#ffffff" height="50" width="50" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z"></path> </g></svg></button>
</div>

<style>
    .presentation-button {
        background-color: #252525;
        padding: 0.5em 1em;
        border: none;
        border-radius: 0.5em;
        cursor: pointer;
    }
    .slide{
        height: 600px;
    }
    .diaporama {
            margin: 2em;
            padding: 1em;
            border-radius: 1em;
            box-shadow: 0 0 1em #000000aa;
            background-color: #252525;
            height: 750px;
        }
    .slides {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            gap: 1em;
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