<script>
  export let location;

  import { onMount } from "svelte";
  import { link } from "svelte-routing";

  import Hero from "../components/Hero.svelte";
  import Watch from "../components/Home/Watch.svelte";
  import Featured from "../components/Products/Featured.svelte";

  import products, { featuredStore } from "../stores/products";

  import { scrollToTop } from "../utils/utils";

   onMount(() => {
    scrollToTop();
  });
</script>

<style>
  .browse-button {
    margin: 3rem 0rem;
  }
</style>

<Hero title="The world's best cat-themed streaming service!" url="../assets/images/hero.jpg" >
  <div class="browse-button">
    <a href="/products" class="button" use:link>Browse Now</a>
  </div>
</Hero>

<Watch />

<div id="featured">
  <Featured title="Meowflix Originals" filteredProducts={featuredStore} />
</div>
