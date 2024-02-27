<script>
	export let href;
</script>

<a {href} target="_blank" rel="noopener noreferrer">
	<slot />
</a>

<style>
	a {
		display: inline-block;
    margin-left: 16px;
	}
</style>
