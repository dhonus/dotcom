<script>
  export let data

  function getImageUrl(name) {
    return '/images/blog/thumbnails/'+ name;
  }
</script>

<h1>Blog</h1>

<div class="blog-all">
  {#each data.items as post}
    <article class="blog-post-preview">
      <img src="{getImageUrl(post.meta.thumbnail)}" alt="{post.meta.title}" class="blog-image-preview">
      <h2>
        <a href={post.path}>
          {post.meta.title}
        </a>
      </h2>
      Published {post.meta.date}
    </article>
  {/each}
</div>