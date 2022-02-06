<script lang="ts">
	import { scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	let mobileMenu = false;
</script>

<div
	class="relative flex items-center justify-between max-w-screen-xl mx-auto"
>
	<a href="#">
		<img class="h-7" src="static/logo.svg" alt="logo placeholder" />
	</a>
	<nav
		class="absolute left-0 flex-col items-center justify-center hidden w-full p-8 space-y-4 font-semibold bg-gray-200 md:flex md:p-0 md:space-y-0 md:flex-row md:space-x-4 lg:space-x-8 top-16 md:top-0 md:w-auto md:relative md:bg-transparent"
	>
		<a href="#" class="hover:opacity-70">Course</a>
		<a href="#" class="hover:opacity-70">Author</a>
		<a href="#" class="hover:opacity-70">Blog</a>
		<a href="#" class="hover:opacity-70">Contact</a>
	</nav>

	<button class="relative z-30 block p-1 mt-1 text-gray-800 rounded-md w-9 md:hidden" on:click="{ () => mobileMenu = !mobileMenu }" >
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
			<path
				fill-rule="evenodd"
				d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
				clip-rule="evenodd"
			/>
		</svg>
	</button>
	{#if mobileMenu}
	<div
		transition:scale={{ duration: 500, opacity: 0, start: 0.95, easing: quintOut }}
		class="absolute inset-x-0 z-50 w-full py-2 origin-top-right transform top-10 ransition md:hidden"
	>
		<nav class="p-3 transform bg-white rounded-lg shadow-lg">
			<a href="#" class="block px-6 py-3 font-semibold border-b hover:opacity-70 border-blue-50"
				>Course</a
			>
			<a href="#" class="block px-6 py-3 font-semibold border-b hover:opacity-70 border-blue-50"
				>Author</a
			>
			<a href="#" class="block px-6 py-3 font-semibold border-b hover:opacity-70 border-blue-50"
				>Blog</a
			>
			<a href="#" class="block px-6 py-3 font-semibold border-b hover:opacity-70 border-blue-50"
				>Contact</a
			>
		</nav>
	</div>
	{/if}
</div>
