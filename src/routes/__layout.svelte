<script>
	import { afterUpdate, beforeUpdate } from 'svelte';
	import { useAckeeSapper } from 'svelte-ackee';
	import Navigation from '../components/Navigation.svelte';
	import Footer from '../components/Footer.svelte';
	import '../app.css';

	// Initialize Ackee only in the browser
	if (typeof navigator !== 'undefined') {
    useAckeeSapper(
      beforeUpdate,
      afterUpdate,
      {
        server: import.meta.env.VITE_ACKEE_SERVER,
        domainId: import.meta.env.VITE_ACKEE_DOMAIN_ID,
      },
      {
        ignoreLocalhost: false,
        detailed: true,
      }
    );
  }
</script>

<svelte:head>
	<title>Call for Maintainers</title>
</svelte:head>

<article class="bg-white">
	<header class="relative px-6 pt-8 pb-20 text-gray-800 bg-cover bg-blue-50 lg:px-12 lg:pb-22 xl:pb-22"  style="min-height: calc(100vh - 13.5rem)">
		<div class="relative z-10">
			<Navigation />

			<slot />
		</div>
	</header>
	<Footer />
</article>
