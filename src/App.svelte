<script>
  let title = "Svelte";
  let color = "blue";
</script>

<h1 style:color>Inline Style</h1>
<h1>{title}</h1>

<input type="text" bind:value={title} placeholder="Change title" />

<style>
  h1 {
    color: orangered;
  }

  input {
    margin-bottom: 8px;
    padding: 4px 6px;
  }
</style>
