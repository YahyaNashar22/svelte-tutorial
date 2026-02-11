<script lang="ts">
	import type { Snippet } from 'svelte';

	let { name, customChild }: { name: number; customChild: Snippet<[name: number]> } = $props();
</script>

<div>
	{@render customChild(name)}
	<input type="number" bind:value={name} />
</div>

<style>
	div {
		background-color: bisque;
	}
</style>
