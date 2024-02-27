<script>
	// FIXME: FOUC, namely the font loading
	import { onMount } from 'svelte' // goes away in Svelte 5?
	import { gsap } from 'gsap' // greensocks
	import Hamburger from '$components/Hamburger.svelte'
	import Header from '$components/Header.svelte'
	import Works from '$components/Works.svelte'
	import Footer from '$components/Footer.svelte'
	import Spacer from '$components/Spacer.svelte'
	import { numVisits } from '$stores/localStorage.js'
	import data from '$lib/assets/works.json' //in lieu of reading data in - this is the data driven part 8)
	import { group } from 'd3' // used to group data based upon the 'type' of card
	let open = false

	// Update number of user visits
	$numVisits += 1 //  browser persistent local storage

	// FIXME: Can this be done elsewhere for optimization?
	// Process data
	const groupedData = group(data, (d) => d.type) // aggregate based upon the 'type' of card
	onMount(() => {
		// after the DOM loads, animate the cards once. Love greensock.
		// To do: animate as user scrolls down the page using gsap's ScrollTrigger
		runAnimations()
	})

	function runAnimations() {
		const textDuration = 0.6

		gsap.set('.img-wrapper', { transformPerspective: 250 }) // set the perspective and then ease it back flat

		const tl = gsap.timeline() // create animation timeline

		tl.to('.cloud-container', {
			duration: 20,
			x: '-100vw',
			delay: 5,
			ease: 'none',
			repeat: -1
		})
		if ($numVisits > 1) {
			// $numVisits once again is persistent local storage
			tl.from('body', { autoAlpha: 0 }).add('content')
			console.log('number of visits is greater than 1')
		} else {
			tl.from('body', { autoAlpha: 0 })
				.from('h1', { opacity: 0, duration: 1 })
				//
				.add('a', '-=0.5')
				.from('#data stories', { opacity: 0, duration: textDuration }, 'a')
				.from('#interactive', { opacity: 0, duration: textDuration }, 'a+=0.05')
				//
				.add('b')
				.from('#viz', { opacity: 0, duration: textDuration }, 'b')
				.from('#explorables', { opacity: 0, duration: textDuration }, 'b+=0.05')
				//
				.add('content')
				.from('#socials', { opacity: 0 }, 'content')
				.from('#grid-pattern', { opacity: 0 }, 'content')
				.from('#gradient', { opacity: 0 }, 'content')
				.from('.works', { opacity: 0 }, 'content')
		}
		// there are two steps to add a new section: 1) add to the types array
		const types = ['stories', 'viz', 'miscellanea', 'papers', 'billweek'] // these are the sections for the cards as specified in the works.csv file
		types.forEach((type) => {
			tl.from(`#${type} .card-wrapper`, { opacity: 0, stagger: 0.3 }, 'content').from(
				`#${type} .img-wrapper`,
				{
					opacity: 0,
					rotateY: '30deg',
					duration: 0.5,
					stagger: 0.2,
					clearProps: 'transform'
				},
				'content'
			)
		})
	}
</script>

<!-- <BodyTexture /> -->
<div class="wrapper">
	<Header />

	<main>
		<!-- there are two steps to add a new section: this is 2) add a new <Works /> <Spacer /> unit
			As content grows, we will need to be aware of performance issues as there are a lot of images being loaded
		 -->

		<Spacer />

		<Works type={'data stories'} id={'stories'} data={groupedData.get('stories')} />
		<Spacer />
		<Works type={'data visualizations'} id={'viz'} data={groupedData.get('viz')} />
		<Spacer />
		<Works type={'miscellanea'} id={'miscellanea'} data={groupedData.get('miscellanea')} />
		<Spacer />
		<Works type={'technical papers'} id={'papers'} data={groupedData.get('papers')} />
		<Spacer />
		<Works type={'Bill Week'} id={'billweek'} data={groupedData.get('billweek')} />
		<Spacer />
	</main>
	<Footer />
</div>
<Hamburger bind:open />

<style>
	.wrapper {
		min-height: 100%;
		display: flex;
		flex-direction: column;
	}
</style>
