<script>
  export let product;
  const { title, image, price, id } = product;
  import { link } from "svelte-routing";
</script>

<style>
  .product-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
  }

  .product-title,
  .product-price {
    font-size: 1.5rem;
  }

  .product-price {
    width: 30%;
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
</style>

<article class="product">
  <a href={`/products/${id}`} use:link >
    <div class="img-container">
      <img src={image} alt={title} />
    </div>
    <div class="product-info">
      <p class="product-title">{title}</p>
      <p class="product-price">
        <span class="fish-treats">
          <img src="/assets/images/fish.svg" alt="fish treats" />
        </span>
        {price}
      </p>
    </div>
  </a>
</article>
