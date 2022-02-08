<script>
	import Navigation from '../components/Navigation.svelte';
	import Footer from '../components/Footer.svelte';
	import '../app.css';
</script>

<svelte:head>
	<title>Call for Maintainers</title>
</svelte:head>

<article class="bg-white">
	<header class="relative px-6 pt-8 pb-20 text-gray-800 bg-cover bg-blue-50 lg:px-12 lg:pb-24"  style="min-height: calc(100vh - 15rem)">
		<div class="relative z-10">
			<Navigation />

			<slot />
		</div>
	</header>
	<Footer />
</article>
