<script lang="ts">
	export let tags: [string];
</script>

<div class="flex flex-wrap mt-5">
	{#each tags as tag}
		<span class="px-2 py-1 text-sm mb-2 mr-2 md:px-3 md:py-2 md:text-base rounded-full text-blue-400 bg-blue-100">{tag}</span>
	{/each}
</div>
