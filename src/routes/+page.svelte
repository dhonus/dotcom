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
<div class="top-wrapper card">
  <div class="welcome">
    <div class="left">
      <h1><span style="font-weight: 700">// Daniel</span> Honus</h1>
      <span class="p-indent">
        <p>I am currently finishing up my bachelor's degree, studying computer science at
        VŠB - Technical University of Ostrava. I am interested in linux, webdesign, music and literature. Things I've been excited about lately include Svelte, FreeBSD and virtualization.</p>
        <p>
          If you are interested in working with me or simply want to say hi, feel free to contact me at <a href="mailto:hello@danielhonus.com">hello@danielhonus.com</a> (CZ/EN).
        </p>
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

  </div>
</div>