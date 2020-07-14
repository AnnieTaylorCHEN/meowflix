<script>
  import { links } from "../../constants/links";
  import { link } from "svelte-routing";
  import globalStore from "../../stores/globalStore";
  import { fly, fade } from "svelte/transition";
</script>

<style>
  .sidebar-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 999;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .sidebar {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  button {
    background: transparent;
    font-size: 3rem;
    color: red;
    border: none;
    outline: none;
  }

  .sidebar-container a {
    color: var(--yellow);
    font-size: 1.2rem;
    padding-bottom: 1rem;
  }
</style>

<div class="sidebar-container" transition:fly={{ x: -1000 }}>
  <div class="sidebar" transition:fade={{ delay: 400 }}>
    <a
      href="/"
      use:link
      on:click={() => {
        globalStore.toggleItem('sidebar', false);
      }}>
      <h1>Meowflix</h1>
    </a>
    {#each links as sidelink}
      <a
        href={sidelink.url}
        use:link
        on:click={() => {
          globalStore.toggleItem('sidebar', false);
        }}>
        {sidelink.text}
      </a>
    {/each}
    <button
      on:click={() => {
        globalStore.toggleItem('sidebar', false);
      }}>
      &times;
    </button>
  </div>
</div>
