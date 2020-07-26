<script>
  export let location;
  let email = "";
  let password = "";
  let username = "Meowlo Member";
  let isMember = true;
  $: isEmpty = !email || !password || !username || $globalStore.alert;

  import { navigate } from "svelte-routing";

  import loginUser from "../server/loginUser";
  import registerUser from "../server/registerUser";

  import globalStore from "../stores/globalStore";

  const toggleMember = () => {
    isMember = !isMember;
    if (!isMember) {
      username = "";
    } else {
      username = "Meowlo Member";
    }
  };

  const handleSubmit = async () => {
    globalStore.toggleItem("alert", true, "Loading data, please be patient...");
    let user;
    if (isMember) {
      user = await loginUser({ email, password });
    } else {
      user = await registerUser({ username, email, password });
    }

    if (user) {
      navigate("/products");
      globalStore.toggleItem("alert", true, "Welcome to Meowflix!");
      return;
    }
    globalStore.toggleItem("alert", true, "Some error occured! Please try again", true);
  };
</script>

<style>
  .form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 90vh;
    padding: 1rem;
  }

  .section-title {
    font-size: 5rem;
    margin: 2rem;
  }

  .form-control {
    display: flex;
    align-items: center;
  }

  label {
    color: var(--blue);
    font-size: 1.5rem;
    width: 120px;
  }

  input {
    font-family: "quicksand", Arial, Helvetica, sans-serif;
    font-size: 1.5rem;
    height: 20px;
    width: 300px;
    padding: 0.5rem 1rem;
    margin: 1rem;
    border: none;
    outline: none;
    background-color: transparent;
    color: var(--yellow);
    border-bottom: 1px solid var(--yellow);
  }

  .form-empty {
    color: var(--red);
    text-align: center;
  }

  .button {
    margin: 1.5rem 0;
  }

  .disabled {
    background-color: lightgray;
  }

  p {
    color: var(--blue);
  }

  .testinfo {
    color: var(--light-blue);
  }

  @media (max-width: 600px) {
    .section-title {
      font-size: 3rem;
    }
    label {
      font-size: 1rem;
      width: 50px;
    }

    input {
      width: 50vw;
      font-size: 1rem;
    }
  }
</style>

<section class="form-container">
  <h2 class="section-title">
    {#if isMember}Log in{:else}Register{/if}
  </h2>
  <form class="login-form" on:submit|preventDefault={handleSubmit}>
    {#if !isMember}
      <div class="form-control">
        <label for="username">Username</label>
        <input type="text" id="username" bind:value={username} required />
      </div>
    {/if}
    <div class="form-control">
      <label for="email">Email</label>
      <input type="email" id="email" bind:value={email} required />
    </div>
    <div class="form-control">
      <label for="password">Password</label>
      <input type="password" id="password" bind:value={password} required />
    </div>
    {#if isEmpty}
      <p class="form-empty">Please fill out the form</p>
    {/if}

    <button class="button" disabled={isEmpty} class:disabled={isEmpty}>
      Yes I'm in!
    </button>
    <p class="testinfo">Test Email: meow@meowflix.com</p>
    <p class="testinfo">Test Password: 123456</p>
  </form>
  {#if isMember}
    <p>
      Not a member?
      <button class="button" on:click={toggleMember}>Register</button>
    </p>
  {:else}
    <p>
      Already a member?
      <button class="button" on:click={toggleMember}>Login</button>
    </p>
  {/if}
</section>
