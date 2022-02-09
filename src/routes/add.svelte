<script lang="ts">
	import HeroCheck from '../components/HeroCheck.svelte';

	// Dracula colors
	const colors = {
		background: '#282A36',
		foreground: '#F8F8F2',
		selection: '#44475A',
		comment: '#6272A4',
		red: '#FF5555',
		orange: '#FFB86C',
		yellow: '#F1FA8C',
		green: '#50FA7B',
		purple: '#BD93F9',
		cyan: '#8BE9FD',
		pink: '#FF79C6'
	};
</script>

<div class="max-w-4xl mx-auto mt-12 lg:mt-16">
	<div
		class="rounded-lg shadow-lg py-4 px-4 text-white text-xl"
		style:background-color={colors['background']}
	>
		<code>
			<pre class="overflow-x-auto">
<span style:color={colors['comment']}># Clone your fork locally</span>
<span style:color={colors['red']}>git</span> <span style:color={colors['cyan']}>clone</span> <span
					style:color={colors['yellow']}>"git@github.com:YOUR_NAME/call-for-maintainers.git"</span
				>
<span style:color={colors['comment']}># Install dependencies</span>
<span style:color={colors['red']}>cd</span> call-for-maintainers
<span style:color={colors['red']}>npm</span> <span style:color={colors['cyan']}>install</span>
<span style:color={colors['comment']}># Run the script that fetches your repo</span>
<span style:color={colors['orange']}>./scripts/fetch-repo.js</span> OWNER/REPO
<span style:color={colors['comment']}># If you have a PR with details about becoming maintainer</span>
<span style:color={colors['comment']}># set it in the "moreLink" property in the JSON file</span>
<span style:color={colors['red']}>vi</span> src/projects/OWNER/REPO.json
<span style:color={colors['comment']}># Run the script that generates the index</span>
<span style:color={colors['orange']}>./scripts/build-index.js</span>
<span style:color={colors['comment']}># Commit your changes</span>
<span style:color={colors['red']}>git</span> <span style:color={colors['cyan']}>add</span> -a .
<span style:color={colors['red']}>git</span> <span style:color={colors['cyan']}>commit</span
				> -m <span style:color={colors['yellow']}>"Added OWNER/REPO"</span>
<span style:color={colors['comment']}># Push your changes and create a PR</span>
<span style:color={colors['red']}>git</span> <span style:color={colors['cyan']}>push</span>
			</pre>
		</code>
	</div>

	<div
		class="max-w-2xl mx-auto overflow-hidden transform -translate-y-3 bg-white rounded-lg shadow-lg lg:-translate-y-6"
	>
		<div class="p-8 bg-white">
			<h2 class="mb-4 text-xl font-medium text-gray-800 sm:text-2xl lg:text-3xl">
				Add your project to the list
			</h2>
			<p class="text-lg text-gray-700 lg:text-xl lg:leading-relaxed">
				All projects are kept in the same repository as this website as JSON files. There are some
				scripts to make your life easier and following the instructions above should do the trick.
			</p>
			<a
				href="https://github.com/suda/call-for-maintainers/fork"
				target="_blank"
				class="inline-block w-full mt-6 space-x-2 px-5 py-4 font-semibold text-yellow-800 bg-yellow-400 rounded-lg lg:mt-8 lg:px-8"
				>🆕 Fork this repository</a
			>
		</div>
		<div class="p-8 bg-gray-50">
			<ul class="space-y-2">
				<HeroCheck
					>Make sure you have a working Node.js environment with at least Node.js 14</HeroCheck
				>
			</ul>
		</div>
	</div>
</div>
