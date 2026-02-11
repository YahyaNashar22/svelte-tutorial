<script lang="ts">
	import Header from './Header.svelte';
	import Form from './form.svelte';
	import ColorPicker from './colorPicker.svelte';
	import { createState, CustomState } from './state.svelte';

	let name = $state('Yahya');

	let color = 'blueviolet';

	let status: 'OPEN' | 'CLOSED' = $state('OPEN');

	let full_name = $derived(name + ' ' + 'is black');

	function onclick() {
		status = status === 'OPEN' ? 'CLOSED' : 'OPEN';
	}

	const myState = createState();
	const myState2 = new CustomState();
</script>

<Header {name} {color} />

<input type="text" bind:value={name} />

<p>The store is now {status}</p>

<button {onclick}>Toggle Status</button>

<h2>{full_name}</h2>

<ColorPicker />

<Form />

<button onclick={myState.up}>{myState.value}</button>
<button onclick={() => myState2.up()}>{myState2.value}</button>
<button onclick={() => myState2.set(30)}>{myState2.value}</button>
