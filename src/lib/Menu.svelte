<script>
    export let selectedItem = null;
    import logo from '../../public/logo_renard.png'

    let isMenuOpen = false;

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }

    function closeMenu() {
        isMenuOpen = false;
    }

    function selectItem(item) {
        selectedItem = item;
    }
</script>

<style>
    .navbar {
        position: fixed;
        z-index: 1000;
        top: 0;
        left: 0;
        right: 20px;
        width: 100%;
        height: 60px;
        background-color: #333;
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 0 20px;
    }

    .navbar-logo {
        color: white;
        font-size: 24px;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    .navbar-menu {
        display: flex;
        align-items: center;
    }

    .navbar-menu-button {
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    .navbar-logo-button {
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    .navbar-menu-list {
        list-style-type: none;
        padding: 0;
        margin: 0;
        display: flex;
    }

    .navbar-menu-item {
        margin-left: 1px;
        color: white;
        background-color: transparent;
        font-size: 16px;
        cursor: pointer;
        border: 1px solid transparent;
        transition: all 0.3s ease;
        border-radius: 0;
    }

    .navbar-menu-item:hover {
        background-color: rgba(0, 0, 0, 0.3);
    }

    .navbar-menu-item.selected {
        background-color: rgba(0, 0, 0, 0.4);
        border-color: #333;
        transform: scale(1.05);
    }
    .logo{
        width: 45px;
        height: 43px;
        margin-top: 7px;
    }
</style>

<div class="navbar">
    <div class="navbar-logo">
        <div><img src={logo} alt="logo" class="logo"/></div>
        <div><button class="navbar-logo-button" on:click={() => { selectItem(null); closeMenu(); }}>Portfolio</button></div>
    </div>
    <div class="navbar-menu">
        <button class="navbar-menu-button" on:click={toggleMenu}>
            {#if !isMenuOpen}
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0,0,256,256">
                    <g transform=""><g fill-opacity="0" fill="#dddddd" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,256v-256h256v256z" id="bgRectangle"></path></g><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(2,2)"><path d="M64,14c-27.61424,0 -50,22.38576 -50,50c0,27.61424 22.38576,50 50,50c27.61424,0 50,-22.38576 50,-50c0,-27.61424 -22.38576,-50 -50,-50z" fill-opacity="0" fill="#ffffff"></path><path d="M64,117c-29.2,0 -53,-23.8 -53,-53c0,-29.2 23.8,-53 53,-53c29.2,0 53,23.8 53,53c0,29.2 -23.8,53 -53,53zM64,17c-25.9,0 -47,21.1 -47,47c0,25.9 21.1,47 47,47c25.9,0 47,-21.1 47,-47c0,-25.9 -21.1,-47 -47,-47z" fill="#ffffff"></path><path d="M86.5,52h-45c-1.7,0 -3,-1.3 -3,-3c0,-1.7 1.3,-3 3,-3h45c1.7,0 3,1.3 3,3c0,1.7 -1.3,3 -3,3zM86.5,67h-45c-1.7,0 -3,-1.3 -3,-3c0,-1.7 1.3,-3 3,-3h45c1.7,0 3,1.3 3,3c0,1.7 -1.3,3 -3,3z" fill="#ffffff"></path><g fill="#ffffff"><path d="M86.5,82h-45c-1.7,0 -3,-1.3 -3,-3c0,-1.7 1.3,-3 3,-3h45c1.7,0 3,1.3 3,3c0,1.7 -1.3,3 -3,3z"></path></g></g></g></g>
                </svg>
            {:else}
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0,0,256,256">
                    <g transform=""><g fill-opacity="0" fill="#dddddd" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,256v-256h256v256z" id="bgRectangle"></path></g><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(2,2)"><path d="M64,14c-27.61424,0 -50,22.38576 -50,50c0,27.61424 22.38576,50 50,50c27.61424,0 50,-22.38576 50,-50c0,-27.61424 -22.38576,-50 -50,-50z" fill-opacity="0" fill="#ffffff"></path><path d="M64,117c-29.2,0 -53,-23.8 -53,-53c0,-29.2 23.8,-53 53,-53c29.2,0 53,23.8 53,53c0,29.2 -23.8,53 -53,53zM64,17c-25.9,0 -47,21.1 -47,47c0,25.9 21.1,47 47,47c25.9,0 47,-21.1 47,-47c0,-25.9 -21.1,-47 -47,-47z" fill="#1f1f1f"></path><path d="M86.5,52h-45c-1.7,0 -3,-1.3 -3,-3c0,-1.7 1.3,-3 3,-3h45c1.7,0 3,1.3 3,3c0,1.7 -1.3,3 -3,3zM86.5,67h-45c-1.7,0 -3,-1.3 -3,-3c0,-1.7 1.3,-3 3,-3h45c1.7,0 3,1.3 3,3c0,1.7 -1.3,3 -3,3z" fill="#1f1f1f"></path><g fill="#1f1f1f"><path d="M86.5,82h-45c-1.7,0 -3,-1.3 -3,-3c0,-1.7 1.3,-3 3,-3h45c1.7,0 3,1.3 3,3c0,1.7 -1.3,3 -3,3z"></path></g></g></g></g>
                </svg>
            {/if}
        </button>
        <ul class="navbar-menu-list {isMenuOpen ? 'open' : ''}">
            {#if isMenuOpen}
                <button class="navbar-menu-item {selectedItem === 'Formation' ? 'selected' : ''}" on:click={() => selectItem('Formation')} on:keydown={(e) => {if (e.key === 'Enter') selectItem('Formation')}}>Formation</button>
                <button class="navbar-menu-item {selectedItem === 'Projets' ? 'selected' : ''}" on:click={() => selectItem('Projets')} on:keydown={(e) => {if (e.key === 'Enter') selectItem('Projets')}}>Projects</button>
                <button class="navbar-menu-item {selectedItem === 'Experience' ? 'selected' : ''}" on:click={() => selectItem('Experience')} on:keydown={(e) => {if (e.key === 'Enter') selectItem('Experience')}}>Experience</button>
                <button class="navbar-menu-item {selectedItem === 'Apropos' ? 'selected' : ''}" on:click={() => selectItem('Apropos')} on:keydown={(e) => {if (e.key === 'Enter') selectItem('Apropos')}}>About me</button>
            {/if}
        </ul>
    </div>
</div>
