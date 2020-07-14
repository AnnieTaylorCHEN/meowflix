<script>
  export let product;
  const { title, image, price, id } = product;
  import { link } from "svelte-routing";
</script>

<article class="product">
<a href={`/products/${id}`} use:link>
  <div class="img-container">
    <img src={image} alt={title} />
  </div>
  <div class="product-info">
    <p class="product-title">{title}</p>
    <p class="product-price">{price}</p>
  </div>
  </a>
</article>
