<script>
	// Use world famous CSS grid layout?
	// TODO: Design the cards first?
	// Animate card in only when it scrolls into view
	// Grayscale the rest of the cards on hover
	// Scroll-snap on mobile
	// Add texture
	// Fade from a dark screen
	// TODO: Shadow from the left / right
	import Card from '$components/Card.svelte'

	export let type
	export let data
	export let id
</script>

<section class="works" {id}>
	<div id="title-portfolio" class="title-wrapper">
		<h2>{type}</h2>
	</div>
	<div id="scroller" class="horizontal-media-scroller">
		{#each data as d}
			<div class="card-wrapper">
				<Card data={d} />
			</div>
		{/each}
	</div>
</section>

<style>
	section {
		padding-top: 8px;
		/* background-color: var(--gray-5); */
		background-image: url('https://www.transparenttextures.com/patterns/redox-02.png');
	}

	.title-wrapper {
		max-width: 960px;
		margin-left: auto;
		margin-right: auto;
		padding-left: 32px;
	}

	h2 {
		--size: var(--size-3);
		--color: var(--gray-);

		font-family: var(--font-decorative);
		font-size: var(--size);
		line-height: var(--size);

		font-weight: 900;
		text-transform: uppercase;
		color: var(--color);

		padding-left: 8px;

		border-left: 2px solid var(--color);
	}

	.horizontal-media-scroller {
		display: grid;
		grid-auto-flow: column;
		justify-content: left;
		margin: 0;

		overflow-x: auto;
		overscroll-behavior-inline: contain;

		padding: 16px 32px;
		padding-bottom: 0;
		scroll-padding: 0 32px 0 32px;
	}

	.card-wrapper {
		border-right: 2px solid var(--gray-3);
	}

	.card-wrapper:last-of-type {
		border: none;
	}

	@media (max-width: 37.5rem) {
		h2 {
			font-size: var(--12px);
		}

		.card-wrapper {
			border: none;
		}
	}
</style>
