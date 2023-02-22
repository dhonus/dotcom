<script>
  // event listener on cick
  export function handleClick() {
    let expand = document.getElementById("expand");
    let downRotate = document.getElementById("dropdown");
    if (expand.classList.contains("expanded")){
      expand.classList.remove("expanded");
      downRotate.classList.remove("down-rotate");
      return;
    }
    expand.classList.add("expanded");
    downRotate.classList.add("down-rotate");
  }
</script>
<style>
  .project:first-of-type {
      display: flex;
      flex-direction: column;
      padding: 1rem;
      border-radius: 7px;
      background: #1b1a1a;
      margin: 0.5rem;
      border: 1px solid #424040;
      flex: 0;
      cursor: pointer;
      animation: smoothIn ease-out .5s;
      animation-delay: .0s;
      animation-iteration-count: 1;
      animation-fill-mode: forwards;
      position: relative;
      opacity: 0;
  }
</style>
<h1>Code and projects</h1>
<p>A collection of projects I have done. Some UI/UX design, school projects and shell scripts.</p>
<p>
  I am comfortable using these technologies: Python, JavaScript/TypeScript, C++, Node.js / Vue.js / React / Svelte, Wordpress and many others.
</p>
  <div class="currently-working-on project">
  <span>
    <div class="left">
      <div>
        <h2 class="overline">Currently working on</h2>
        <p>Website for an orthodontic clinic</p>
      </div>
      <div class="right">
        <img id="dropdown" src="/images/down-arrow-svgrepo-com.svg" on:click={handleClick}>
      </div>
    </div>
  </span>
  <img src="/images/dentist.png" alt="Orthodontist" style="width: 500px" id="expand" class="expand"/>
</div>
<div class="split">
  <div class="left">
    <div class="project" onclick='location.href="https://radioostravan.cz"'>
      <h3 class="overline">Rádio Ostravan</h3>
      <p>Website for a local radio station. I was responsible for the design and development of the website.</p>
      <img src="/images/radost.png" alt="Rádio Ostravan">
    </div>
    <div class="project" onclick='location.href="https://betonvet.eu"'>
    <h3 class="overline">BetonVET</h3>
      <p>Website for an ERASMUS+ program. Currently being filled in by the staff responsible.</p>
      <a href="https://betonvet.eu/">
        <img src="/images/betonvet.png" alt="BETONVET">
      </a>
    </div>
    <div class="project" onclick='location.href="https://github.com/dhonus/manga-pet"'>
    <h3 class="overline">manga.pet.</h3>
      <p>An electron application to download manga and send it via email to a kindle device.</p>
      <img src="/images/mangapet.png" alt="manga.pet.">
    </div>
  </div>
  <div class="right">
    <div class="project" onclick='location.href="http://130.162.49.62:8080/"'>
    <h3 class="overline">Bachelor's thesis</h3>
      <p>I am developing a P1 logic solver with Venn diagram visualization as a tool for my university.</p>
      <a href="http://130.162.49.62:8080/" target="_blank">
        <img src="/images/thesis.png" alt="BETONVET" loading="lazy">
      </a>
    </div>
    <div class="project" onclick='location.href="https://github.com/dhonus/password-manager"'>
      <h3 class="overline">Password manager</h3>
      <p>Simple password manager written in C++. It uses libsodium to handle encryption.</p>
      <a href="https://github.com/dhonus/password-manager">
        <img src="/images/passman.png" alt="Password manager">
      </a>
    </div>
  </div>
</div>