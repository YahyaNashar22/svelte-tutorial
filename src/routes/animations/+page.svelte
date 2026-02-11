<script lang="ts">
	import { fly } from 'svelte/transition';

	let counter = $state(0);

	function count(e: KeyboardEvent) {
		if (e.key === 'd') counter++;
		if (e.key === 'a') counter--;
	}
</script>

<svelte:window on:keydown={count} />

<main>
	<div class="stage">
		{#key counter}
			<div
				class="panel"
				in:fly={{ x: 200, y: 0, duration: 200, opacity: 0 }}
				out:fly={{ x: -200, y: 0, duration: 200, opacity: 0 }}
			>
				{@render box(counter)}
			</div>
		{/key}
	</div>
</main>

{#snippet box(counter: number)}<div class="box">{counter}</div>{/snippet}

<style>
	main {
		height: 100vh;
		width: 100vw;
		background-color: thistle;
		display: grid;
		place-items: center;
		overflow: hidden;
	}

	.stage {
		position: relative;
		width: 200px;
		height: 200px;
	}

	.panel {
		position: absolute;
		inset: 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.box {
		height: 200px;
		width: 200px;
		background-color: wheat;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
