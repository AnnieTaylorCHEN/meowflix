<script>
  export let location;

  import { onMount } from "svelte";

  import Products from "../components/Products/Products.svelte";

  import { scrollToTop } from "../utils/utils";

   onMount(() => {
    scrollToTop();
  });

</script>

<div>
  <Products title="Browse your favorite movies" />
</div>
