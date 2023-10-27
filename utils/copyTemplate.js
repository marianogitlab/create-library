"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.copyTemplate = void 0;
var fs = require("fs");
var copyTemplate = function (projectPath, templateName) {
    try {
        fs.cpSync("".concat(__dirname).concat(templateName), projectPath, { recursive: true });
    }
    catch (err) {
        console.error(err);
    }
};
exports.copyTemplate = copyTemplate;
