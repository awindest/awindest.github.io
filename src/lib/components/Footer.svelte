<script>
</script>

<footer>
	<div class="footer" id="labs">
		Indest Labs
		<img
			style="border:0px;height:48px;float:right;filter:contrast(75%);"
			height="48"
			src="/flask.svg"
			border="0"
			alt="Laboratory Flask"
		/>
		<div class="batteries-included">🔋 batteries included.</div>
		<!-- <div class="flex gap-6 text-sm opacity-60"> -->
		<div class="made-with-love">Made with ❤️ for AI</div>
	</div>
</footer>

<style>
	footer {
		/* height: 150px; */
		flex: 1 1 150px;
		position: relative;
		overflow: hidden;
		background-image:
		/* linear-gradient(0deg, var(--violet-8) 0%, hsl(0, 100%, 100%) 100%), */
			linear-gradient(0deg, var(--blue-7) 0%, hsl(0, 100%, 100%) 100%),
			/* url('https://www.transparenttextures.com/patterns/clean-gray-paper.png'); */
				url('/imgs/clean-gray-paper.avif');

		display: flex;
		justify-content: center;
	}

	.batteries-included,
	.made-with-love {
		position: absolute;
		bottom: 0.25rem;
		font-family: sans-serif;
		font-size: 0.5em;
		/* text-shadow: none; */
	}
	.batteries-included {
		right: 0.5rem;
	}
	.made-with-love {
		left: 0.5rem;
	}
	/* author's stamp */
	#labs {
		margin-top: 1.5em;
		background: transparent;
		color: #042e64;
		font-size: 2em;
		font-family: 'Averox', sans-serif;
		text-shadow:
			-1px -1px 2px #fff,
			-1px 1px 2px #fff,
			1px -1px 2px #fff,
			1px 1px 2px #fff;
	}
</style>
