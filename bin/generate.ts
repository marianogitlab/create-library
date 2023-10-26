#!/usr/bin/env node
import * as p from '@clack/prompts';
import * as color from 'picocolors';
import * as path from 'path';
import { spawn } from 'child_process';
import { PromptGroupAwaitedReturn } from "@clack/prompts";
import * as fs from 'fs';

export type ProfilePromptGroupAwaitedReturn = PromptGroupAwaitedReturn<{
    __name: string;
}>;

/**
 * Esegue una serie di comandi tramite il modulo child_process di Node.js.
 * @param {string[]} commands - Array dei comandi da eseguire.
 * @param {function} success - Callback chiamata quando l'esecuzione dei comandi è completata con successo.
 * @returns {ChildProcess} - L'istanza ChildProcess risultante dalla chiamata spawn().
 */
export const executeCommands = async (commands: string[], success: () => void) => {
    /**
     * @typedef {import('child_process').ChildProcess} ChildProcess
     */
    return await spawn(commands.join(' && '), { shell: true })
        .on('exit', () => {
            success();
        })
        .on('error', (err) => {
            console.log(err);
            process.exit(1);
        });
}

/**
 * Richiedi le informazioni per creare un nuovo progetto
 * @returns {Promise} Promise con le informazioni del progetto
 */
export const promptUserProject = async () => {

    console.clear();
    p.intro(`${color.bgCyan(color.black(' Create App '))}`);

    /**
     * Richiedi il nome del progetto
     */
    const __name = () =>
        p.text({
            message: 'Provide a name for your project',
            initialValue: 'AppDemo1',
            validate: (value) => {
                if (!value) return 'Please enter a name.';
            },
        });

    const project = await p.group(
        {
            __name
        },
        {
            onCancel: () => {
                p.cancel('Operation cancelled.');
                process.exit(0);
            },
        }
    );

    return project;
}

const copyTemplate = (projectPath: string) => {

    try {
        const templatePath = __dirname + '\\..\\vite-react-ubundle';
        
        fs.cpSync(templatePath, projectPath, {
            recursive: true,
        })
        console.log('success!')
    } catch (err) {
        console.error(err)
    }
}

async function main() {

    console.clear();
    p.intro(`${color.cyan(' create-rvnet-app ')}`);

    // Prompt per ottenere le informazioni del progetto
    const project = await promptUserProject();
    const currentPath = process.cwd();
    const spinner = p.spinner();
    const projectPath = path.join(currentPath, project.__name);

    spinner.start('Creating React Project (this may take some time)');

    // Esecuzione dei comandi per creare il progetto AspNetCore MVC
    copyTemplate(currentPath);

    spinner.stop(`Created ${project.__name}`);

}

main().catch(console.error);