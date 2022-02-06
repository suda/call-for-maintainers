<script>
	import Navigation from '../components/Navigation.svelte';
	import HeroText from '../components/HeroText.svelte';
	import HeroSteps from '../components/HeroSteps.svelte';
    import HeroImage from '../components/HeroImage.svelte';
	import Reviews from '../components/Reviews.svelte';
	import Trial from '../components/Trial.svelte';
    import Teacher from '../components/Teacher.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<article class="bg-white">
	<header class="relative px-6 pt-8 pb-20 text-gray-800 bg-cover bg-blue-50 lg:px-12 lg:pb-24">
		<div class="relative z-10">
			<Navigation />

			<HeroText />
			<HeroSteps />
			<HeroImage />
		</div>
	</header>

	<Reviews />
	<Trial />
	<Teacher />

	<Footer />
</article>
