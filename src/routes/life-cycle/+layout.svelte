<script>
	let { children } = $props();
</script>

<svelte:head>
	<title>Life Cycle</title>
</svelte:head>

{@render children()}
