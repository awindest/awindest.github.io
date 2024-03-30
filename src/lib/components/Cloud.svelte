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
	// all CSS, baby!
</script>

<div class="cloud-container">
	<div class="cloud" id="cloud-base" />
	<div class="cloud" id="cloud-back" />
	<div class="cloud" id="cloud-mid" />
	<div class="cloud" id="cloud-front" />
	<svg width="0" height="0">
		<!--Top Layer-->
		<filter id="filter-base">
			<feTurbulence type="fractalNoise" baseFrequency="0.011" numOctaves="5" seed="8517" />
			<feDisplacementMap in="SourceGraphic" scale="120" />
		</filter>
		<filter id="filter-back">
			<feTurbulence type="fractalNoise" baseFrequency="0.011" numOctaves="3" seed="8517" />
			<feDisplacementMap in="SourceGraphic" scale="120" />
		</filter>
		<filter id="filter-mid">
			<feTurbulence type="fractalNoise" baseFrequency="0.011" numOctaves="3" seed="8517" />
			<feDisplacementMap in="SourceGraphic" scale="120" />
		</filter>
		<filter id="filter-front">
			<feTurbulence type="fractalNoise" baseFrequency="0.009" numOctaves="4" seed="8517" />
			<feDisplacementMap in="SourceGraphic" scale="50" />
		</filter>
	</svg>
</div>

<style>
	.cloud-container {
		position: absolute;
		transform: translate(-3vw, 2vw) scale(0.45);
		-moz-animation: animateCloud 60s linear infinite;
		-webkit-animation: animateCloud 60s linear infinite;
		animation: animateCloud 60s linear infinite;
	}

	.cloud {
		width: 600px;
		height: 100px;
		border-radius: 50%;
		position: absolute;
		top: -100px;
		left: -100px;
	}

	#cloud-base {
		top: 10px;
		height: 100px;
		filter: url(#filter-base);
		box-shadow: 200px 170px 19px 40px rgba(255, 255, 255, 0.9);
	}

	#cloud-back {
		top: 10px; /* 90 */
		width: 500px;
		height: 30px;
		filter: url(#filter-back);
		box-shadow: 200px 200px 10px 40px rgba(215, 215, 215, 0.3);
	}

	#cloud-mid {
		top: 5px; /* 80 */
		width: 580px;
		height: 35px;
		filter: url(#filter-mid);
		box-shadow: 210px 250px 28px 30px rgba(66, 105, 146, 0.2);
	}

	#cloud-front {
		top: 0px; /* 70 */
		width: 450px;
		height: 40px;
		left: -20px;
		filter: url(#filter-front);
		box-shadow: 210px 272px 30px 0px rgba(0, 0, 0, 0.4);
	}

	/* Keyframes */

	@-webkit-keyframes animateCloud {
		0% {
			margin-left: -130%;
		}
		100% {
			margin-left: 130%;
		}
	}

	@-moz-keyframes animateCloud {
		0% {
			margin-left: -130%;
		}
		100% {
			margin-left: 130%;
		}
	}

	@keyframes animateCloud {
		0% {
			margin-left: -130%;
		}
		100% {
			margin-left: 130%;
		}
	}
</style>
