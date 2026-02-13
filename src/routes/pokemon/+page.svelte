<script lang="ts">
	import { goto } from '$app/navigation';
	import { globalState } from '$lib/globalState.svelte';
	import { getAbortSignal } from 'svelte';

	let pokemon = $state('charizard');
	let image = $state('');

	async function getPokemon(pokemon: string) {
		console.log('here');
		const baseUrl = 'https://pokeapi.co/api/v2/pokemon';
		const response = await fetch(`${baseUrl}/${pokemon}`, {
			signal: getAbortSignal()
		});
		console.log(response);
		if (!response.ok) throw new Error('Oops!');
		return response.json();
	}

	$effect(() => {
		getPokemon(pokemon).then((data) => {
			image = data.sprites.front_default;
		});
	});
</script>

<main style="background-color: {globalState.theme === 'light' ? 'red' : 'blue'}">
	<h1>Pokemon API</h1>
	<input type="search" placeholder="enter pokemon name" bind:value={pokemon} />
	<img src={image} alt={pokemon} />
	<button
		onclick={() => {
			globalState.toggleTheme();
		}}>{globalState.theme}</button
	>
	<button aria-label="gsap" onclick={() => goto('/gsap')}>gsap</button>

	<!-- async await syntax in html  -->
	{#await getPokemon(pokemon)}
		<p>awaiting pokemon . . .</p>
	{:then pokemon}
		<img src={image} alt={pokemon} />
	{:catch error}
		<p>{error.message}</p>
	{/await}
</main>
