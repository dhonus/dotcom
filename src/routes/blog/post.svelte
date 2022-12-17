<script>
  export let title
  export let date
  export let thumbnail

  function getImageUrl(name) {
    return '/images/blog/thumbnails/'+ name;
  }
  const thumb = getImageUrl(thumbnail);
  function getPrettyDate(date) {
    return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }
</script>


<article>
  <h1>{title}</h1>

  <p>Published: {getPrettyDate(date)}</p>
  <a href="{thumb}">
    <div class="thumbnail" style="
    background: url({thumb});
    background-size: cover;
    background-position: center;"></div>
  </a>

  <slot />
</article>