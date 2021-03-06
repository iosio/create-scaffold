const fse = require("fs-extra");
const path = require("path");
const glob = require('tiny-glob/sync');
const {series} = require("asyncro");
const inquirer = require("inquirer");

const {cyan, green} = require('kleur');


const createProject = async (options) => {

    const {template, packageName, name} = options;

    console.log(cyan('Scaffolding project...'));

    const cwd = process.cwd();

    const fromHere = path.resolve(cwd, __dirname);

    await fse.copy(path.join(fromHere, `templates/common/`), cwd);

    await fse.copy(path.join(fromHere, `templates/${template}/`), cwd);

    const parts = glob(`template_parts/${template}/**`, {cwd: fromHere});

    const commonParts = glob(`template_parts/common/**`, {cwd: fromHere});

    parts.concat(commonParts);

    await series(parts.map((part) => async () => {
        const filePart = require(path.join(fromHere, part));
        const {file, content} = await filePart(options);
        return await fse.writeFile(path.join(cwd, file), content);
    }));

    console.log('Project Ready ' + green().bold('DONE'));

};


module.exports = async () => {

    const questions = [];


    questions.push({
        type: 'input',
        name: 'name',
        message: 'Enter package name...',
        default: '@scope/my_project',
    });

    questions.push({
        type: 'list',
        name: 'template',
        message: 'Please choose which project template to use',
        choices: ['app', 'lib'],
        default: 'app',
    });

    const {name, template} = await inquirer.prompt(questions);

    await createProject({
        packageName: name,
        template
    });


};