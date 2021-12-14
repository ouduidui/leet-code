const fs = require('fs');
const path = require('path');
const {log} = require('./log')

const update = ({cn, en, difficulty, url}) => {
    en = initEn(en);
    const projectPath = getProjectName(en);
    if (createProject(projectPath)) {
        fs.writeFileSync(`problemset/${projectPath}/index.ts`, `function ${getFunctionName(en)}() {}`);
        fs.writeFileSync(`problemset/${projectPath}/README.md`, generateProblemMarkdown({cn, difficulty, url}));
        fs.writeFileSync(`problemset/${projectPath}/index.spec.ts`, `describe('${cn}', () => {});`)
        updateReadMeMarkdown({cn, projectPath})
    }
}

const createProject = (name) => {
    if (checkHasPath(`problemset/${name}`)) {
        log('已存在该路径', 'red');
        return;
    }
    fs.mkdirSync(`problemset/${name}`);
    return true;

}

const updateReadMeMarkdown = ({cn, projectPath}) => {
    const count = fs.readdirSync('problemset').length - 1;

    let md = fs.readFileSync(getPath('problemset/README.md'), {encoding: 'utf-8'});
    md += `\r\n${count}. [${cn}](./${projectPath}/README.md)`
    fs.writeFileSync(getPath('problemset/README.md'), md)
}

const initEn = (en) => {
    return en.split('-').join(' ');
}


const getProjectName = (en) => {
    return en.toLowerCase().split(' ').join('-');
}

const getFunctionName = (en) => {
    const arr = en.split(' ');
    return arr.reduce((acc, cur, idx) => {
        return idx ?
            acc += cur.slice(0, 1).toUpperCase() + cur.slice(1).toLowerCase() :
            acc += cur.toLowerCase()
    }, '')
}

const getPath = (p) => {
    return path.resolve(path.resolve(__dirname, '../../'), p)
}

const checkHasPath = (path) => {
    try {
        fs.accessSync(getPath(path), fs.constants.F_OK);
        return true;
    } catch (err) {
        return false;
    }
}

const generateProblemMarkdown = ({cn, difficulty, url}) => {
    return `# ${cn}\r\n\r\n> 难度：${difficulty}\r\n>\r\n> ${url}\r\n\r\n ## 题目`;
}

module.exports = update;
