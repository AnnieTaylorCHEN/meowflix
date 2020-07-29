<script>
  export let id;
  export let location;

  import { onMount } from "svelte";
  import { link } from "svelte-routing";

  import products, { randomStore } from "../stores/products";
  import cart, { addToCart } from "../stores/cart";

  import Loading from "../components/Loading.svelte";
  import Recommendation from "../components/Products/Recommendation.svelte";

  import { scrollToTop } from "../utils/utils";

  $: product = $products.find(item => item.id === parseInt(id));

  $: isInTheCart = id => $cart.some(item => item.id === id);

  onMount(() => {
    scrollToTop();
  });
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
      max-height: initial;
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
          {product.price}
            <span class="fish-treats">
              <img src="/assets/images/fish.svg" alt="fish treats" />
            </span>
            
          </h2>
          <p>{product.description}</p>
          {#if isInTheCart(product.id)}
            <h3>🐱 yeah added to your list!</h3>
          {:else}
            <button
              class="button"
              on:click={() => {
                addToCart(product);
              }}>
              <span class="fish-treats">
                <img src="/assets/images/liked.svg" alt="add to list" />
              </span>
              Add to List
            </button>
            >
          {/if}
        </div>
        <Recommendation filteredProducts={randomStore} />
      </article>
    </div>
  </section>
{/if}
