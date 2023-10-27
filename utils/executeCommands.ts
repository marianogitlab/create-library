import { spawn } from "child_process";

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
