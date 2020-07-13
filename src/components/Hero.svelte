<style>
  .hero {
    background: url("../assets/images/hero.jpg") center/cover no-repeat;
    width: 100vw;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .banner {
    margin-left: 10rem;
  }

  h1 {
    font-size: 12rem;
  }

  h2 {
    font-family: "Quicksand", Arial, Helvetica, sans-serif;
    font-size: 2.5rem;
    color: var(--yellow);
  }

  @media (max-width: 1200px) {
    .banner {
      margin-left: 5rem;
    }
    h1 {
      font-size: 6rem;
    }

    h2 {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 600px) {
    .hero {
      height: 100vh;
    }
    .banner {
      margin-left: 1rem;
    }

    h1 {
      font-size: 4rem;
    }

    h2 {
      font-size: 1rem;
    }
  }
</style>

<div class="hero">
  <div class="banner">
    <h1>Meowflix</h1>
    <h2>The world's best cat-themed streaming service!</h2>
    <slot />
  </div>
</div>
