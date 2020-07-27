<script>
  import { link } from "svelte-routing";
</script>

<style>
  footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 8rem 1rem 0rem;
    margin: 0 auto;
    color: var(--blue);
    max-width: 1200px;
  }

  .footer-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    margin-bottom: 4rem;
  }

  .footer-sub-grid {
    display: flex;
    flex-direction: column;
  }

  .footer-sub-grid > a {
    margin-bottom: 1rem;
  }

  img {
    display: block;
    width: 100px;
    margin: 1rem auto;
  }

  h2 {
    text-align: center;
    margin-bottom: 2rem;
  }

  .meowlo a {
    color: var(--yellow);
  }

  .author {
    color: var(--light-blue);
    float: right;
  }

  .author a {
    color: var(--yellow);
  }

  @media (max-width: 1200px) {
    .footer-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 600px) {
    footer {
      padding: 4rem 1rem 0rem;
    }
  }
</style>

<footer>
  <div class="footer-grid">
    <div class="footer-sub-grid">
      <a href="/about">About</a>
      <a href="/about/#faq">FAQ</a>
      <a href="/products">Browse All</a>
      <a href="/#featured">Meowflix Originals</a>
      <a href="/about/#team">Careers</a>
    </div>
    <div class="footer-sub-grid">
      <a href="/">Help Center</a>
      <a href="/">Investor Relations</a>
      <a href="/">Terms of Use</a>
      <a href="/">Privacy Policy</a>
    </div>
    <div class="footer-sub-grid">
      <p>
        Address:
        <br />
        Paw Campus,
        <br />
        Meowtain View 178,
        <br />
        Catfornia 98 765,
        <br />
        United States of Cats
      </p>
      <p>Phone: MEOW-111-8000</p>
      <p>Email: meow@meowflix.com</p>
    </div>
    <div>
      <a href="/">
        <img src="/meowflix.svg" alt="meowflix logo" />
      </a>
    </div>
  </div>

  <div class="meowlo">
    <h2>
      a
      <a href="https://meowlo.annietaylorchen.com/">Meowlo</a>
      company
    </h2>
    <p>&copy; 2020 by Meowflix, Inc.</p>
  </div>

</footer>
<div>
  <p class="author">
    Hand made with &#x2764; by
    <a href="https://www.annietaylorchen.com" target="_blank">
      Annie Taylor CHEN
    </a>
  </p>
</div>
