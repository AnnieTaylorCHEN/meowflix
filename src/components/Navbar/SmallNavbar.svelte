<script>
  import { link } from "svelte-routing";
  import globalStore from "../../stores/globalStore";
  let openSidebar = globalStore.toggleItem;
</script>

<style>
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: transparent;
  }

  .menu-container {
    padding: 1rem;
    display: flex;
    justify-content: space-evenly;
  }

  .menu-container > div {
    padding: 0 1rem;
  }

  h1 {
    padding: 1rem;
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 2.5rem;
    }
  }
</style>

<nav>
  <a href="/" use:link>
    <h1>Meowflix</h1>
  </a>
  <div class="menu-container">
    <div>
      <img src="/assets/images/liked.svg" alt="liked list of products" />
    </div>
    <div>
      <img
        src="/assets/images/menu.svg"
        alt="menu icon"
        on:click={() => {
          openSidebar('sidebar', true);
        }} />
    </div>
  </div>
</nav>
