<script>
	import fly from "./transitions.js";
	export let open = false;
</script>

{#if open}
	<div class="drawer" transition:fly={{ x: "100%" }}>
		<center><h1>Disclaimer</h1></center>
		<p>
			Disclaimer for <strong>awindest.github.io</strong>
		</p>

		<p>
			If you require any more information or have any questions about my site's
			disclaimer, please feel free to contact me via email or
			<a href="https://linkedin.com/in/windest">LinkedIn</a>.
		</p>
		<p>
			All the information on this website - <strong>awindest.github.io</strong>
			- is published in good faith and for general information purposes only.
			<strong>awindest.github.io</strong> does not make any warranties about the
			completeness, reliability and accuracy of this information. Any action you
			take upon the information you find on this website (<strong
				>awindest.github.io</strong
			>), is strictly at your own risk. <strong>awindest.github.io</strong> will
			not be liable for any losses and/or damages in connection with the use of my
			website. It may be possible for you to visit other websites by following hyperlinks
			to other external sites. While I strive to provide only quality links to useful
			and ethical websites, I have no control over the content and nature of these
			sites. These links to other websites do not imply a recommendation for all
			the content found on these sites. Site owners and content may change without
			notice and may occur before I have the opportunity to remove a link which may
			have gone 'bad'. Please be also aware that when you leave my website, other
			sites may have different privacy policies and terms which are beyond my control.
			Please be sure to check the Privacy Policies of these sites as well as their
			"Terms of Service" before engaging in any business or uploading any information.
		</p>
		<h2>Consent</h2>

		By using my website, you hereby consent to my disclaimer and agree to its
		terms.

		<h2>Update</h2>

		Should I update, amend or make any changes to this document, those changes
		will be prominently posted here.
	</div>
{/if}

<style>
	.drawer {
		position: fixed;
		z-index: 10;
		top: 0;
		right: 0;
		padding: 25px;
		height: 100vh;
		width: 400px;
		border-left: 1px solid rgba(0, 0, 0, 0.1);
		box-shadow: -2px 0px 6px -1px rgba(0, 0, 0, 0.1);
		background: rgba(255, 255, 255, 0.25);
		backdrop-filter: blur(20px);
		overflow: auto;
	}
	div {
		font-size: 20px;
		color: #555353;
		font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
	}
</style>
