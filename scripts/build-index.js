#!/usr/bin/env node

import { readdir, lstat, writeFile } from 'fs/promises';
import path from 'path';

const projects = path.resolve('src', 'projects');
let ownerCount = 0;
let projectCount = 0;

async function indexOwner(ownerPath) {
    const ownerProjects = await readdir(ownerPath);
    const importedProjects = [];
    let index = `// FILE AUTOMATICALLY GENERATED. DO NOT MODIFY\n`;
    for (const project of ownerProjects) {
        if (project.endsWith('.json')) {
            const projectName = project.replace('.json', '');
            index += `import ${projectName} from './${projectName}.json';\n`
            importedProjects.push(projectName);
            projectCount++;
        }
    }
    index += `\nexport default [${importedProjects.join(',')}];`
    await writeFile(path.resolve(ownerPath, 'index.ts'), index);
};

const owners = await readdir(projects);
const importedOwners = [];
let index = `// FILE AUTOMATICALLY GENERATED. DO NOT MODIFY\n`;
for (const owner of owners) {
    const ownerPath = path.resolve(projects, owner);
    if ((await lstat(ownerPath)).isDirectory()) {
        await indexOwner(ownerPath);
        index += `import ${owner} from './${owner}';\n`
        importedOwners.push(owner);
        ownerCount++;
    }
}
index += `\nexport default []
${importedOwners.map((o) => `\t.concat(${o})\n`).join('')};`
await writeFile(path.resolve(projects, 'index.ts'), index);

console.log(`🎉 Indexed ${projectCount} projects from ${ownerCount} owners!`);