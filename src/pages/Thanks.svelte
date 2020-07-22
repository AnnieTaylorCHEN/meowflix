<script>
  import { link } from "svelte-routing";
</script>

<style>
  .thanks {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4rem;
    width: 50vw;
    margin: 0 auto;
  }
</style>

<section class="thanks">
  <div style="width:100%;height:0;padding-bottom:56%;position:relative;">
    <iframe
      src="https://giphy.com/embed/jRlP4zbERYW5HoCLvX"
      width="100%"
      height="100%"
      style="position:absolute"
      frameBorder="0"
      class="giphy-embed"
     />
  </div>
  <p>
    <a href="https://giphy.com/gifs/jRlP4zbERYW5HoCLvX">via GIPHY</a>
  </p>
  <h1>Thank you so much for your support! 😻 Wanna check more?</h1>
  <a href="/products" use:link class="button">Yes! Show me more! 🐾 </a>

</section>
