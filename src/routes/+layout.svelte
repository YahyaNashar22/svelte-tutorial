<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}

<style>
	:global(*),
	:global(*::before),
	:global(*::after) {
		box-sizing: border-box;
	}

	:global(body) {
		margin: 0;
		padding: 0;
		background-color: #121212;
		color: whitesmoke;
	}

	:global(button) {
		background-color: orangered;
		font-size: 1.2rem;
		color: white;

		border: none;
		outline: none;
		padding: 12px 24px;
		border-radius: 8px;
	}
</style>
