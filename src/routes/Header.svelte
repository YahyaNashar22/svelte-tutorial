<script lang="ts">
	let { name, color } = $props();
</script>

<h1 style="color: {color}">Hello From {name}</h1>

<style>
	h1 {
		font-size: 2.4rem;
		font-weight: bold;
	}
</style>
