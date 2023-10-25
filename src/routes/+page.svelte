<script>
  export let data
  function getPrettyDate(date) {
    return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }
</script>
<style>
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
  span.bold{
    font-weight: 700;
  }
  span.bold:after{
    width: 80%;
    background: gray;
  }
</style>
<div class="top-wrapper">
  <div class="welcome">
    <div class="left">
      <h1><span style="font-weight: 700"><span style="color: #853a51;">//</span> Welcome!</span></h1>
      <span class="p-indent">
        <p>My name is <span class="bold overline">Daniel</span> and I am currently a student at
        <span class="bold overline">VŠB - Technical University of Ostrava</span>, focusing on my Master's degree in Computer Science.
        I love my major, with particular interest in <span class="bold overline">Linux, web technologies and scripting</span>.
        Besides this I&nbsp;spend my time listening to music, or enjoying a good book.
        </p><p>Recently, I've been excited about some of my data science courses, <span class="bold overline">Hyprland, Bitwig and Neural Amp Modeler</span>.
        I believe in a free and decentralized internet, simple (KISS) solutions, Free software and open standards.
        </p><p>
        This is my personal website where I document my projects and other things I find interesting. I&nbsp;hope you enjoy your stay!</p>
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
  </div>
</div>
