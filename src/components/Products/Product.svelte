<script>
  export let product;
  const { title, image, price, id } = product;
  import { link } from "svelte-routing";
  import { scrollToTop } from "../../utils/utils";
</script>

<style>
  .product-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0rem;
    width: 100%;
  }

  .product-title,
  .product-price {
    font-size: 1.1rem;
  }

  .product-title {
    width: 70%;
  }
  .fish-treats {
    display: inline-block;
    vertical-align: middle;
  }

  @media (max-width: 900px) {
    .product-title,
    .product-price {
      font-size: 1rem;
    }
  }

  @media (max-width: 400px) {
    .product-info {
      flex-direction: column;
      align-items: flex-start;
    }

    .product-title {
      width: 100%;
    }
  }
</style>

<article class="product" on:click={scrollToTop}>
  <a href={`/products/${id}`} use:link >
    <div class="img-container">
      <img src={image} alt={title} />
    </div>
    <div class="product-info">
      <p class="product-title">{title}</p>
      <p class="product-price">
      {price}
        <span class="fish-treats">
          <img src="/assets/images/fish.svg" alt="fish treats" />
        </span>
        
      </p>
    </div>
  </a>
</article>
