<script>
    let coordinates = {
        name: "Margot Pellegrin",
        email: "margot.pellegrin@gmail.com",
        phone: "+33 6 78 13 54 17"
    };

    let display = false;

    function close() {
        display = false;
    }
    function open() {
        display = true;
    }
</script>

<style>
    .coordinates {
        position: fixed;
        bottom: 10px;
        right: 10px;
        background-color: #242424;
        padding: 10px;
        border-radius: 5px;
        border : 1px solid #1b1b1b;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
    }

    .close-button {
        position: absolute;
        top: 5px;
        right: 5px;
        background-color: transparent;
        border: none;
        cursor: pointer;
        padding: 0;
        margin: 0;
    }

    .open-button {
        position: fixed;
        bottom: 10px;
        right: 10px;
        background-color: #242424;
        color: white;
        border: 1px solid #1b1b1b;
        padding: 0;
        margin: 0;
        border-radius: 5px;
        cursor: pointer;
    }
</style>
{#if display}
    <div class="coordinates">
        <button class="close-button" on:click={close}>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0,0,256,256">
            <g fill-opacity="0" fill="#dddddd" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,256v-256h256v256z" id="bgRectangle"></path></g><g fill="#000000" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(10.66667,10.66667)"><path d="M18,21h-12c-1.657,0 -3,-1.343 -3,-3v-12c0,-1.657 1.343,-3 3,-3h12c1.657,0 3,1.343 3,3v12c0,1.657 -1.343,3 -3,3z" opacity="0.35"></path><path d="M14.812,16.215l-7.027,-7.027c-0.384,-0.384 -0.384,-1.008 0,-1.392l0.011,-0.011c0.384,-0.384 1.008,-0.384 1.392,0l7.027,7.027c0.384,0.384 0.384,1.008 0,1.392l-0.011,0.011c-0.384,0.384 -1.008,0.384 -1.392,0z"></path><path d="M7.785,14.812l7.027,-7.027c0.384,-0.384 1.008,-0.384 1.392,0l0.011,0.011c0.384,0.384 0.384,1.008 0,1.392l-7.027,7.027c-0.384,0.384 -1.008,0.384 -1.392,0l-0.011,-0.011c-0.384,-0.384 -0.384,-1.008 0,-1.392z"></path></g></g>
            </svg>
        </button>
        <h3>{coordinates.name}</h3>
        <p>Email: {coordinates.email}</p>
        <p>Phone: {coordinates.phone}</p>
    </div>
{:else}
    <button class="open-button" on:click={open}>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="45" height="45" viewBox="0,0,256,256">
        <g fill="#fffefe" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M13,4c-4.962,0 -9,4.037 -9,9v24c0,4.963 4.038,9 9,9h24c0.338,0 0.671,-0.02159 1,-0.05859v-41.88281c-0.329,-0.037 -0.662,-0.05859 -1,-0.05859zM40,4.52539v9.47461h6v-1c0,-3.91 -2.51,-7.23561 -6,-8.47461zM22,12c7.168,0 13,5.832 13,13c0,7.168 -5.832,13 -13,13c-7.168,0 -13,-5.832 -13,-13c0,-7.168 5.832,-13 13,-13zM22,14c-6.065,0 -11,4.935 -11,11c0,2.814 1.07141,5.37722 2.81641,7.32422c2.073,-2.099 5.03559,-3.32422 8.18359,-3.32422c3.14,0 6.1135,1.22231 8.1875,3.32031c1.742,-1.947 2.8125,-4.50831 2.8125,-7.32031c0,-6.065 -4.935,-11 -11,-11zM40,16v8h6v-8zM22,18.5c2.481,0 4.5,2.019 4.5,4.5c0,2.481 -2.019,4.5 -4.5,4.5c-2.481,0 -4.5,-2.019 -4.5,-4.5c0,-2.481 2.019,-4.5 4.5,-4.5zM40,26v8h6v-8zM40,36v9.47461c3.49,-1.239 6,-4.56461 6,-8.47461v-1z"></path></g></g>
        </svg>
    </button>
{/if}
