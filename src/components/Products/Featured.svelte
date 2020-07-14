<script>
  export let title = "";
  import products, { featuredStore } from "../../stores/defaultProducts";
  import Product from "./Product.svelte";
  import Loading from "../Loading.svelte";
</script>

<style>
  .section {
    max-width: 1200px;
    margin: 0 auto;
  }

  .section-title {
    margin: 2rem auto;
  }
  .products-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2rem;
  }

</style>

{#if $featuredStore.length === 0}
  <Loading />
{:else}
  <section class="section">
    <h2 class="section-title">{title}</h2>
    <div class="products-grid">
      {#each $featuredStore as product (product.id)}
        <Product {product} />
      {/each}
    </div>

  </section>
{/if}
