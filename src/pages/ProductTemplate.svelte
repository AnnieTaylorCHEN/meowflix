<script>
  export let id;
  export let location;

  import { link } from "svelte-routing";

  import products, { randomStore } from "../stores/products";
  import cart, { addToCart } from "../stores/cart";

  import Loading from "../components/Loading.svelte";
  import Recommendation from "../components/Products/Recommendation.svelte";

  $: product = $products.find(item => item.id === parseInt(id));

  $: isInTheCart = id => $cart.some(item => item.id === id);
</script>

<style>
  .product-container {
    max-width: 1500px;
    max-height: 100vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    margin: 4rem auto 2rem;
  }

  .product-img img {
    width: 100%;
  }

  h1,
  h2,
  p {
    margin-bottom: 1.5rem;
  }

  p {
    color: var(--yellow);
  }
  .fish-treats {
    display: inline-block;
    vertical-align: middle;
  }

  @media (max-width: 800px) {
    .product-container {
      grid-template-columns: repeat(1, 1fr);
      padding: 1rem;
    }

  }
</style>

<svelte:head>
  <title>{!product ? 'single product' : product.title}</title>
</svelte:head>

{#if !product}
  <Loading />
{:else}
  <section class="product">
    <div class="product-container">
      <article class="product-img">
        <img src={product.image} alt={product.title} />
      </article>
      <article>
        <div>
          <h1>{product.title}</h1>
          <h2>
            <span class="fish-treats">
              <img src="/assets/images/fish.svg" alt="fish treats" />
            </span>
            {product.price}
          </h2>
          <p>{product.description}</p>
          {#if isInTheCart(product.id)}
            <h3>🐱 Already in your list!</h3>
          {:else}
            <button
              class="button"
              on:click={() => {
                addToCart(product);
              }}>
              Add to List
            </button>
          {/if}
        </div>
        <Recommendation filteredProducts={randomStore} />
      </article>
    </div>
  </section>
{/if}
