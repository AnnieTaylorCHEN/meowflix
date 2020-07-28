<script>
  import { link } from "svelte-routing";
  import globalStore from "../../stores/globalStore";
  import { cartTotal } from "../../stores/cart";
  import { fly, fade } from "svelte/transition";

  import ItemsList from "./ItemsList.svelte";

  import user, { username } from "../../stores/user";

</script>

<style>
  .cart-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 999;
    background-color: hsla(0, 0%, 0%, 0.88);
  }

  .cart {
    position: absolute;
    top: 0;
    right: 0;
    width: 50vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  .close-cart {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }

  button {
    background: transparent;
    font-size: 3rem;
    color: var(--red);
    border: none;
    outline: none;
  }

  .cart-container a {
    padding: 1rem;
  }

  .cart-footer {
    padding: 1rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  .cart-total,
  .username {
    font-family: "Dokdo", cursive;
    font-size: 2rem;
    color: var(--blue);
  }

  .username span {
    color: var(--yellow);
  }

  .cart-total__num {
    display: inline-block;
    color: var(--yellow);
  }

  p {
    color: var(--yellow);
  }

  .fish-treats {
    display: inline-block;
    vertical-align: middle;
  }

  @media (max-width: 1500px) {
    .cart {
      width: 70vw;
    }
  }

  @media (max-width: 900px) {
    .cart {
      width: 100vw;
    }

    p a {
      display: inline-block;
      margin-top: 1rem;
      text-align: center;
    }

    .cart-footer {
      flex-direction: column;
    }

    .username {
      font-size: 1.5rem;
    }
  }
</style>

<div class="cart-container" transition:fly={{ x: 1000 }}>
  <div class="cart" transition:fade={{ delay: 100 }}>
    <button
    class="close-cart"
      on:click={() => {
        globalStore.toggleItem('cart', false);
      }}>
      &times;
    </button>

    <ItemsList />

    <div class="cart-footer">
      {#if $username}
        <div class="username">
          <span>{$username}</span>
          's to-watch list
        </div>
      {/if}
      <div class="cart-total">
        Total:
        <span class="fish-treats">
          <img src="/assets/images/fish.svg" alt="fish treats" />
        </span>
        <span class="cart-total__num">{$cartTotal}</span>
      </div>
      {#if $user.jwt}
        <a
          href="/checkout"
          use:link
          class="button"
          on:click={() => {
            globalStore.toggleItem('cart', false);
          }}>
          Checkout
        </a>
      {:else}
        <div>
          <p>
            In order to checkout please
            <a
              href="/login"
              use:link
              class="button"
              on:click={() => {
                globalStore.toggleItem('cart', false);
              }}>
              login
            </a>
          </p>
        </div>
      {/if}
    </div>
  </div>
</div>
