<script>
  import { page } from '$app/stores';
</script>
<style type="text/scss">
div.four-oh-four{
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

<h1>{$page.status}: {$page.error.message}</h1>
{#if $page.status === 404}
  <p>I don't know who gave you this link, but they are probably messing with you!</p>
  <div class="four-oh-four">
    <img src="/images/misc/404-error.png"
         width="200"
         title="Ghost by Ghozi Muhtarom at https://www.flaticon.com/free-icon/404-error_7486789"
         style="margin: auto;">
  </div>
{/if}

{#if $page.status === 500}
  <p>Sorry, there was a problem. This really ought to be fixed soon.</p>
{/if}