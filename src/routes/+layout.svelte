<script>
  import '$lib/assets/scss/style.sass'

  const current_year = new Date().getFullYear();
  export function svelteDoesntReload() {
    document.getElementById("navbar").classList.remove("relevant");
  }
  import { page } from '$app/stores';
</script>
<div class="topbar">
    <div class="identity">
      <a href="/" title="Home">
        <img src="https://avatars.githubusercontent.com/u/22010510" alt="Daniel Honus" width="200" height="200" />
      </a>
    </div>
    <nav class="navbar" id="navbar">
      <a href="/" class:active={$page.url.pathname === '/'} on:click={svelteDoesntReload}><img src="/images/home-svgrepo-com.svg" alt="home"/>Home</a>
      <a href="https://github.com/dhonus" target="_blank"><img src="/images/github-svgrepo-com.svg" alt="github"  />Github</a>
      <!--<a href="/portfolio" class:active={$page.url.pathname === '/portfolio'} on:click={svelteDoesntReload}><img src="/images/lamp-svgrepo-com.svg" alt="portfolio" />Portfolio</a>
      <a href="/blog" class:active={$page.url.pathname.includes('/blog')} on:click={svelteDoesntReload}><img src="/images/news-svgrepo-com.svg" alt="home" />Blog</a>-->
    </nav>
  </div>
<div class="main-wrapper">
  <main>
    <slot></slot>
  </main>
</div>
<footer>
  <p class="footer-copyright">Copyright © 2018 – {current_year} Daniel Honus.
    <br>This website is free software licensed under the <a href="https://www.gnu.org/licenses/gpl-3.0.html" style="color:gray;">GNU GPLv3</a>. Source code
    available on <a href="https://github.com/dhonus/dotcom" style="color:gray;">Github</a>.</p>
  <a target="_blank" href="https://mega.nz/megadrop/BdiWVPiHPpo">
    <button class="footer-megalink">Send Me a File With MEGA</button>
  </a>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</footer>