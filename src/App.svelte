<script>
  import About from "./pages/About.svelte";
  import Checkout from "./pages/Checkout.svelte";
  import Home from "./pages/Home.svelte";
  import Login from "./pages/Login.svelte";
  import Products from "./pages/Products.svelte";
  import ProductTemplate from "./pages/ProductTemplate.svelte";

  import { Router, Route, Link } from "svelte-routing";
</script>

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

<Router>
  <nav>
    <Link to="/">Home</Link>
	<Link to="/about">About</Link>
	<Link to="/products">Browse</Link>
  </nav>
  <Route path="/" component= {Home} />
  <Route path="/about" component= {About} />
  <Route path="/login" component= {Login} />
  <Route path="/products" component= {Products} />
  <Route path="/products/:id" component= {ProductTemplate} />
</Router>
