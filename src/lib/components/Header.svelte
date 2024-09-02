<script>
	import Cloud from '$components/Cloud.svelte'
</script>

<header>
	<Cloud />
	<div class="introduction">
		<div class="heading">
			<span class="im">Hi, I'm</span>
			<h1 class="name lighten">
				Bill Indest 👋
			</h1>
		</div>
		<p class="intro">
			I like telling <span class="em-1">stories </span>about data and technology<br />
			and making <span class="em-2">visualizations</span>

			<span class="socials">
				<a href="mailto:william.indest@gmail.com"
					><iconify-icon class="icon" icon="lucide:mail" title="Send me some mail."
					></iconify-icon></a
				>
				<a href="https://www.linkedin.com/in/windest/"
					><iconify-icon
						class="icon"
						icon="lucide:linkedin"
						title="Find out more about me on LinkedIn."
					></iconify-icon></a
				>
				<a href="https://sveltekit-markdown-blog-pearl.vercel.app/"
					><iconify-icon class="icon" icon="grommet-icons:blog" title="My blog, wip."></iconify-icon></a
				>
				<a href="https://twitter.com/windest"
					><iconify-icon class="icon" icon="lucide:twitter" title="Twitter, er, X"></iconify-icon></a
				>
				<a href="https://github.com/awindest"
					><iconify-icon
						class="icon"
						icon="lucide:github"
						title="Most of my work, including this website is on Github."
					></iconify-icon></a
				>
				<a href="https://awindest.github.io/web-debris/"
					><iconify-icon class="icon" icon="lucide:rss" title="RSS feed, not working yet."></iconify-icon></a
				>
				<a href="https://vercel.com/awindest/"
				><iconify-icon class="icon" icon="tabler:brand-vercel" title="My Vercel projects."></iconify-icon></a
				>
			</span>
		</p>
	</div>
</header>

<style>
	.lighten {
		color: var(--gray-7);
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
		/* --underline-width: 6px; */

		position: relative;
		isolation: isolate;

		padding-top: 55px;
		padding-bottom: 50px;
		display: grid;
		place-items: center;

		overflow: hidden;
		background-color: var(--gray-0);
		/* background-image: linear-gradient(to top, var(--gray-0), var(--violet-7)); */
		background-image: linear-gradient(to top, var(--gray-0), var(--blue-7));
		animation: slidein;
		/* duration timing-function delay iteration-count direction fill-mode; */
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
	.em-1 {
		position: relative;
		/* animation: 3s infinite alternate slidein; */
		width: 0;
		animation-duration: 1s;
	}

	.em-1::after {
		content: '';
		position: absolute;
		bottom: -0.125rem;
		left: -0.25rem;
		right: -0.05rem;
		height: 0.95rem;
		width: 100%;
		z-index: -1;
		background-image: url('/imgs/underline-green-5.svg');
		background-repeat: no-repeat;
		background-size: cover;
	}
	.em-2 {
		position: relative;
	}
	.em-2::after {
		content: '';
		position: absolute;
		bottom: -0.125rem;
		left: -0.25rem;
		right: -0.05rem;
		height: 0.95rem;
		z-index: -1;
		background-image: url('/imgs/underline-blue-5.svg');
		background-repeat: no-repeat;
		background-size: cover;
	}

	.intro {
		position: relative;
		display: inline-block;
		font-family: var(--font-subheader);
		/* font-size: var(--size-7);
		 */
		 font-size: var(--font-size-fluid-2); /* open-props - makes font smaller on mobile devices */
	}

	.socials {
		margin-left: 18px;
		position: relative;
		top: 8px;
	}
	.icon {
		color: var(--gray-6);
		height: 1em;
		inset: 0;
		margin-left: 0.5em;
		transition: 1.3s;
	}

	.icon:hover {
		color: var(--gray-8);
		transform: scale(1.3);
	}

	@media (max-width: 37.5rem) {
		header {
			--underline-width: 4px;
			padding-top: 50px;
		}

		.im {
			/* font-size: var(--36px); */
			font-size: var(--font-size-fluid-2)
		}

		h1 {
			/* font-size: var(--40px); */
			font-size: var(--font-size-fluid-3);
		}

		.intro {
			margin-top: 4px;
			/* font-size: var(--22px); */
			font-size: var(--font-size-fluid-1)
		}

		.socials {
			display: block;
			margin-left: -16px;
			margin-top: 8px;
		}
	}
</style>
