<script>
  import Item from "./Item.svelte";
  import cart from "../../stores/cart";
  import { fly } from "svelte/transition";
  import { flip } from "svelte/animate";
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

  @media (max-width: 1500px) {
    .cart-items {
      width: 60vw;
    }
  } 

  @media (max-width: 900px) {
    .cart-items {
      width: 80vw;
    }
  }
</style>

<section class="cart-items">
  <article>
    {#each $cart as cartItem, index (cartItem.id)}
      <div in:fly={{ delay: (index + 1) * 150, x: 100 }} out:fly={{ x: -100 }} animate:flip >
        <Item {...cartItem} />
      </div>  
    {:else}
      <h3>Your cart is currently empty!</h3>
    {/each}
  </article>
  
</section>
