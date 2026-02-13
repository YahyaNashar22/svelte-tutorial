<script lang="ts">
	import { flip } from 'svelte/animate';
	import { crossfade, fly } from 'svelte/transition';

	const [send, receive] = crossfade({
		duration: 2000
	});

	let counter = $state(0);
	let posts = $state([
		{
			id: 1,
			title: 'First',
			description: 'Content',
			archived: false
		},
		{
			id: 2,
			title: 'Second',
			description: 'Content',
			archived: false
		},
		{
			id: 3,
			title: 'Third',
			description: 'Content',
			archived: false
		},
		{
			id: 4,
			title: 'Fourth',
			description: 'Content',
			archived: false
		}
	]);

	function count(e: KeyboardEvent) {
		if (e.key === 'd') counter++;
		if (e.key === 'a') counter--;
	}

	function archivePost(post: (typeof posts)[0]) {
		const index = posts.findIndex((p) => p.id === post.id);
		posts[index].archived = !posts[index].archived;
	}

	function removePost(post: (typeof posts)[0]) {
		const index = posts.findIndex((p) => p.id === post.id);
		if (index === -1) return;
		posts.splice(index, 1);
	}
</script>

<svelte:window on:keydown={count} />

<main>
	<div class="stage">
		{#key counter}
			<div
				class="panel"
				in:fly={{ x: 200, y: 0, duration: 200, opacity: 0 }}
				out:fly={{ x: -200, y: 0, duration: 200, opacity: 0 }}
			>
				{@render box(counter)}
			</div>
		{/key}
	</div>

	<div class="horizontal">
		<div class="posts">
			{#each posts.filter((posts) => !posts.archived) as post (post)}
				<article class="post" animate:flip in:receive={{ key: post }} out:send={{ key: post }}>
					<div>{post.title}</div>
					<div>{post.description}</div>

					<button type="button" onclick={() => archivePost(post)}>♻️</button>
					<button type="button" ondblclick={() => removePost(post)}>🗑️</button>
				</article>
			{/each}
		</div>

		<div class="posts">
			{#each posts.filter((posts) => posts.archived) as post (post)}
				<article class="post" animate:flip in:receive={{ key: post }} out:send={{ key: post }}>
					<div>{post.title}</div>
					<div>{post.description}</div>

					<button type="button" onclick={() => archivePost(post)}>🔁</button>
					<button type="button" ondblclick={() => removePost(post)}>🗑️</button>
				</article>
			{/each}
		</div>
	</div>
</main>

{#snippet box(counter: number)}<div class="box">{counter}</div>{/snippet}

<style>
	main {
		height: 100vh;
		width: 100vw;
		background-color: thistle;
		display: grid;
		place-items: center;
		overflow: hidden;
	}

	.stage {
		position: relative;
		width: 200px;
		height: 200px;
	}

	.panel {
		position: absolute;
		inset: 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.box {
		height: 200px;
		width: 200px;
		background-color: wheat;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.posts {
		display: grid;
		grid-template-columns: repeat(2, 200px);
		gap: 12px;
	}

	.post {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 12px;
		background-color: orangered;
		padding: 12px 24px;
		font-size: 2rem;
		border-radius: 8px;
	}

	.horizontal {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
	}
</style>
