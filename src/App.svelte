<script>
  import Menu from './lib/Menu.svelte';
  import APropos from './lib/Apropos.svelte';
  import Experience from './lib/Experience.svelte';
  import Formation from './lib/Formation.svelte'; 
  import Projets from './lib/Projets.svelte';
  import Coordonnees from './lib/Coordonnees.svelte';
  import Accueil from './lib/Accueil.svelte';
  let selectedItemApp = null;
  $: item = selectedItemApp+'';
</script>

<Menu bind:selectedItem={selectedItemApp}/>
<main>

  {#if item === 'Apropos'}
    <APropos/>
  {:else if item === 'Experience'}
    <Experience/>
  {:else if item === 'Formation'}
    <Formation/>
  {:else if item === 'Projets'}
    <Projets/>
  {:else}
    <Accueil/>
  {/if}



</main>
<Coordonnees/>

