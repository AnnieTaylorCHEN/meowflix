<script>
  import { link } from "svelte-routing";
  import user from "../stores/user";
  import globalStore from "../stores/globalStore";
  import { logoutUser } from "../stores/user";
</script>

<style>
  p {
    color: var(--yellow);
  }
</style>


{#if $user.jwt}
  <a
    href="/"
    class="button"
    on:click={() => {
      logoutUser();
      globalStore.toggleItem('sidebar', false);
    }}>
    Logout
  </a>
{:else}
  <a
    href="/login"
    class="button"
    on:click={() => {
      logoutUser();
      globalStore.toggleItem('sidebar', false);
    }}>
    Login
  </a>
{/if}
