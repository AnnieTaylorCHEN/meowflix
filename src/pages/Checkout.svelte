<script>
  export let location;

  import { onMount } from "svelte";
  
  import { navigate, link } from "svelte-routing";

  import user from "../stores/user";
  import cart, { cartTotal } from "../stores/cart";
  import globalStore from "../stores/globalStore";

  import submitOrder from "../server/submitOrder";

  //stripe vars
  let cardElement;
  let cardErrors;
  let card;
  let stripe;
  let elements;

  const style = {
    base: {
      color: "#f2ba5a",
      fontFamily: '"quicksand", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#f1e0c1"
      }
    },
    invalid: {
      color: "#f16346",
      iconColor: "#f16346"
    }
  };

  onMount(() => {
    if (!user) {
      navigate("/");
      return;
    }
    if ($cartTotal > 0) {
      stripe = Stripe("pk_test_51H99RVKhyWqU79fpcqp13IoGPMCpDiLqJlIlMTddA6Y4oGgjCjEi0bu0xbwXfDj7PrHGgG9g4XO31NodRo8gbPo200vKDgf1pA");
      elements = stripe.elements();
      card = elements.create("card", { style: style });
      card.mount(cardElement);
      card.addEventListener("change", event => {
        if (event.error) {
          cardErrors.textContent = event.error.message;
        } else {
          cardErrors.textContent = "";
        }
      });
    }
  });

  let name = "";
  let address = "";
  $: isEmpty = !name || !address || $globalStore.alert;

  const handleSubmit = async () => {
    globalStore.toggleItem("alert", true, "Submitting your order, please wait...")
    let res = await stripe
      .createToken(card)
      .catch(error => console.error(error));
    const { token } = res;
    if (token) {
      const { id } = token;
      let order = await submitOrder({
        name, 
        address,
        total: $cartTotal,
        items: $cart,
        stripeTokenId: id,
        userToken: $user.jwt
      })
      if (order) {
        globalStore.toggleItem("alert", true, "Thank you for your order!")
        cart.set([])
        localStorage.setItem('meowflixcart', JSON.stringify([]));
        navigate("/thanks");
        return
      }
    } else {
      globalStore.toggleItem("alert", true, "Opps, some error occured, please try again?", true)        
    }
  };
</script>

<style>
  h1 {
    text-align: center;
  }
  .checkout-empty,
  .checkout-form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50vw;
    margin: 4rem auto;
  }

  .checkout-empty img {
    width: 100%;
    height: 100%;
  }

  .checkout-form {
    margin: 4rem;
    padding: 4rem;
    border: 1px solid var(--blue);
    width: 50vw;
  }

  .order-total {
    font-family: "Dokdo", cursive;
    font-size: 2rem;
    color: var(--blue);
    margin-bottom: 2rem;
  }

  .fish-treats {
    display: inline-block;
    vertical-align: middle;
  }

  .form-control {
    display: flex;
    flex-direction: column;
  }

  label {
    color: var(--blue);
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }

  input {
    height: 30px;
    margin-bottom: 1rem;
    outline: none;
    border: none;
    background-color: transparent;
    font-family: "quicksand", Arial, Helvetica, sans-serif;
    border-bottom: 1px solid var(--yellow);
    color: var(--yellow);
  }

  .form-empty {
    color: var(--red);
  }

  #card-errors {
    color: var(--red);
  }

  .test-card {
    color: var(--yellow);
  }

  p {
    color: var(--blue);
    padding: 1rem 0rem;
  }

  .testinfo {
    color: var(--light-blue);
  }

  .button {
    margin-top: 1.5rem;
  }

  .disabled {
    background-color: lightgray;
  }

  @media (max-width: 600px) {
    .checkout-form {
      padding: 1rem;
      margin: 1rem;
      width: 80vw;
    }
    .checkout-empty {
      width: 80vw;
    }
  }
</style>

{#if $cartTotal > 0}

  <section class="checkout-form-container">
    <h1>Checkout</h1>
    <form class="checkout-form" on:submit|preventDefault={handleSubmit}>
      <div class="order-total">
        Order Total:
        {$cartTotal}
        <span class="fish-treats">
          <img src="/assets/images/fish.svg" alt="fish treats" />
        </span>
        
      </div>
      <div class="form-control">
        <label for="name">Your name</label>
        <input type="text" id="name" bind:value={name} />
        <label for="address">Your Address</label>
        <input type="text" id="address" bind:value={address} />
      </div>
      <div class="stripe-input">
        <label for="card-element">
          Checkout with credit card or debit card
        </label>
        <p class="testinfo">
          Test card number:
          <span class="test-card">4242 4242 4242 4242</span>
          <br />
          Use any three digits for CVC, five digits for zipcode, and any future
          dates
        </p>
        <div id="card-element" bind:this={cardElement} />
        <div id="card-errors" bind:this={cardErrors} role="alert" />
      </div>
      {#if isEmpty}
        <p class="form-empty">Please fill out the form</p>
      {/if}
      <button
        class="button"
        disabled={isEmpty}
        class:disabled={isEmpty}
        on:submit|preventDefault={handleSubmit}>
        Checkout
      </button>
    </form>
  </section>
{:else}
  <div class="checkout-empty">
    <img
      src="/assets/images/empty-cart.png"
      alt="cart is empty, grumpy cat face" />
    <h1>Hey yo, add some movies to watch!</h1>
    <a href="/products" use:link class="button">Browse</a>
  </div>
{/if}
