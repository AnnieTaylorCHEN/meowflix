<script>
  import { onMount, onDestroy } from "svelte";
  import { fly, fade } from "svelte/transition";

  import globalStore from "../stores/globalStore";

  const handleClose = () => {
    globalStore.toggleItem("alert", false);
  };

  let timeout;
  onMount(() => {
    timeout = setTimeout(() => {
      globalStore.toggleItem("alert", false);
    }, 3000);
  });

  onDestroy(()=> {
    clearTimeout(timeout);
  })
</script>

<style>
  .alert-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .alert {
    font-size: 1.5rem;
    padding: 2rem 5rem;
    background-color: var(--blue);
    position: relative;
    border-radius: 20px 40px;
  }

  .alert-danger {
    background-color: var(--red);
  }

  .alert p {
    color: white;
  }

  button {
    display: block;
    font-size: 1.2rem;
    color: black;
    background-color: transparent;
    border: none;
    outline: none;
    margin: 0 auto;
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
</style>

<div
  class="alert-container"
  in:fly={{ y: -200, duration: 1000 }}
  out:fade={{ duration: 0 }}>
  <div class="alert" class:alert-danger={$globalStore.alertDanger}>
    <p>{$globalStore.alertText}</p>
    <button on:click={handleClose}>&times;</button>
  </div>
</div>
