import * as fs from 'fs';

export const copyTemplate = (projectPath: string, templateName: string) => {
    try {
        fs.cpSync(`${__dirname}${templateName}`, projectPath, { recursive: true });
    } catch (err) {
        console.error(err)
    }
}