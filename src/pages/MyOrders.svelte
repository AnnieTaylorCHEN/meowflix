<script>
  export let location;
  import { onMount } from "svelte";
  import { link } from "svelte-routing";

  import { jwt } from "../stores/user";

  import Orders from "../components/Orders/Orders.svelte";

  import { scrollToTop } from "../utils/utils";

   onMount(() => {
    scrollToTop();
  });
</script>

<style>
  h1 {
    margin: 2rem auto;
  }
  .orders {
    max-width: 1500px;
    margin: 4rem auto;
    padding: 1rem;
  }

  .button {
      display: inline-block;
      margin-top: 2rem;
  }

  @media (max-width: 900px) {
      .orders {
          margin: 2rem auto;
      }
  }
</style>

<section class="orders">
  <h1>My Orders</h1>
  {#if $jwt}
    <Orders />
  {:else}
    <h2>You need to login to see your orders.</h2>
    <a href="/login" class="button" use:link>Login</a>
  {/if}
</section>
