<script>
	function* itemGenerator() {
		// @ts-ignore
		yield '🍎   🍎   🍎   🍎';
		// @ts-ignore
		yield '🎮   🎮   🎮   🎮';
	}
</script>

<div class="grid">
	{#each Array(10) as _, row}
		{#each Array(10) as _, col}
			<div class="cell">
				{row},{col}
			</div>
		{/each}
	{/each}

	{#each itemGenerator() as item}
		<div>{item}</div>
	{/each}
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(10, 60px);
		grid-template-rows: repeat(10, 60px);
		gap: 6px;
		justify-content: center;
	}

	.cell {
		display: flex;
		align-items: center;
		justify-content: center;
		background: #1e293b;
		color: white;
		border-radius: 6px;
		font-size: 0.75rem;
		font-weight: 600;
	}
</style>
