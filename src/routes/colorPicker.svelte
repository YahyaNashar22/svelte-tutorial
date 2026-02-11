<script>
	let color = $state('#ff0000');
</script>

<label>
	Pick a color:
	<input type="color" bind:value={color} />
</label>

<div class="box" style="background-color: {color};">
	{color}
</div>

<style>
	.box {
		width: 220px;
		height: 120px;
		border-radius: 12px;
		border: 1px solid #ccc;
		display: grid;
		place-items: center;
		margin-top: 12px;
		font-family: system-ui, sans-serif;
	}

	label {
		font-family: system-ui, sans-serif;
		display: inline-flex;
		gap: 10px;
		align-items: center;
	}

	input[type='color'] {
		width: 44px;
		height: 32px;
		padding: 0;
		border: none;
		background: none;
	}
</style>
