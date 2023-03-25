<script>
  import '$lib/assets/scss/style.sass'

  const current_year = new Date().getFullYear();
  export function mobileMenu() {
    document.getElementById("navbar").classList.toggle("relevant");
  }
  export function svelteDoesntReload() {
    document.getElementById("navbar").classList.remove("relevant");
  }
  import { page } from '$app/stores';

  import { writable } from 'svelte/store';
  import Modal from 'svelte-simple-modal';
  import Popup from './modal.svelte';
  const modal = writable(null);
  const showModal = () => modal.set(Popup);
</script>
<style>
  .modal-wrapper {
      display: flex;
      justify-content: left;
      align-items: center;
  }
  .modal-wrapper button{
      background-color: transparent;
      color: white;
      border: 2px solid #853a51;
      border-radius: 5px;
      padding: 10px;
      font-size: 1.2rem;
      cursor: pointer;
      font-family: "Comfortaa", sans-serif;
  }
  .modal-wrapper button:hover{
      background-color: #853a51;
      color: white;
  }
</style>
<div class="main-wrapper">
  <div class="topbar">
    <div class="identity">
      <a href="/" title="Home">
        <img src="https://avatars.githubusercontent.com/u/22010510" alt="Daniel Honus" width="200" height="200" />
      </a>
      <img class="vegan-burger" on:click={mobileMenu} src="/images/vegan-burder-menu-svgrepo-com.svg">
    </div>
    <nav class="navbar" id="navbar">
      <a href="/" class:active={$page.url.pathname === '/'} on:click={svelteDoesntReload}><img src="/images/home-svgrepo-com.svg" alt="home"/>Home</a>
      <a href="https://github.com/dhonus" target="_blank"><img src="/images/github-svgrepo-com.svg" alt="github"  />Github</a>
      <a href="/portfolio" class:active={$page.url.pathname === '/portfolio'} on:click={svelteDoesntReload}><img src="/images/lamp-svgrepo-com.svg" alt="portfolio" />Portfolio</a>
      <!--<a href="/about" class:active={$page.url.pathname === '/about'} on:click={svelteDoesntReload}><img src="/images/faq-svgrepo-com.svg"/>About me</a>-->
      <a href="/blog" class:active={$page.url.pathname.includes('/blog')} on:click={svelteDoesntReload}><img src="/images/news-svgrepo-com.svg" alt="home" />Blog</a>
    </nav>
    <div class="modal-wrapper">
      <Modal show={$modal}>
        <button class="modal-button" on:click={showModal}>Contact me</button>
      </Modal>
    </div>
  </div>
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
