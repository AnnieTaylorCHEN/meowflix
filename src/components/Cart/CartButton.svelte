<script>
  import globalStore from "../../stores/globalStore";
  import cart from "../../stores/cart";
  $: total = $cart.reduce((acc, curr) => { return (acc+= curr.amount); }, 0);
</script>

<style>
.cart-button {
  position: relative;
}

.cart-button img {
  width: 50px;
  height: 50px;
}

.cart-count {
  position: absolute;
  right: 0;
  bottom: 10px;
  padding: 7px;
  border-radius: 50%;
  font-size: 10px;
  font-weight: 400;
  color: black;
  background-color: var(--red);
}

@media (max-width: 600px){
  .cart-button img {
  width: 40px;
  height: 40px;
}

}
  
</style>

<div class="cart-button">
  <img
    src="/assets/images/liked.svg"
    on:click={() => {
      globalStore.toggleItem('cart', true);
    }}
    alt="liked list of products" />
    <span class="cart-count">{total}</span>
</div>
