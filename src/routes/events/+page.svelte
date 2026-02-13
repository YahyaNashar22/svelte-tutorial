<script lang="ts">
	let eventAction = $state('no actions yet');

	let events = {
		onclick: () => (eventAction = 'click'),
		ondblclick: () => (eventAction = 'double click')
	};

	let mouse = $state({ x: 0, y: 0 });

	function onmousemove(e: MouseEvent) {
		mouse.x = e.clientX;
		mouse.y = e.clientY;
	}
</script>

<main {onmousemove}>
	<p>{eventAction}</p>
	<button {...events}>Click me</button>

	<p>
		the mouse position is {mouse.x}, {mouse.y}
	</p>
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
