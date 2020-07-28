<script>
export let location;
  import { link } from "svelte-routing";
  import Hero from "./Hero.svelte";
</script>

<style>
  .notfound {
    margin-top: 2rem;
  }
</style>

<Hero
  title="Are you lost? Maybe try something else?"
  url="../assets/images/404.jpg"
  alt="404 not found">
  <div class="notfound">
    <a href="/products" class="button" use:link>Browse</a>
  </div>
</Hero>
