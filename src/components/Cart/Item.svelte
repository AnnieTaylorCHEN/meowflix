<script>
  export let id;
  export let title;
  export let image;
  export let price;
  export let amount;

  import { removeItem } from "../../stores/cart";
</script>

<style>
  .cart-item {
    display: flex;
    padding: 2rem 1rem;
  }

  .cart-item__img {
    width: 200px;
    height: auto;
    margin-right: 3rem;
  }

  .cart-item__info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  .fish-treats {
    display: inline-block;
    vertical-align: middle;
  }

  .button {
      background-color: var(--red);
      border: none;
      margin-top: 1rem;
  }

  @media (max-width: 900px) {
    .cart-item__img {
      width: 100px;
      height: auto;
      margin-right: 1rem;
    }
  }

  @media (max-width: 600px){
    .cart-item__info h2 {
      font-family: 'quicksand', Arial, Helvetica, sans-serif;
      font-size: 1rem;
      padding: 1rem;
    }

    .button {
      padding: 0.5rem;
      font-size: 0.8rem;
    }
  }
</style>

<div class="cart-item">
<div class="cart-item__img">
  <img src={image} alt={title} />
  </div>
  <div class="cart-item__info">
    <h2>{title}</h2>
    <h3><span class="fish-treats"><img src="/assets/images/fish.svg" alt="fish treats" /></span>{price}</h3>
    <button
      class="button"
      on:click={() => {
        removeItem(id)
      }}>
      remove
    </button>
  </div>
</div>
