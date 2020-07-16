<script>
  import globalStore from "../../stores/globalStore";
  import cart from "../../stores/cart";
  $: total = $cart.reduce((acc, curr) => { return (acc+= curr.amount); }, 0);
</script>

<div>
  <img
    src="/assets/images/liked.svg"
    on:click={() => {
      globalStore.toggleItem('cart', true);
    }}
    alt="liked list of products" />
    <span>{total}</span>
</div>
