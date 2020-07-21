<script>
  export let id;
  export let location;

  import { link } from "svelte-routing";

  import products, { randomStore } from "../stores/products";
  import cart, { addToCart } from "../stores/cart";

  import Loading from "../components/Loading.svelte";
  import Featured from "../components/Products/Featured.svelte";

  $: product = $products.find(item => item.id === parseInt(id));

  $: isInTheCart = id => $cart.some(item => item.id === id);
</script>

<style>
  .product-container {
    max-width: 1200px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    margin: 4rem auto;
    padding: 1rem;
  }

  .product-img img {
    width: 600px;
    padding: 1rem;
    margin-right: 4rem;
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

  @media (max-width: 1200px) {
    .product-img img {
      width: 450px;
    }
  }

  @media (max-width: 900px) {
    .product-container {
      flex-direction: column;
    }

    .product-img img {
      width: 100%;
      margin-right: 0rem;
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
        <h1>{product.title}</h1>
        <h2>
          <span class="fish-treats">
            <img src="/assets/images/fish.svg" alt="fish treats" />
          </span>
          {product.price}
        </h2>
        <p>{product.description}</p>
        {#if isInTheCart(product.id)}
          <h3>🐱 Already in your cart!</h3>
        {:else}
          <button
            class="button"
            on:click={() => {
              addToCart(product);
            }}>
            Add to List
          </button>
        {/if}
      </article>
    </div>
  </section>
{/if}

<Featured title="You might like" filteredProducts={randomStore} />
