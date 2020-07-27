<script>
  export let filteredProducts = [];
  import Product from "./Product.svelte";
  import Loading from "../Loading.svelte";
</script>

<style>
  .recommendation {
    padding: 2rem auto;
  }

  .movies-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    width: 100%;
    margin: 0 auto;
  }

  h3 {
      margin: 2rem auto;
  }

  @media (max-width: 1200px) {
      .movies-grid {
          grid-template-columns: repeat(2, 1fr);
      }
  }
</style>

<div class="recommendation">
  {#if $filteredProducts.length === 0}
    <Loading />
  {:else}
    <h3>You might like</h3>
    <div class="movies-grid">
      {#each $filteredProducts as product (product.id)}
        <Product {product} />
      {/each}
    </div>
  {/if}
</div>
