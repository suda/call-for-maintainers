<script>
	import HeroStep from './HeroStep.svelte';
	import HeroStepArrow from './HeroStepArrow.svelte';
</script>

<div
	class="flex items-center justify-center max-w-4xl mx-auto mt-16 space-x-2 text-left md:text-center lg:mt-20 md:space-x-6"
>
	<HeroStep>
		<svelte:fragment slot="icon">
			<path d="M12 14l9-5-9-5-9 5 9 5z" />
			<path
				d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
			/>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
			/>
		</svelte:fragment>
		<span slot="text">HTML</span>
	</HeroStep>
	<HeroStepArrow />
	<HeroStep>
		<svelte:fragment slot="icon">
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
			/>
		</svelte:fragment>
		<span slot="text">CSS</span>
	</HeroStep>
	<HeroStepArrow />
	<HeroStep>
		<svelte:fragment slot="icon">
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
			/>
		</svelte:fragment>
		<span slot="text">Tailwind CSS</span>
	</HeroStep>
</div>
