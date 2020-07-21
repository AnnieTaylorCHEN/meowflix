<script>
  import { fade } from "svelte/transition";
  export let title = "";
  import products from "../../stores/products";
  import Product from "./Product.svelte";
  import Loading from "../Loading.svelte";
</script>

<style>
  .section {
    max-width: 1500px;
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
  .loader {
    grid-column: span 4;
  }

  @media (max-width: 900px) {
    .products-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 600px) {
    .products-grid {
      grid-template-columns: repeat(1, 1fr);
    }
  }
</style>

<section class="section">
  <h2 class="section-title">{title}</h2>
  <div class="products-grid">
    {#each $products as product, index (product.id)}
      <div in:fade = {{delay: (index + 1) * 50}} out:fade >
        <Product {product} />
      </div>
    {:else}
      <div class="loader">
        <Loading />
      </div>
    {/each}
  </div>

</section>
