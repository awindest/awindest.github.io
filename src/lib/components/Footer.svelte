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
