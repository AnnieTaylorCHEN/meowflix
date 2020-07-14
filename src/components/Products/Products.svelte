<script>
import { onMount, onDestroy } from "svelte";
import products from "../../stores/defaultProducts";
import Product from "./Product.svelte";
//below are original subscribe method, then we switched to the short hand
// let localProducts = [];
// let unsubscribe;
// onMount(()=> {
//     unsubscribe = products.subscribe( value => {
//         localProducts = value;
//     });
// });
// onDestroy(()=>{
//     unsubscribe();
// });
</script>

<h1>Products Component</h1>
{#each $products as product}
<Product {product} />
{/each}