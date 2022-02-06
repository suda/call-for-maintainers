<div
	class="flex flex-col items-center justify-center w-48 px-2 py-4 bg-white rounded-lg shadow-lg md:p-6"
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="w-10 h-10 mb-2 text-blue-500"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
	>
        <slot name="icon" />
	</svg>
	<span class="font-semibold"><slot name="text" /></span>
</div>
