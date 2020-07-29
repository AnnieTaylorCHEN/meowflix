<script>
  export let location;

  import { onMount } from "svelte";

  import Hero from "../components/Hero.svelte";
  import Team from "../components/About/Team.svelte";
  import Faq from "../components/About/Faq.svelte";

  import { scrollToTop } from "../utils/utils";

   onMount(() => {
    scrollToTop();
  });
</script>

<style>
  p {
    color: var(--yellow);
    max-width: 800px;
    line-height: 1.5;
    font-size: 1.5rem;
    margin: 4rem auto;
  }

  @media (max-width: 1200px) {
    p {
      margin: 2rem auto;
    }
  }

  @media (max-width: 600px) {
    p {
      font-size: 1rem;
      margin: 1rem;
    }
  }
</style>

<section class="about">
  <Hero title="Hi, we're Meowflix" url="../assets/images/about-hero.jpg" />

  <p>
    We are a cat-themed streaming service, owned by our parent company
    <a href="https://meowlo.annietaylorchen.com/">Meowlo</a>
    . Currently we have old movies and our special Meowflix Originals for rent.
    We're planning a membership in the near future that offers unlimited
    streaming on your demand.
  </p>
  <Team />
  <Faq />
</section>
