<img {src} alt="Document"/>
<style>
  img {
      animation: smoothIn ease-out .5s;
      animation-iteration-count: 1;
      animation-fill-mode: forwards;
      animation-delay: .5s;
      opacity: 0;
  }
</style>
<script>
  import { onMount } from 'svelte'
  export let src;

  let loaded = false;
  let failed = false;
  let loading = false;

  onMount(() => {
    const img = new Image();
    img.src = src;
    img.style.opacity = "0";
    loading = true;

    img.onload = () => {
      loading = false;
      loaded = true;
    };
    img.onerror = () => {
      loading = false;
      failed = true;
    };
  })
</script>
