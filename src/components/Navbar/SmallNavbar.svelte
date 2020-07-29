<script>
  import { link } from "svelte-routing";

  import globalStore from "../../stores/globalStore";

  import CartButton from "../Cart/CartButton.svelte";

  let openSidebar = globalStore.toggleItem;

  let changeBgColor = false;
  let scrollOver;

  $: if (scrollOver > 100) {
    changeBgColor = true;
  } else {
    changeBgColor = false;
  }
</script>

<style>
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: transparent;
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    z-index: 10;
  }

  .navbg {
    background-color: hsla(0, 0%, 0%, 0.7);
  }

  .menu-container {
    padding: 0.5rem;
    display: flex;
    justify-content: space-evenly;
  }

  .menu-container > div {
    padding: 0 1rem;
  }

  h1 {
    padding-left: 0.5rem;
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 2.5rem;
    }
  }
</style>

<svelte:window bind:scrollY={scrollOver} />

<nav class:navbg={changeBgColor}>
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
