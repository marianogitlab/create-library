"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceReactViteUbundleTemplatePlaceholders = void 0;
var path = require("path");
var fs = require("fs");
var ENCODING = 'utf8';
var tokenReplace = function (template, tokens) {
    var result = template;
    Object.keys(tokens).forEach(function (token) {
        result = result.replace(new RegExp("__".concat(token, "__"), 'g'), tokens[token]);
    });
    return result;
};
/**
 * Rimpiazza i token statici presenti nel template 'ReactViteUbundle'.
 * @param project       Prompt contenente le info del progetto
 * @param projectPath   Percorso del progetto
 */
var replaceReactViteUbundleTemplatePlaceholders = function (project, projectPath) {
    var projectMainPkg = path.join(projectPath, 'package.json');
    var projectDemoPkg = path.join(projectPath, "/demo/package.json");
    var projectLibPkg = path.join(projectPath, "/lib/package.json");
    var projectDemoIndex = path.join(projectPath, "/demo/index.html");
    var projectDemoHomePageIndex = path.join(projectPath, "/demo/src/features/HomePage/index.tsx");
    var projectMainPkgContent = fs.readFileSync(projectMainPkg, ENCODING);
    var projectDemoPkgContent = fs.readFileSync(projectDemoPkg, ENCODING);
    var projectLibPkgContent = fs.readFileSync(projectLibPkg, ENCODING);
    var projectDemoIndexContent = fs.readFileSync(projectDemoIndex, ENCODING);
    var projectDemoHomePageIndexContent = fs.readFileSync(projectDemoHomePageIndex, ENCODING);
    fs.writeFileSync(projectMainPkg, tokenReplace(projectMainPkgContent, { REPLACE: project.__name })); // Configurazione del package.json nella root del template
    fs.writeFileSync(projectDemoPkg, tokenReplace(projectDemoPkgContent, { REPLACE: project.__name })); // Configurazione del package.json nella demo del template
    fs.writeFileSync(projectLibPkg, tokenReplace(projectLibPkgContent, { REPLACE: project.__name })); // Configurazione del package.json nella libreria del template
    fs.writeFileSync(projectDemoIndex, tokenReplace(projectDemoIndexContent, { REPLACE: project.__name })); // Configurazione del index.html nella demo del template
    fs.writeFileSync(projectDemoHomePageIndex, tokenReplace(projectDemoHomePageIndexContent, { REPLACE: project.__name })); // Configurazione del index.html nella demo del template
};
exports.replaceReactViteUbundleTemplatePlaceholders = replaceReactViteUbundleTemplatePlaceholders;
