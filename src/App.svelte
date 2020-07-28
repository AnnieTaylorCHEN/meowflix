<script>
  import About from "./pages/About.svelte";
  import Checkout from "./pages/Checkout.svelte";
  import Home from "./pages/Home.svelte";
  import Login from "./pages/Login.svelte";
  import Products from "./pages/Products.svelte";
  import ProductTemplate from "./pages/ProductTemplate.svelte";
  import MyOrders from "./pages/MyOrders.svelte";
  import Navbar from "./components/Navbar/Navbar.svelte";
  import Sidebar from "./components/Navbar/Sidebar.svelte";
  import Cart from "./components/Cart/Cart.svelte";
  import Alert from "./components/Alert.svelte";
  import Thanks from "./pages/Thanks.svelte";
  import Footer from "./components/Footer.svelte";
  import NotFound from "./components/NotFound.svelte";

  import { Router, Route, Link } from "svelte-routing";

  import globalStore from "./stores/globalStore";
</script>

<Router>
  <Navbar />
  {#if $globalStore.sidebar}
    <Sidebar />
  {/if}
  {#if $globalStore.cart}
    <Cart />
  {/if}
  {#if $globalStore.alert}
    <Alert />
  {/if}
  <Route path="/" component={Home} />
  <Route path="/about" component={About} />
  <Route path="/login" component={Login} />
  <Route path="/checkout" component={Checkout} />
  <Route path="/products" component={Products} />
  <Route path="/products/:id" component={ProductTemplate} />
  <Route path="/orders" component={MyOrders} />
  <Route path="/thanks" component={Thanks} />
  <Route component={NotFound} />
  <Footer />
</Router>
