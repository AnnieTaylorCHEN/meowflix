<script>
  export let id;
  export let location;

  import products from "../stores/defaultProducts";
  import Loading from "../components/Loading.svelte";
  import { link } from "svelte-routing";

  $: product = $products.find(item => item.id === parseInt(id));
</script>

<svelte:head>
  <title>{!product ? 'single product' : product.title}</title>
</svelte:head>

{#if !product}
  <Loading />
{:else}
  <section class="product">
    <a href="/products" use:link class="button">Back to Products</a>
    <div class="product-container">
      <article class="product-img">
        <img src={product.image} alt={product.title} />
      </article>
      <article>
        <h1>{product.title}</h1>
        <h2>{product.price}</h2>
        <p>{product.description}</p>
        <button
          class="button"
          on:click={() => {
            console.log('add to list');
          }}>
          Add to List
        </button>
      </article>
    </div>
  </section>
{/if}
