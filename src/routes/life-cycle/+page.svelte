<script lang="ts">
	let counter = $state(1);
	const messages = ['Hi', 'Hello', 'Yo', 'Sup', 'Welcome'];

	const randomMessage = $derived.by(() => {
		// reruns only when counter changes
		counter;
		const i = Math.floor(Math.random() * messages.length);
		return `${messages[i]}`;
	});

	function increment() {
		counter++;
	}

	function reset(event: KeyboardEvent) {
		if (event.key === 'r') {
			counter = 0;
		}
	}

	$effect(() => {
		console.log('on mounted');

		return () => {
			// when unmounted ~ destroyed
			// before effect re-runs
			console.log('on unmounted');
		};
	});

	$effect(() => {
		console.log('formState', counter);

		return () => {
			console.log('Before rerun', counter);
		};
	});
</script>

<svelte:window on:keydown={reset} />

<main>
	<div>
		<h1>{counter}</h1>
		<p>{randomMessage}</p>
		<button onclick={increment}>increment</button>
	</div>
</main>

<style>
	main {
		background-color: rgb(0, 0, 29);
		height: 100vh;
		width: 100vw;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	h1 {
		color: whitesmoke;
		font-size: 4rem;
	}

	p {
		color: whitesmoke;
		font-size: 1rem;
	}

	button {
		color: whitesmoke;
		padding: 12px 24px;
		font-size: 2rem;
		font-weight: bold;
		text-transform: capitalize;
		transition: 0.3s ease-in-out;
		background-color: rgb(0, 61, 153);
		outline: none;
		border: none;
	}

	button:hover {
		transform: translateY(-12px);
		box-shadow: -4px 8px rgb(0, 23, 155);
	}

	button:active {
		transform: translateY(12px);
		box-shadow: 0px 0px;
	}
</style>
