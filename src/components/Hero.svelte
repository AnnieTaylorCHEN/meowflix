<script>
export let title;
export let url;
</script>

<style>
  .hero {
    display: block;
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
      height: 50vh;
      margin-top: 0;
    }
    .banner {
      margin-left: 2rem;
    }

    h2 {
      font-size: 1rem;
    }
  }
</style>

<div class="hero" style="background: url({url}) center/contain no-repeat;" >
  <div class="banner">
    <h2>{title}</h2> 
    <slot />
  </div>
</div>
