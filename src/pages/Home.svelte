<script>
  export let location;

  import { link } from "svelte-routing";
  import Hero from "../components/Hero.svelte";
  import Watch from "../components/Home/Watch.svelte";
  import Featured from "../components/Products/Featured.svelte";
  import products, { featuredStore } from "../stores/products";
</script>

<style>
  .browse-button {
    margin: 3rem 0rem;
  }
</style>

<Hero>
  <div class="browse-button">
    <a href="/products" class="button" use:link>Browse Now</a>
  </div>
</Hero>

<Watch />

<Featured title="Featured" filteredProducts={featuredStore} />
