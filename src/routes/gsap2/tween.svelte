<script lang="ts">
	import gsap from 'gsap';

	let { tween = $bindable(), vars, children } = $props();
	let target: Element;

	$effect(() => {
		tween = gsap.fromTo(target, { x: 0, y: 0 }, vars);

		return () => tween.kill();
	});
</script>

<div bind:this={target}>
	{@render children?.()}
</div>
