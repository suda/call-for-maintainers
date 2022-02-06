<script lang="ts">
import Languages from "./Languages.svelte";
import Tags from "./Tags.svelte";

	export let owner: string;
	export let name: string;
	export let contributors: number;
	export let issues: number;
	export let stars: number;
	export let forks: number;
	export let languages: { [key: string]: number };
	export let tags: [string];
	export let moreLink: string;
</script>

<div class="max-w-4xl mx-auto mt-12 lg:mt-16">
	<img
		src={`https://opengraph.githubassets.com/callformaintainers/${owner}/${name}`}
		alt={`${owner}/${name}`}
		class="rounded-t-lg shadow-lg"
	/>

	<div class="max-w-4xl mx-auto overflow-hidden bg-white rounded-b-lg shadow-lg">
		<div class="p-6 md:p-8 bg-gray-50 flex justify-between flex-col md:flex-row">
			<div>
				<Languages languages={languages} />
				<Tags tags={tags} />
			</div>
			<div class="flex-shrink-0 self-end mt-5 md:mt-0">
				<a
					href={moreLink}
					target="_blank"
					class="inline-block px-5 py-4 font-semibold text-yellow-800 bg-yellow-400 rounded-lg lg:px-8"
					>More details</a
				>
			</div>
		</div>
	</div>
</div>
