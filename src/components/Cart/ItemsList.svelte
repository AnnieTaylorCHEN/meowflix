<script>
  import { afterUpdate } from "svelte";
  import { link } from "svelte-routing"
  import { fly } from "svelte/transition";
  import { flip } from "svelte/animate";

  import Item from "./Item.svelte";

  import cart, { setLocalStorageCart } from "../../stores/cart";
  import globalStore from "../../stores/globalStore";

  afterUpdate(() => {
    setLocalStorageCart($cart);
  });

  const redirect = () => {
    globalStore.toggleItem('cart', false);
  };
</script>

<style>
  .cart-items {
    width: 45vw;
    padding: 1rem 2rem;
    overflow-y: scroll;
  }

  .cart-items::-webkit-scrollbar {
    background-color: black;
    width: 5px;
  }

  .cart-items::-webkit-scrollbar-thumb {
    background-color: var(--yellow);
    border-radius: 8px;
  }

  h3 {
    color: var(--red);
  }

  img {
    width: 50%;
  }

  .button {
    display:inline-block;
    margin-top: 1rem;
  }

  @media (max-width: 1500px) {
    .cart-items {
      width: 60vw;
    }
  }

  @media (max-width: 900px) {
    .cart-items {
      width: 80vw;
    }

    img {
      width: 100%;
    }
  }
</style>

<section class="cart-items">
  <article>
    {#each $cart as cartItem, index (cartItem.id)}
      <div
        in:fly={{ delay: (index + 1) * 150, x: 100 }}
        out:fly={{ x: -100 }}
        animate:flip>
        <Item {...cartItem} />
      </div>
    {:else}
      <img
        src="/assets/images/empty-cart.png"
        alt="sad grumpy cat when cart is empty" />
      <h3>Your cart is empty!</h3>
      <a href="/products" use:link class="button" on:click={redirect}>add some stuff</a>
    {/each}
  </article>

</section>
