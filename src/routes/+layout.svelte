<script>
  const current_year = new Date().getFullYear();
  export function mobileMenu() {
    document.getElementById("navbar").classList.toggle("active");
  }
  export function svelteDoesntReload() {
    document.getElementById("navbar").classList.remove("active");
  }

</script>
<div class="main-wrapper">
  <div class="topbar">
    <div class="identity">
      <a href="/">
        <img src="/images/profile.png" alt="Daniel Honus" width="200" height="200" />
      </a>
      <img class="vegan-burger" on:click={mobileMenu} src="/images/vegan-burder-menu-svgrepo-com.svg">
    </div>
    <nav class="navbar" id="navbar">
      <a href="/" on:click={svelteDoesntReload}><img src="/images/home-svgrepo-com.svg"/>Home</a>
      <a href="https://github.com/dhonus" target="_blank"><img src="/images/github-svgrepo-com.svg"/>Github</a>
      <a href="/portfolio" on:click={svelteDoesntReload}><img src="/images/lamp-svgrepo-com.svg"/>Portfolio</a>
      <a href="/about" on:click={svelteDoesntReload}><img src="/images/faq-svgrepo-com.svg"/>About me</a>
      <a href="/blog" on:click={svelteDoesntReload}><img src="/images/news-svgrepo-com.svg"/>Blog</a>
    </nav>
  </div>
  <main>
    <slot></slot>
  </main>
</div>
<footer>
  <p class="footer-copyright">Copyright © 2018 – {current_year} Daniel Honus. <br>This website is free software licensed under the <a href="https://www.gnu.org/licenses/gpl-3.0.html" style="color:gray;">GNU GPLv3</a>.  Source code available on <a href="https://github.com/dhonus/dotcom" style="color:gray;">Github</a>.
    Verbatim copying and redistribution of this entire page are permitted provided this copyright notice and license are preserved.</p>
  <a target="_blank" href="https://mega.nz/megadrop/BdiWVPiHPpo">
    <button class="footer-megalink">Send Me a File With MEGA</button>
  </a>
  <link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400;0,700;1,400;1,500;1,700&family=Comfortaa:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</footer>