<script lang="ts">
	import ChildrenContainer from './childrenContainer.svelte';
	import RandomComponent from './randomComponent.svelte';

	type Answers = Record<string, string>;

	let formState = $state({
		answers: {} as Answers,
		step: 0,
		error: ''
	});

	const QUESTIONS = [
		{
			question: "What's your name",
			id: 'name',
			type: 'text'
		},
		{
			question: "What's your birthday",
			id: 'birthday',
			type: 'date'
		}
	];

	function nextStep(id: string) {
		if (formState.answers[id]) {
			formState.step += 1;
			formState.error = '';
		} else {
			formState.error = 'Please fill out the form input!';
		}
	}
</script>

<ChildrenContainer>
	<p>We are the children</p>
</ChildrenContainer>

<h4>{formState.error}</h4>

{#if formState.step >= QUESTIONS.length}
	<p>Thank you!</p>
{:else}
	<p>Step: {formState.step + 1}</p>
{/if}

{#each QUESTIONS as question, index (question.id)}
	{#if formState.step === index}
		{@render formStep(question)}
	{/if}
{/each}

{#snippet formStep({ question, id, type }: { question: string; id: string; type: string })}
	<article>
		<div>
			<label for={id}>{question}</label>
			<input {type} {id} bind:value={formState.answers[id]} />
		</div>
		<button onclick={() => nextStep(id)}>Next</button>
	</article>
{/snippet}

<RandomComponent name={formState.step}>
	{#snippet customChild(name)}
		<p>I am the custom Child and the name is {name}</p>
	{/snippet}
</RandomComponent>

<style>
	h4 {
		color: brown;
	}
</style>
