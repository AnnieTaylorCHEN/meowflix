<script>
  import { team } from "../../constants/team";
</script>

<style>
  .team-container {
    max-width: 1500px;
    padding: 1rem;
    margin: 0 auto;
  }

  h2 {
      margin-bottom: 2rem;
  }

  .team-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
  }

  .img-wrapper {
      clip-path: polygon(20% 0, 89% 7%, 100% 50%, 79% 94%, 29% 100%, 0 65%);
  }

  .teammate {
      color: var(--blue);
      padding: 1rem;
      text-align: center;
  }

  .name {
      color: var(--yellow);
      font-family: 'Dokdo', cursive;
      font-size: 2rem;
  }

  @media (max-width: 600px) {
    .team-grid {
    grid-template-columns: repeat(2, 1fr);
    }
  }
</style>

<section class="team-container" id="team">
  <h2>Meet the Meowflix Team</h2>
  <div class="team-grid">
    {#each team as teammate}
      <div>
        <div class="img-wrapper">
        <img src={teammate.img} alt={teammate.name} />
        </div>
        <p class="teammate"><span class="name">{teammate.name}</span> {teammate.title}</p>
      </div>
    {/each}
  </div>
</section>
