<script>
	import Project from '../components/Project.svelte';
	import projects from '../projects/index';

	const sortedProjects = projects.sort((a, b) => b.stars - a.stars);
</script>

{#each sortedProjects as project}
	<Project {...project} />
{/each}
