<style>
  .hero {
    background: url("../assets/images/hero.jpg") center/contain no-repeat;
    width: 100vw;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: -100px;
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
      background-size: cover;
    }
    .banner {
      margin-left: 2rem;
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
