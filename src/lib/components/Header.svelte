<script>
	// TODO: Fade away text on scroll
	// TODO: Show white text on black background first?
	import Cloud from '$components/Cloud.svelte'
	import GridPattern from '$components/GridPattern.svelte'
	import Gradient from '$components/Gradient.svelte'
	import Icon from '$components/Icon.svelte'
	import IconLink from '$components/IconLink.svelte'
	// import LibLoader from "$components/LibLoader.svelte";

	const iconSize = '1.75rem'
</script>

<header>
	<!-- TODO: Desaturate; add filters to better match the color palette -->
	<Cloud />

	<div class="introduction">
		<div class="heading">
			<span class="im">I'm</span>
			<h1 class="name">
				<span class="lighten first-name">Bill</span>
				<span class="lighten last-name">Indest</span>
			</h1>
		</div>
		<p class="intro">
			I like telling <span class="visual em-1">stories </span>about data and technology<br />
			<!-- <span id="interactive" class="interactive em-1">interactive</span>
			<br /><span id="stories" class="stories em-2">stories</span> -->
			and making
			<span id="explorables" class="explorables em-2">visualizations</span>.
			<!-- <DecorativeLine /> -->
			<span id="socials" class="socials"
				><IconLink href="mailto:william.indest@gmail.com">
					<Icon slot="icon" name="mail" width={iconSize} height={iconSize} />
					<svelte:fragment slot="label">Email</svelte:fragment>
				</IconLink>
				<IconLink href="https://twitter.com/windest">
					<Icon slot="icon" name="twitter" width={iconSize} height={iconSize} />
					<svelte:fragment slot="label">Twitter</svelte:fragment>
				</IconLink>
				<IconLink href="https://www.linkedin.com/in/windest/">
					<Icon slot="icon" name="linkedin" width={iconSize} height={iconSize} />
					<svelte:fragment slot="label">Linkedin</svelte:fragment>
				</IconLink>
				<IconLink href="https://github.com/awindest">
					<Icon slot="icon" name="github" width={iconSize} height={iconSize} />
					<svelte:fragment slot="label">Github</svelte:fragment>
				</IconLink>
				<IconLink href="https://awindest.github.io/web-debris/">
					<Icon slot="icon" name="rss" width={iconSize} height={iconSize} />
					<svelte:fragment slot="label">RSS</svelte:fragment>
				</IconLink>
			</span>
		</p>
	</div>
	<GridPattern />
	<Gradient />
</header>

<style>
	.lighten {
		color: var(--color-gray-600);
	}

	.em-1 {
		/* font-weight: 700; */
		/* color: var(--color-gray-600); */
		text-decoration-line: underline;
		text-decoration-color: var(--color-blue);
		text-decoration-style: solid;
		text-decoration-thickness: var(--underline-width);
	}

	.em-2 {
		/* font-weight: 700; */
		/* color: var(--color-gray-600); */
		text-decoration-line: underline;
		text-decoration-color: var(--color-light-green);
		text-decoration-style: solid;
		text-decoration-thickness: var(--underline-width);
	}

	.introduction {
		/* visibility: hidden; */
		width: 960px;
		padding-left: 32px;

		transform: translateZ(1000px);
	}

	header {
		--underline-width: 6px;

		position: relative;
		isolation: isolate;

		padding-top: 55px;

		/* display: flex;
		flex-direction: column;
		align-items: center; */
		display: grid;
		place-items: center;

		overflow: hidden;
		background-color: var(--color-gray-50);
	}

	h1 {
		display: inline;
		font-family: var(--font-header);
		font-weight: 700;
		text-shadow: var(--text-border);
	}

	.im {
		margin-right: 8px;
		font-weight: 500;
		font-size: var(--44px);
		font-family: var(--font-header);
	}

	.intro {
		position: relative;
		display: inline-block;
		font-family: var(--font-subheader);
		font-size: var(--32px);
		/* text-align: center; */

		/* background-color: var(--color-gray-800);
		color: var(--color-gray-100); */
	}

	.socials {
		margin-left: 8px;
		position: relative;
		top: 8px;
	}

	@media (max-width: 37.5rem) {
		header {
			--underline-width: 4px;

			padding-top: 50px;
		}

		.im {
			font-size: var(--36px);
		}

		h1 {
			font-size: var(--40px);
		}

		.intro {
			margin-top: 4px;
			font-size: var(--22px);
		}

		.socials {
			display: block;
			margin-left: -16px;
			margin-top: 8px;
		}
	}
</style>
