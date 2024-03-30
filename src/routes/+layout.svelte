<!--                                  
╭━━╮╱╱╱╱╭╮╱╱╱╱╱╭╮╱╭╮╱╱╱╱╱╭╮            ━╮ ╭━
╰┫┣╯╱╱╱╱┃┃╱╱╱╱╭╯╰╮┃┃╱╱╱╱╱┃┃             | |
╱┃┃╭━╮╭━╯┣━━┳━┻╮╭╯┃┃╱╱╭━━┫╰━┳━━╮       ╱ o \
╱┃┃┃╭╮┫╭╮┃┃━┫━━┫┃╱┃┃╱╭┫╭╮┃╭╮┃━━┫      ╱_____\
╭┫┣┫┃┃┃╰╯┃┃━╋━━┃╰╮┃╰━╯┃╭╮┃╰╯┣━━┃     ╱    o  \  
╰━━┻╯╰┻━━┻━━┻━━┻━╯╰━━━┻╯╰┻━━┻━━╯    (__o______)  

Yet another science experiment from Indest Labs.

Recommend viewing in Visual Source Code.
-->

<script>
	import 'open-props/style'
	import 'iconify-icon'
</script>

<slot />

<style>
	@font-face {
		font-family: 'Averox';
		src: url('/fonts/Averox-webfont.woff2') format('woff2');
		font-style: normal;
		font-weight: 500;
		font-display: swap;
	}

	@font-face {
		font-family: 'manifold-extended-cf';
		src: url('/fonts/ManifoldExtendedCF-Regular.woff2') format('woff2');
		font-style: normal;
		font-weight: 500;
		font-display: swap;
	}

	@font-face {
		font-family: 'manifold-extended-cf';
		src: url('/fonts/ManifoldExtendedCF-RegularOblique.woff2') format('woff2');
		font-style: italic;
		font-weight: 500;
		font-display: swap;
	}

	@font-face {
		font-family: 'manifold-extended-cf';
		src: url('/fonts/ManifoldExtendedCF-Bold.woff2') format('woff2');
		font-style: normal;
		font-weight: 700;
		font-display: swap;
	}

	@font-face {
		font-family: 'manifold-extended-cf';
		src: url('/fonts/ManifoldExtendedCF-BoldOblique.woff2') format('woff2');
		font-style: italic;
		font-weight: 700;
		font-display: swap;
	}

	@font-face {
		font-family: 'manifold-extended-cf';
		src: url('/fonts/ManifoldExtendedCF-ExtraBold.woff2') format('woff2');
		font-style: normal;
		font-weight: 800;
		font-display: swap;
	}

	@font-face {
		font-family: 'manifold-extended-cf';
		src: url('/fonts/ManifoldExtendedCF-ExtraBoldOblique.woff2') format('woff2');
		font-style: italic;
		font-weight: 800;
		font-display: swap;
	}

	@font-face {
		font-family: 'manifold-extended-cf';
		src: url('/fonts/ManifoldExtendedCF-Heavy.woff2') format('woff2');
		font-style: normal;
		font-weight: 900;
		font-display: swap;
	}

	@font-face {
		font-family: 'manifold-extended-cf';
		src: url('/fonts/ManifoldExtendedCF-HeavyOblique.woff2') format('woff2');
		font-style: italic;
		font-weight: 900;
		font-display: swap;
	}

	/* 48px - 96px */
	@font-face {
		font-family: 'forma-djr-display';
		src: url('/fonts/formadjrdisplay-regular-webfont.woff2') format('woff2');
		font-style: normal;
		font-weight: 500;
		font-display: swap;
	}

	@font-face {
		font-family: 'forma-djr-display';
		src: url('/fonts/formadjrdisplay-bold-webfont.woff2') format('woff2');
		font-style: normal;
		font-weight: 700;
		font-display: swap;
	}

	@font-face {
		font-family: 'forma-djr-display';
		src: url('/fonts/formadjrdisplay-italic-webfont.woff2') format('woff2');
		font-style: italic;
		font-weight: 500;
		font-display: swap;
	}

	@font-face {
		font-family: 'forma-djr-display';
		src: url('/fonts/formadjrdisplay-bolditalic-webfont.woff2') format('woff2');
		font-style: italic;
		font-weight: 700;
		font-display: swap;
	}

	/* 19px - 48px */
	@font-face {
		font-family: 'forma-djr-deck';
		src: url('/fonts/formadjrdeck-regular-webfont.woff2') format('woff2');
		font-style: normal;
		font-weight: 500;
		font-display: swap;
	}

	@font-face {
		font-family: 'forma-djr-deck';
		src: url('/fonts/formadjrdeck-bold-webfont.woff2') format('woff2');
		font-style: normal;
		font-weight: 700;
		font-display: swap;
	}

	@font-face {
		font-family: 'forma-djr-deck';
		src: url('/fonts/formadjrdeck-italic-webfont.woff2') format('woff2');
		font-style: italic;
		font-weight: 500;
		font-display: swap;
	}

	@font-face {
		font-family: 'forma-djr-deck';
		src: url('/fonts/formadjrdeck-bolditalic-webfont.woff2') format('woff2');
		font-style: italic;
		font-weight: 700;
		font-display: swap;
	}

	/* 15px - 19px */
	@font-face {
		font-family: 'forma-djr-text';
		src: url('/fonts/formadjrtext-regular-webfont.woff2') format('woff2');
		font-style: normal;
		font-weight: 500;
		font-display: swap;
	}

	@font-face {
		font-family: 'forma-djr-text';
		src: url('/fonts/formadjrtext-bold-webfont.woff2') format('woff2');
		font-style: normal;
		font-weight: 700;
		font-display: swap;
	}

	@font-face {
		font-family: 'forma-djr-text';
		src: url('/fonts/formadjrtext-italic-webfont.woff2') format('woff2');
		font-style: italic;
		font-weight: 500;
		font-display: swap;
	}

	@font-face {
		font-family: 'forma-djr-text';
		src: url('/fonts/formadjrtext-bolditalic-webfont.woff2') format('woff2');
		font-style: italic;
		font-weight: 700;
		font-display: swap;
	}
</style>
