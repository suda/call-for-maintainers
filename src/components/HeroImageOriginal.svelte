<script>
	import HeroCheck from './HeroCheck.svelte';
</script>

<div class="max-w-4xl mx-auto mt-12 lg:mt-16">
	<img
		src="../../images/course/docusign-BbSBf5uv50A-unsplash.jpg"
		alt="image placeholder"
		class="rounded-lg shadow-lg"
	/>

	<div
		class="max-w-2xl mx-auto overflow-hidden transform -translate-y-6 bg-white rounded-lg shadow-lg lg:-translate-y-12"
	>
		<div class="p-8 bg-white">
			<h2 class="mb-4 text-xl font-medium text-gray-800 sm:text-2xl lg:text-3xl">
				Join 300 other people
			</h2>
			<p class="text-lg text-gray-700 lg:text-xl lg:leading-relaxed">
				Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam
				ultricies nisi vel augue.
			</p>
			<form class="flex flex-row mt-6 space-x-2 lg:mt-8">
				<input
					type="text"
					placeholder="enter email address"
					class="flex-1 px-4 py-2 bg-white border border-gray-300 rounded-lg"
				/>
				<button
					class="inline-block px-5 py-4 font-semibold text-yellow-800 bg-yellow-400 rounded-lg lg:px-8 "
					>Start learning</button
				>
			</form>
		</div>
		<div class="p-8 bg-gray-50">
			<ul class="space-y-2">
				<HeroCheck>One morning, when Gregor Samsa woke from troubled dreams, he himself.</HeroCheck>
				<HeroCheck
					>Doing business like this takes much more effort the curse of travelling.</HeroCheck
				>
				<HeroCheck>He must have tried it a hundred times, legs, and only stopped when.</HeroCheck>
			</ul>
		</div>
	</div>
</div>
