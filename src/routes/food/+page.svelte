<script>
  import { onMount } from "svelte";

  function getElementByXpath(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  }

  onMount(async () => {
    fetch("https://www.blackkale.cz/restaurace/")
      .then(data => {
        console.log(data);
      }).catch(error => {
      console.log(error);
      return [];
    });
  });

</script>

<h1>Food</h1>
