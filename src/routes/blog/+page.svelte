<script>
  export let data

  function getImageUrl(name) {
    return '/images/blog/thumbnails/'+ name;
  }
  function getPrettyDate(date) {
    return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }
</script>

<h1>Blog</h1>

<div class="blog-all">
  {#each data.items as post}
    <article class="blog-post-preview">
      <a href={post.path}>
        <div class="intrinsic-preview" style="background-image: url('{getImageUrl(post.meta.thumbnail)}')">
          <!--<img src="{getImageUrl(post.meta.thumbnail)}" alt="{post.meta.title}" class="blog-image-preview">-->
        </div>
        <h2>
            {post.meta.title}
        </h2>
        Published {getPrettyDate(post.meta.date)}
      </a>
    </article>
  {/each}
</div>