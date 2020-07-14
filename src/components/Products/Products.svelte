<script>
  export let title = "";
  import products from "../../stores/defaultProducts";
  import Product from "./Product.svelte";
  import Loading from "../Loading.svelte";
</script>

<style>
  .section {
    max-width: 1500px;
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

  .loader {
    grid-column: span 4;
  }
</style>

<section class="section">
  <h2 class="section-title">{title}</h2>
  <div class="products-grid">
    {#each $products as product (product.id)}
      <Product {product} />
    {:else}
      <div class="loader">
        <Loading />
      </div>
    {/each}
  </div>

</section>
