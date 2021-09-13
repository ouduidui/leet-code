const execa = require('execa');
const inquirer = require('inquirer');

inquirer.prompt([
    {
        type: "input",
        name: "project",
        message: "请输入算法题目",
        default: "two sum"
    }
]).then(({project}) => {
    execa('jest', [
        `src/${getProjectName(project)}/index.spec.ts`,
        '--coverage'
    ]).then(result => {
        console.log(result.stdout);
    }).catch(err => console.log(err));
})

const getProjectName = (en) => {
    return en.toLowerCase().split(' ').join('-');
}
