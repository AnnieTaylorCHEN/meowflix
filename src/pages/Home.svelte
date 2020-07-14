<script>
  export let location;
  import Hero from "../components/Hero.svelte";
  import { link } from "svelte-routing";
  import Featured from "../components/Products/Featured.svelte";
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

<Featured title="Featured" />
