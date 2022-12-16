<script>
  export let title
  export let date
  export let thumbnail

  function getImageUrl(name) {
    return '/images/blog/thumbnails/'+ name;
  }
  const thumb = getImageUrl(thumbnail);
</script>


<article>
  <h1>{title}</h1>

  <p>Published: {date}</p>
  <a href="{thumb}">
    <div class="thumbnail" style="
    background: url({thumb});
    background-size: cover;
    background-position: center;"></div>
  </a>

  <slot />
</article>