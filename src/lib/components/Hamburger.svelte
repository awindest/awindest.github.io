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
	import Slidebar from "$components/Slidebar.svelte";

	export let open = false;
</script>

<!-- create a button from three svg lines -->
<button class="hamburger" class:open on:click={() => (open = !open)}>
	<svg width="32" height="32">
		<line id="top" x1="2" y1="2" x2="30" y2="2" stroke-linecap="round" />
		<line id="middle" x1="2" y1="12" x2="30" y2="12" stroke-linecap="round" />
		<line id="bottom" x1="2" y1="22" x2="30" y2="22" stroke-linecap="round" />
	</svg>
</button>
<Slidebar {open} />

<style>
	/* Hamburger Menu icon */

	.hamburger {
		position: fixed;
		top: 0;
		right: 0; /* 10%;*/
		display: inline-block;
		cursor: pointer;
		padding: 1em;
		outline-style: none;
		color: var(--color-sky-blue);
	}
	/* svg line:hover { */
	.hamburger:hover {
		color: #ffffff;
	}
	svg {
		min-height: 32px;
		transition: transform 0.3s ease-in-out;
	}

	svg line {
		stroke: currentColor;
		stroke-width: 3;
		stroke-linecap: "round";
		transition: transform 0.3s ease-in-out;
	}

	button {
		z-index: 20;
		border: none;
		background-color: transparent;
	}

	.open svg {
		transform: scale(0.7);
	}

	.open #top {
		transform: translate(6px, 0px) rotate(45deg);
	}

	.open #middle {
		opacity: 0;
	}

	.open #bottom {
		transform: translate(-12px, 9px) rotate(-45deg);
	}
</style>
