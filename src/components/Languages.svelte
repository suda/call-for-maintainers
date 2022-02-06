<script lang="ts">
	import colors from '../language-colors.json';
	export let languages: { [key: string]: number };
</script>

<div class="flex flex-wrap">
	{#each Object.keys(languages) as language}
		<span class="mb-2 mr-5">
			<span class="w-3 h-3 rounded-full inline-block" style:background-color={colors[language]} />
			<strong>{language}</strong>
			<span class="text-gray-600">{languages[language].toFixed(1)}%</span>
		</span>
	{/each}
</div>
