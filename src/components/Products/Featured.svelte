<script>
  export let title = "";
  export let filteredProducts = [];
  import Product from "./Product.svelte";
  import Loading from "../Loading.svelte";
</script>

<style>
  .section {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
  }

  .section-title {
    margin: 2rem auto;
  }
  .products-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2rem;
  }

  @media (max-width: 900px) {
    .products-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>

{#if $filteredProducts.length === 0}
  <Loading />
{:else}
  <section class="section">
    <h2 class="section-title">{title}</h2>
    <div class="products-grid">
      {#each $filteredProducts as product (product.id)}
        <Product {product} />
      {/each}
    </div>

  </section>
{/if}
