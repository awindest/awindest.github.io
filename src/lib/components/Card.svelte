<script>
	// Like pictures on a wall, with labels
	// Retro / vintage filter on the images
	// Like a vintage computer screen?
	// Do some 3d transforms on hover?
	// github link
	// Only reveal when come into view? rotateX
	// TODO: Focus state; animation; visual cues
	import { base } from '$app/paths'
	import { Award } from 'lucide-svelte'

	export let data
	function toMonthName(monthNumber) {
		const date = new Date()
		date.setMonth(monthNumber - 1)

		return date.toLocaleString('en-US', {
			month: 'short'
		})
	}
</script>

<article>
	<div class="metadata-wrapper">
		<div class="date">
			<!-- {data.month ? `${data.month.padStart(2, "0")} / ${data.year}` : "WIP"} -->
			{data.month ? `${toMonthName(data.month)} ${data.year}` : 'WIP'}
		</div>
		<div class="tags-wrapper">
			{#each data.tags.split(',') as tag}
				<div class="tag">{tag}</div>
			{/each}
		</div>
	</div>
	<!-- FIXME: Lazy loading for images? Image optimization -->
	<a href={`${data.url}`} target="_blank" rel="noopener">
		<!-- <a href={`${base}${data.url}`} target="_blank" rel="noopener"> -->
		<div class="img-wrapper">
			<img
				src={data.imgUrl}
				alt={`Preview image of the work "${data.title}: ${data.subtitle}"`}
				loading="lazy"
			/>
		</div>
		<div class="title">
			<h3>{data.title}</h3>
			<h4>{data.subtitle}</h4>
		</div>
	</a>
	<div class="details">
		{#if data.comments}
			<div class="comments">
				{@html data.comments}
			</div>
		{/if}
		{#if data.award}
			<div class="award">
				<span class="award-icon"><Award /></span>
				{@html data.award}
			</div>
		{/if}
		{#if data.award2}
			<div class="award">
				<span class="award-icon"><Award /></span>
				{@html data.award2}
			</div>
		{/if}
		{#if data.award3}
			<div class="award">
				<span class="award-icon"><Award /></span>
				{@html data.award3}
			</div>
		{/if}
	</div>
</article>

<style>
	article {
		--padding-left: 2px;

		position: relative;
		display: flex;
		flex-direction: column;

		gap: var(--size-3);

		width: 384px;
		height: 100%;
		padding: 16px 32px;
		padding-bottom: 36px;
		overflow: visible;

		color: var(--gray-7);
	}

	.metadata-wrapper {
		display: flex;
		flex-direction: column;
		/* gap: var(--size-00); */
		gap: var(--size-1);
		padding-left: var(--padding-left);
	}

	.date {
		font-family: var(--font-decorative);
		font-size: 0.75rem;
		font-weight: 900;
		color: var(--gray-5);
		text-transform: uppercase;
	}

	.tag {
		display: inline-block;
		padding: 2px 6px;
		margin-right: 8px;

		color: var(--gray-7);
		font-family: var(--font-decorative);
		font-size: 0.75rem;
		font-weight: 900;
		text-transform: uppercase;

		/* background-color: var(--color-lighter-blue); */
		background-color: var(--gray-1);
		border: 1px solid var(--gray-3);
		border-radius: var(--size-00);
	}

	.img-wrapper {
		border-radius: var(--size-2);
		overflow: hidden;

		box-shadow: var(--shadow-lg);

		margin-bottom: var(--size-3);

		transition:
			transform 600ms,
			box-shadow 600ms;

		transform: translateZ(0);
	}

	article:hover .img-wrapper {
		transform: perspective(250px) rotateY(7deg);
		box-shadow: var(--shadow-2xl);
	}

	img {
		height: 192px;
		object-fit: cover;

		/* if empty, show a gradient placeholder */
		background-image: linear-gradient(to bottom, hsl(0 0% 40%), hsl(0 0% 20%));

		filter: saturate(70%);
		transition: filter 600ms;
	}

	article:hover img {
		filter: saturate(100%);
	}

	.title {
		display: flex;
		flex-direction: column;
		/* gap: var(--4px); */

		padding-left: var(--padding-left);
	}

	h3 {
		margin: 0;
		margin-bottom: var(--size-2);
		margin-top: var(--size-1);

		font-weight: 700;
		font-size: var(--size-7);
		font-family: var(--font-subheader);
		line-height: 1;

		color: var(--gray-7);
	}

	h4 {
		margin: 0;

		line-height: 1.1;
		font-size: var(--size-4);
		font-family: var(--font-body);

		color: var(--gray-5);
	}

	.details {
		/* justify-self: flex-end; */
		/* margin-top: auto; */
		/* flex: 1; */

		position: absolute;
		bottom: 0;
		transform: translate(0, -8px);
	}

	.comments,
	.award {
		position: relative;
		justify-self: flex-end;

		/* padding: 0 8px; */
		padding-left: var(--padding-left);
		margin-top: 4px;
		border-radius: 5px;

		/* background-color: var(--color-lighter-blue); */
		color: var(--gray-7);
		font-size: var(--size-3);
	}

	:global(.comments a, .award a) {
		--text-color: var(--gray-7);

		color: var(--text-color);

		text-decoration-line: underline;
		text-decoration-color: var(--text-color);
		text-decoration-style: solid;
		text-decoration-thickness: 1.5px;
	}

	.award-icon {
		position: absolute;
		top: 0;
		left: 0;
		transform: translate(-90%);
	}

	@media (max-width: 37.5rem) {
		.date,
		.tag {
			font-size: var(--size-2);
		}

		article {
			padding-left: 0;
			padding-top: 0;
			padding-bottom: 48px;
			width: 300px;
		}

		h3 {
			font-size: var(--size-5);
			margin-top: 0;
		}

		h4 {
			font-size: var(--size-4);
		}

		.comments,
		.award {
			font-size: var(--size-3);
		}
	}
</style>
