<style>
  .mockup-container {
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    padding: 4rem;
  }

  .media-container {
    position: relative;
  }

  .video-container img {
    z-index: 1;
  }

  .video-wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    max-width: 60%;
    max-height: 47%;
    top: 10%;
    left: 50%;
    transform: translateX(-55%);
    z-index: -1;
  }

  video {
      width: 100%;
      height: auto;
  }

  .video {
      display: inline-block;
      vertical-align: baseline;
      object-fit: contain;
  }

  .text-container {
    margin-left: 2rem;
    width: 50%;
  }

  h2 {
    font-size: 3rem;
  }

  p {
    font-size: 1.5rem;
    color: var(--yellow);
  }

  @media (max-width: 900px) {
    .mockup-container {
      flex-direction: column;
      padding: 1rem;
    }


    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 1.2rem;
    }
  }

   @media (max-width: 600px) {

       .text-container {
           margin-left: 0rem;
           width: 80%;
       }
   }
</style>

<div class="mockup-container">
  <div class="media-container">
    <div class="video-container">
      <img
        src="/assets/images/meowflix-device-mockup.png"
        alt="devices mockup" />
      <div class="video-wrapper">
        <video class="video" autoplay playsinline muted loop>
          <source src="/assets/images/paws-wars.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  </div>
  <div class="text-container">
    <h2>Watch anywhere you want.</h2>
    <p>
      Stream unlimited with Meowlo membership, or rent a movie and watch on
      demand.
      <br />
      Available on your phone, tablet, computer or TV.
    </p>
  </div>
</div>
