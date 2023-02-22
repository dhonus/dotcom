<script>
  export let data
  function getPrettyDate(date) {
    return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }
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
    margin-top: 20px;
  }
  .modal-wrapper button{
    background-color: transparent;
    color: white;
    border: 2px solid #853a51;
    border-radius: 5px;
    padding: 10px;
    font-size: 1.2rem;
    cursor: pointer;
  }
  .modal-wrapper button:hover{
    background-color: #853a51;
    color: white;
  }
  .offset {
    display: flex;
    flex-direction: column;
    gap: 1.3rem;
    padding-left: 1rem;
  }
  article.blog-post-preview a{
    text-decoration: none;
    color: lightgray;
  }
  article.blog-post-preview a:hover{
    color: white;
    text-decoration: underline;
  }
  .blog-dense {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: .3rem;
  }
</style>
<div class="top-wrapper">
  <div class="welcome">
    <div class="left">
      <h1><span style="font-weight: 700"><span style="color: #853a51;">//</span> Welcome!</span></h1>
      <span class="p-indent">
        <p>My name is Daniel and I am currently a student at
        VŠB - Technical University of Ostrava, finishing up my bachelor's degree in computer science.
        I love my major, with particular interest in Linux, webdesign and scripting.
        Besides this I&nbsp;spend my time listening to music or enjoying a good book.
        </p><p>Things I've been excited about lately include Svelte, FreeBSD and Proxmox.

        I believe in a free and decentralized internet, simple (KISS) solutions, Free software and open standards.
        </p><p>
        This is my personal website where I document my projects and other things I find interesting. I&nbsp;hope you enjoy your stay!</p>
        <div class="modal-wrapper">
          <Modal show={$modal}>
            <button class="modal-button" on:click={showModal}>Contact me</button>
          </Modal>
        </div>
      </span>
      <div class="blog-dense">
          <h2 class="overline">Recent blog posts</h2>
        <div class="offset">
          {#each data.items as post}
            <article class="blog-post-preview">
              <h2>
                <a href={post.path}>
                  {post.meta.title}
                </a>
              </h2>
              Published {getPrettyDate(post.meta.date)}
            </article>
          {/each}
          <a href="/blog">Read all</a>
        </div>
      </div>
    </div>
    <div class="right">
      <img src="/images/moon.jpg"
           alt="me"
           width="200"
           title="Photo of the Moon I took" />
    </div>
  </div>
</div>