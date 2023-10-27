import * as path from 'path';
import * as fs from 'fs';
import { ProfilePromptGroupAwaitedReturn } from '../types/inde';

const ENCODING = 'utf8';

const tokenReplace = (template: string, tokens: Record<string, string>) => {
    let result = template;
    Object.keys(tokens).forEach(token => {
        result = result.replace(new RegExp(`__${token}__`, 'g'), tokens[token]);
    });
    return result;
}

/**
 * Rimpiazza i token statici presenti nel template 'ReactViteUbundle'.
 * @param project       Prompt contenente le info del progetto 
 * @param projectPath   Percorso del progetto 
 */
export const replaceReactViteUbundleTemplatePlaceholders = (project: ProfilePromptGroupAwaitedReturn, projectPath: string) => {

    const projectMainPkg = path.join(projectPath, 'package.json');
    const projectDemoPkg = path.join(projectPath, `/demo/package.json`);
    const projectLibPkg = path.join(projectPath, `/lib/package.json`);
    const projectDemoIndex = path.join(projectPath, `/demo/index.html`);
    const projectDemoHomePageIndex = path.join(projectPath, `/demo/src/features/HomePage/index.tsx`);

    const projectMainPkgContent = fs.readFileSync(projectMainPkg, ENCODING);
    const projectDemoPkgContent = fs.readFileSync(projectDemoPkg, ENCODING);
    const projectLibPkgContent = fs.readFileSync(projectLibPkg, ENCODING);
    const projectDemoIndexContent = fs.readFileSync(projectDemoIndex, ENCODING);
    const projectDemoHomePageIndexContent = fs.readFileSync(projectDemoHomePageIndex, ENCODING);

    fs.writeFileSync(projectMainPkg, tokenReplace(projectMainPkgContent, { REPLACE: project.__name })); // Configurazione del package.json nella root del template
    fs.writeFileSync(projectDemoPkg, tokenReplace(projectDemoPkgContent, { REPLACE: project.__name })); // Configurazione del package.json nella demo del template
    fs.writeFileSync(projectLibPkg, tokenReplace(projectLibPkgContent, { REPLACE: project.__name }));   // Configurazione del package.json nella libreria del template
    fs.writeFileSync(projectDemoIndex, tokenReplace(projectDemoIndexContent, { REPLACE: project.__name })); // Configurazione del index.html nella demo del template
    fs.writeFileSync(projectDemoHomePageIndex, tokenReplace(projectDemoHomePageIndexContent, { REPLACE: project.__name })); // Configurazione del index.html nella demo del template
};
