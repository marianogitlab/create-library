#!/usr/bin/env node
import * as p from '@clack/prompts';
import * as color from 'picocolors';
import * as path from 'path';
import { promptUserProject } from '../prompts/promptUserProject';
import { copyTemplate } from '../utils/copyTemplate';
import { replaceReactViteUbundleTemplatePlaceholders } from '../utils/detokenize';

async function main() {

    console.clear();

    const spinner = p.spinner();
    const currentPath = process.cwd();

    p.intro(`${color.cyan(' virtuallab-create-library ')}`);

    const project = await promptUserProject();                  // Prompt per ottenere le informazioni del progetto
    const projectPath = path.join(currentPath, project.__name);

    spinner.start('Creating Library Template');

    copyTemplate(projectPath, '\\..\\vite-react-ubundle');      // Esecuzione dei comandi per copiare il template

    spinner.stop(`Created ${project.__name} structure`);

    spinner.start('Finalization');

    replaceReactViteUbundleTemplatePlaceholders(project, projectPath);            // Esecuzione dei comandi per rimpiazzare i 'token' presenti nel template

    spinner.stop(``);

    let nextSteps = color.white(`
Here are the details of your project:
${color.green('Project Name:')} ${project.__name}

Follow the next steps to get started:

> ${color.cyan(`From the root folder`)}
    Run the following command:
    yarn run dev
`);

    p.outro(nextSteps);
}

main().catch(console.error);
