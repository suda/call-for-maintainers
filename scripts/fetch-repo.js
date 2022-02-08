#!/usr/bin/env node

import { writeFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import meow from 'meow';
import { Octokit } from "@octokit/rest";
import mkdirp from 'mkdirp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projects = path.resolve(__dirname, '..', 'src', 'projects');

const cli = meow(`
	Usage
	  $ fetch-repo.js <owner>/<repo>

	Examples
      $ fetch-repo.js suda/dvsync
`, {
	importMeta: import.meta
});
const octokit = new Octokit();

async function getRepoLanguages({owner, repo}) {
	let languages = await octokit.rest.repos.listLanguages({owner, repo});
	languages = languages.data;
	const total = Object.values(languages).reduce((previous, current) => previous + current, 0);
	const calculatedLanguages = {};
	for (const key of Object.keys(languages)) {
		calculatedLanguages[key] = (languages[key] / total * 100);
	}
	return calculatedLanguages;
}

async function saveRepository(repository) {
	const owner = repository.owner.login;
	const name = repository.name;
	const project = {
		owner,
		name,
		issues: repository.open_issues_count,
		stars: repository.stargazers_count,
		forks: repository.forks_count,
		languages: await getRepoLanguages({owner, repo: name}),
		tags: repository.topics,
		moreLink: repository.html_url
	}
	const projectPath = path.resolve(projects, owner);
	const projectFile = path.resolve(projectPath, `${name}.json`);
	await mkdirp(projectPath);
	await writeFile(
		projectFile,
		JSON.stringify(project, undefined, 4)
	);
	console.log(`\n🎉 Success! Wrote the repo to ${projectFile}\n`);
	console.log(`💡 Is there a specific Github issue calling for maintainers? If so, please update the "moreLink" property in the generated JSON file.`);
	console.log(`💡 Don't forget to build the index (./scripts/build-index.js) now!`);
}

async function main() {
	if (cli.input.length !== 1) {
		console.log('🤷 Please provide a single repo to fetch');
		return cli.showHelp();
	}

	const input = cli.input[0];
	if (input.split('/').length !== 2) {
		console.log('🤔 Invalid repo format');
		return cli.showHelp();
	}
	const [owner, repo] = input.split('/');

	try {
		const repository = await octokit.rest.repos.get({owner, repo});
		await saveRepository(repository.data);
	} catch (error) {
		console.log('💔 Failed to fetch the repo:', error.toString());
	}
}

await main();
