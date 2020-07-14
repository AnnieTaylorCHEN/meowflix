<style>
  .hero {
    background: url("../assets/images/hero.jpg") center/cover no-repeat;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .banner {
    margin-left: 10rem;
  }

  h2 {
    font-family: "Quicksand", Arial, Helvetica, sans-serif;
    font-size: 4rem;
    color: var(--yellow);
    max-width: 40vw;
  }

  @media (max-width: 1200px) {
    .banner {
      margin-left: 5rem;
    }

    h2 {
      font-size: 3rem;
    }
  }

  @media (max-width: 600px) {
    .hero {
      height: 100vh;
    }
    .banner {
      margin-left: 1rem;
    }

    h2 {
      font-size: 1.5rem;
    }
  }
</style>

<div class="hero">
  <div class="banner">
    <h2>The world's best cat-themed streaming service!</h2> 
    <slot />
  </div>
</div>
