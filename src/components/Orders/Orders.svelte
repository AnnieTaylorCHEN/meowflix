<script>
  import { fade, fly } from "svelte/transition";
  import orders from "../../stores/orders";
</script>

<style>
  .order-grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 1rem;
    margin-top: 2rem;
    margin-bottom: 4rem;
  }

  @media (max-width: 900px) {
    .order-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>

{#each $orders.reverse() as order, index (order.id)}
  <div transition:fly={{x: -100, duration: (index + 1)* 500 }}>
    <h3>Order no.{order.id} - {new Date(order.created_at).toUTCString()}</h3>
    <div class="order-grid" transition:fade={{delay: (index + 1) * 50}}>
      {#each order.items as item}
        <img src={item.image} alt={item.title} />
      {/each}
    </div>
  </div>
{/each}
