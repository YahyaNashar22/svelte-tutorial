<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<div>
	<h3>Below are my children</h3>
	{@render children()}
	<h3>Above are my children</h3>
</div>

<style>
	div {
		background-color: cadetblue;
	}
</style>
