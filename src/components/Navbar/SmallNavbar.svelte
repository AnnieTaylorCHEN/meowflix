<script>
  import { link } from "svelte-routing";

  import globalStore from "../../stores/globalStore";

  import CartButton from "../Cart/CartButton.svelte";
  let openSidebar = globalStore.toggleItem;
</script>

<style>
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: transparent;
    position: sticky;
    position: -webkit-sticky;
    top: 1rem;
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
    <CartButton />
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
