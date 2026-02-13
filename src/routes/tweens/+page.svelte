<script>
	import { cubicInOut } from 'svelte/easing';
	import { Spring, Tween } from 'svelte/motion';

	const size = new Tween(50, { duration: 300, easing: cubicInOut });
	const size2 = new Spring(50, { stiffness: 0.1, damping: 0.25, precision: 0.1 });

	function onmousedown() {
		size.target = 150;
	}

	function onmouseup() {
		size.target = 50;
	}

	function onmousedown2() {
		size2.target = 150;
	}

	function onmouseup2() {
		size2.target = 50;
	}
</script>

<main>
	<svg width="400" height="400" viewBox="0 0 400 400">
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<circle {onmousedown} {onmouseup} cx="200" cy="200" r={size.current} fill="orangered" />
	</svg>

	<svg width="400" height="400" viewBox="0 0 400 400">
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<circle
			onmousedown={onmousedown2}
			onmouseup={onmouseup2}
			cx="200"
			cy="200"
			r={size2.current}
			fill="orangered"
		/>
	</svg>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100dvh;
	}
</style>
