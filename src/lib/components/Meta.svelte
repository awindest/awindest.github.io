<script>
	import { base } from '$app/paths'
	export let title = 'Bill Indest Portfolio'
	export let description =
		'I like telling stories about data and technology and making visualizations.'
	export let url = 'https://awindest.github.io/'
	export let keywords =
		'data stories, web technology, web design, data science, data visualization, machine learning, artificial intelligence, AI, data wrangling'

	export let socialImg = `${base}/social.png`

	export let preloadFont = [
		'/fonts/formadjrdisplay-regular-webfont.woff2',
		// '/fonts/formadjrdisplay-bold-webfont.woff2',
		// '/fonts/formadjrdisplay-italic-webfont.woff2',
		// '/fonts/formadjrdisplay-bolditalic-webfont.woff2',
		// '/fonts/formadjrdeck-regular-webfont.woff2',
		// '/fonts/formadjrdeck-bold-webfont.woff2',
		// '/fonts/formadjrdeck-italic-webfont.woff2',
		// '/fonts/formadjrdeck-bolditalic-webfont.woff2',
		// '/fonts/formadjrtext-regular-webfont.woff2',
		// '/fonts/formadjrtext-bold-webfont.woff2',
		// '/fonts/formadjrtext-italic-webfont.woff2',
		// '/fonts/formadjrtext-bolditalic-webfont.woff2',
		'/fonts/ManifoldExtendedCF-Regular.woff2'
		// '/fonts/ManifoldExtendedCF-RegularOblique.woff2',
		// '/fonts/ManifoldExtendedCF-Bold.woff2',
		// '/fonts/ManifoldExtendedCF-BoldOblique.woff2',
		// '/fonts/ManifoldExtendedCF-ExtraBold.woff2',
		// '/fonts/ManifoldExtendedCF-ExtraBoldOblique.woff2',
		// '/fonts/ManifoldExtendedCF-Heavy.woff2',
		// '/fonts/ManifoldExtendedCF-HeavyOblique.woff2'
	].map((d) => base + d)
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="author" content="Bill Indest" />
	<meta name="news_keywords" content={keywords} />

	<meta property="og:title" content={title} />
	<meta property="og:site_name" content="Bill Indest" />
	<meta property="og:url" content={url} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="article" />
	<meta property="og:locale" content="en_US" />

	<meta property="og:image" content={socialImg} />
	<meta property="og:image:type" content="image/jpeg" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="600" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="https://awindest.github.io/" />
	<meta name="twitter:creator" content="@windest" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image:src" content={socialImg} />

	<meta name="robots" content="max-image-preview:large" />

	<link rel="canonical" href="{url}/" />

	<!-- {#each preloadFont as href}
		<link rel="preload" {href} as="font" type="font/woff2" crossorigin />
	{/each} -->
</svelte:head>
