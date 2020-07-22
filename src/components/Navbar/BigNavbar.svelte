<script>
  import { link } from "svelte-routing";

  import { links } from "../../constants/links";

  import CartButton from "../Cart/CartButton.svelte";
  import LoginLink from "../LoginLink.svelte";

  import { getUsername } from "../../stores/user";

  let username = getUsername();
</script>

<style>
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: transparent;
    width: 100%;
  }

  .menu-container {
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  .menu-container a {
    font-size: 1.2rem;
    color: var(--yellow);
  }

  .menu-container > div {
    padding: 0 1rem;
  }

  .username {
    padding: 1rem;
    color: var(--yellow);
    font-size: 1.2rem;
    vertical-align: baseline;
  }

  h1 {
    font-size: 5rem;
    padding: 1rem;
    text-align: center;
    margin-bottom: -100px;
  }
</style>

<div>
  <a href="/" use:link>
    <h1>Meowflix</h1>
  </a>
</div>

<nav>
  <div class="menu-container">
    {#each links as navlink}
      <div>
        <a href={navlink.url} use:link>{navlink.text}</a>
      </div>
    {/each}
  </div>

  <div class="menu-container">
    {#if username }
      <div class="username">Hi, {username}</div>
    {/if}
    <LoginLink />
    <CartButton />
  </div>
</nav>
