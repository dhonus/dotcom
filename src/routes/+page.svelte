<script>
  export let data
  function getPrettyDate(date) {
    return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }
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
<div class="top-wrapper">
  <div class="welcome">
    <div class="left">
      <h1><span style="font-weight: 700">// Welcome!</span></h1>
      <span class="p-indent">
        <p>My name is Daniel Honus and I am currently a student at
        VŠB - Technical University of Ostrava, finishing up my bachelor's degree in computer science.
        I love my major, with particular interest in Linux, webdesign and scripting. Besides this I&nbsp;spend my time listening to music or enjoying good book.
        </p><p>Things I've been excited about lately include Svelte, FreeBSD and Proxmox.
        I am comfortable using these technologies: Python, JavaScript/TypeScript, C++, Node.js/Vue.js/Svelte, Wordpress and many others.
        I believe in a free and decentralized internet, simple (KISS) solutions, Free software and open standards.

        </p><p>This is my personal website where I document my projects and other things I find interesting. I hope you enjoy your stay!</p>
        <p class="highlighted">
          If you are interested in working with me or simply want to say hi, feel free to contact me at <a href="mailto:hello@danielhonus.com">hello@danielhonus.com</a> (CZ/EN).
        </p>
        <div class="pretty-separator"></div>
      </span>
      <div class="currently-working-on">
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
      <div class="blog-dense">
          <h2 class="overline">Recent blog posts</h2>
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
    <div class="right">
      <!--<img src="/images/profile.png" alt="Daniel Honus" width="200" height="200" />-->
      <div class="me" style="background-image: url('/images/me.jpg');"></div>
    </div>
  </div>
</div>