<script lang="ts">
	import { goto } from '$app/navigation';
	import { globalState } from '$lib/globalState.svelte';
	import { gsap } from 'gsap';
	import { Flip } from 'gsap/all';
	import { tick } from 'svelte';

	gsap.registerPlugin(Flip);

	let items = $state([...Array(10).keys()]);

	function shuffle() {
		items = items.toSorted(() => Math.random() - 0.5);
	}

	$effect.pre(() => {
		items;
		const state = Flip.getState('.item');
		// The following can be replaced with:
		// queueMicrotask(() => {
		// 	Flip.from(state, { duration: 1, stagger: 0.01, ease: 'power1.inOut' });
		// });
		// this:
		tick().then(() => {
			Flip.from(state, { duration: 1, stagger: 0.01, ease: 'power1.inOut' });
		});
	});
</script>

<div class="shuffle">
	<div class="items">
		{#each items as item (item)}
			<div class="item">{item}</div>
		{/each}
	</div>

	<button class="btn" onclick={shuffle}>Shuffle</button>
	<p>{globalState.theme}</p>
	<button aria-label="pokemon" onclick={() => goto('/pokemon')}>pokemon screen</button>
</div>

<style>
	.shuffle {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 2rem;
		background: #0f172a;
		padding: 2rem;
	}

	.items {
		display: grid;
		grid-template-columns: repeat(2, 120px);
		gap: 1rem;
	}

	.item {
		height: 120px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 2rem;
		font-weight: bold;
		border-radius: 16px;
		background: linear-gradient(145deg, #1e293b, #0f172a);
		color: white;
		box-shadow:
			0 8px 20px rgba(0, 0, 0, 0.4),
			inset 0 1px 0 rgba(255, 255, 255, 0.05);
	}

	.item:hover {
		transform: translateY(-4px);
	}

	.btn {
		padding: 0.8rem 1.6rem;
		border: none;
		border-radius: 12px;
		font-size: 1rem;
		font-weight: 600;
		cursor: pointer;
		background: linear-gradient(135deg, #6366f1, #8b5cf6);
		color: white;
		box-shadow: 0 6px 15px rgba(99, 102, 241, 0.4);
	}

	.btn:hover {
		transform: translateY(-2px);
		box-shadow: 0 10px 25px rgba(99, 102, 241, 0.5);
	}

	.btn:active {
		transform: translateY(0);
	}
</style>
