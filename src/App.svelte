<script>
	import About from "../pages/About.svelte";
	import Checkout from "../pages/Checkout.svelte";
	import Home from "../pages/Home.svelte";
	import Login from "../pages/Login.svelte";
	import Products from "../pages/Products.svelte";
	import ProductTemplate from "../pages/ProductTemplate.svelte";
</script>

<main>
	<h1>Meow {name}!</h1>
	<p>Welcome to the world's best cat-themed steaming service!</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>