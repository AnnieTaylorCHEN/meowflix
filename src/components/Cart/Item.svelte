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
</style>

<div class="cart-item">
<div class="cart-item__img">
  <img src={image} alt={title} />
  </div>
  <div class="cart-item__info">
    <h2>{title}</h2>
    <h3>{price} fish treats</h3>
    <button
      class="button"
      on:click={() => {
        removeItem(id)
      }}>
      remove
    </button>
  </div>
</div>
