<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import Tween from './tween.svelte';

	let target: Element;
	let target2: Element;
	let rerunState = $state(0);

	let animation = $state<GSAPAnimation>();

	function tween(vars: any, ref: any) {
		let tween: any;

		return (target: any) => {
			tween = gsap.to(target, vars);
			ref?.(tween);
			return () => tween.kill();
		};
	}

	onMount(() => {
		const tween = gsap.to(target, { rotation: 460, x: 200, duration: 2 });

		return () => {
			tween.kill();
		};
	});

	$effect(() => {
		rerunState;

		if (!target2) return;

		const tween2 = gsap.fromTo(
			target2,
			{ rotation: 0, x: 0 },
			{ rotation: 460, x: -200, duration: 2, ease: 'bounce.inOut' }
		);

		return () => tween2.kill();
	});
</script>

<main>
	<div class="box" bind:this={target}></div>
	<div class="box2" bind:this={target2}></div>

	<Tween bind:tween={animation} vars={{ rotation: 360, x: 200, y: 200, duration: 2 }}>
		<button onclick={() => animation?.restart()} class="box3">Play</button>
	</Tween>

	<div
		class="box4"
		{@attach (box) => {
			gsap.to(box, { rotation: 360, x: 200, y: -100, duration: 2, ease: 'elastic.inOut' });
		}}
	></div>

	<button
		class="box5"
		{@attach tween(
			{ rotation: 360, x: -250, y: -250, duration: 2, ease: 'circ.inOut' },
			(tween: any) => (animation = tween)
		)}
		onclick={() => animation?.restart()}>attach</button
	>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100dvh;
	}

	.box {
		width: 100px;
		height: 100px;
		background-color: orangered;
		border-radius: 8px;
	}

	.box2 {
		width: 100px;
		height: 100px;
		background-color: darkslateblue;
		border-radius: 8px;
	}

	.box3 {
		width: 100px;
		height: 100px;
		background-color: aqua;
		border-radius: 8px;
	}

	.box4 {
		width: 100px;
		height: 100px;
		background-color: darkkhaki;
		border-radius: 8px;
	}

	.box5 {
		width: 100px;
		height: 100px;
		background-color: dimgray;
		border-radius: 8px;
	}
</style>
