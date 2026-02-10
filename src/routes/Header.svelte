<script lang="ts">
	let { name, color, fake_name }: { name: string; color: string; fake_name?: string } = $props();
</script>

<h1 style="color: {color}">Hello From {name}</h1>

{#if fake_name}
	<p>{fake_name}</p>
{/if}

<style>
	h1 {
		font-size: 2.4rem;
		font-weight: bold;
	}
</style>
