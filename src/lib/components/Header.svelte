<script>
	import Cloud from '$components/Cloud.svelte'
	import Icon from '$components/Icon.svelte'
	import IconLink from '$components/IconLink.svelte'
	const iconSize = '1.75rem'
</script>

<header>
	<!-- TODO: Desaturate; add filters to better match the color palette -->
	<Cloud />
	<div class="introduction">
		<div class="heading">
			<span class="im">I'm</span>
			<h1 class="name">
				Bill Indest
				<!-- <span class="lighten first-name">Bill</span>
				<span class="lighten last-name">Indest</span> -->
			</h1>
		</div>
		<iconify-icon icon="lucide:mail"></iconify-icon>
		<!-- <Icon icon="lucide:mail" /> -->
		<p class="intro">
			I like telling <span class="visual em-1">stories </span>about data and technology<br />
			<!-- <span id="interactive" class="interactive em-1">interactive</span>
			<br /><span id="stories" class="stories em-2">stories</span> -->
			and making
			<span class="em-2">visualizations</span>

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
</header>

<style>
	.lighten {
		color: var(--gray-6);
	}

	.em-1 {
		text-decoration-line: underline;
		text-decoration-color: var(--color-blue);
		text-decoration-style: solid;
		text-decoration-thickness: var(--underline-width);
	}

	.em-2 {
		text-decoration-line: underline;
		text-decoration-color: var(--color-light-green);
		text-decoration-style: solid;
		text-decoration-thickness: var(--underline-width);
	}

	.introduction {
		width: 960px;
		padding-left: 32px;
		transform: translateZ(1000px);
	}

	.name {
		/* text-shadow:; */
		/* -3px -3px 2px #fff,
			-3px 3px 2px #fff,
			3px -3px 2px #fff,
			3px 3px 2px #fff; */
	}

	header {
		--underline-width: 6px;

		position: relative;
		isolation: isolate;

		padding-top: 55px;
		display: grid;
		place-items: center;

		overflow: hidden;
		background-image: linear-gradient(to top, rgba(255, 0, 0, 0), hsl(210, 73%, 47%));
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
		font-size: var(--size-8);
		font-family: var(--font-header);
	}

	.intro {
		position: relative;
		display: inline-block;
		font-family: var(--font-subheader);
		font-size: var(--size-7);
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
