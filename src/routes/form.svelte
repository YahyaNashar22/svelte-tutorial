<script>
	let formState = $state({
		name: '',
		birthday: '',
		step: 0,
		error: ''
	});
</script>

<form>
	{#if formState.error !== ''}
		<h3>{formState.error}</h3>
	{/if}

	<p>
		Step: {formState.step + 1}
	</p>

	{#if formState.step === 0}
		<div>
			<label for="name">Your Name</label>
			<input type="text" id="name" bind:value={formState.name} />
		</div>
		<button
			onclick={(e) => {
				e.preventDefault();
				if (formState.name !== '') {
					formState.step += 1;
					formState.error = '';
				} else {
					formState.error = 'Your name is empty. Please write your name';
				}
			}}
		>
			Next
		</button>
	{:else if formState.step === 1}
		<div>
			<label for="birthday">Your Birthday</label>
			<input type="text" id="birthday" bind:value={formState.birthday} />
		</div>
		<button
			onclick={(e) => {
				e.preventDefault();
				if (formState.birthday !== '') {
					formState.step += 1;
					formState.error = '';
				} else {
					formState.error = 'Your birthday is empty. Please write your birthday';
				}
			}}
		>
			Next
		</button>
	{:else}
		<h1>Congrats</h1>
	{/if}
</form>

<style>
	form {
		background-color: darksalmon;
	}

	p {
		font-size: 2rem;
		color: azure;
	}
</style>
