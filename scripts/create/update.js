const fs = require('fs');
const path = require('path');
const { log } = require('../utils/log');

const update = ({ cn, en, difficulty, url, id }) => {
  en = initEn(en);
  const projectPath = getProjectName(en);
  if (createProject(projectPath)) {
    fs.writeFileSync(
      `problemset/${projectPath}/index.ts`,
      `function ${getFunctionName(en)}() {}`
    );
    fs.writeFileSync(
      `problemset/${projectPath}/README.md`,
      generateProblemMarkdown({ cn, difficulty, url })
    );
    fs.writeFileSync(
      `problemset/${projectPath}/index.spec.ts`,
      `describe('${cn}', () => {});`
    );
    const problems = updateDataJson({ cn, en, difficulty, url, id });
    updateReadMeMarkdown(problems);
  }
};

const createProject = (name) => {
  if (checkHasPath(`problemset/${name}`)) {
    log('已存在该路径', 'red');
    return;
  }
  fs.mkdirSync(`problemset/${name}`);
  return true;
};

const updateReadMeMarkdown = (problems) => {
  let md = `# 题库目录\r\n`;

  problems.forEach((problem) => {
    md += `\r\n${problem.id}. [${problem.title.cn}](../../problemset/${problem.title.en}/README.md)`;
  });
  const problemMarkdownPath = './assets/docs/PROBLEMS.md';
  fs.writeFileSync(getPath(problemMarkdownPath), md);
};

const updateDataJson = ({ cn, en, difficulty, url, id }) => {
  const data = fs.readFileSync('./assets/data/problems.json', 'utf-8');
  const arr = JSON.parse(data);
  arr.push({
    id: Number(id),
    title: {
      cn,
      en
    },
    difficulty,
    url,
    path: `../../problemset/${en}/README.md`
  });
  arr.sort((a, b) => a.id - b.id);

  fs.writeFileSync('./assets/data/problems.json', JSON.stringify(arr, null, 2));

  return arr;
};

const initEn = (en) => {
  return en.split('-').join(' ');
};

const getProjectName = (en) => {
  return en.toLowerCase().split(' ').join('-');
};

const getFunctionName = (en) => {
  const arr = en.split(' ');
  return arr.reduce((acc, cur, idx) => {
    return idx
      ? (acc += cur.slice(0, 1).toUpperCase() + cur.slice(1).toLowerCase())
      : (acc += cur.toLowerCase());
  }, '');
};

const getPath = (p) => {
  return path.resolve(path.resolve(__dirname, '../../'), p);
};

const checkHasPath = (path) => {
  try {
    fs.accessSync(getPath(path), fs.constants.F_OK);
    return true;
  } catch (err) {
    return false;
  }
};

const generateProblemMarkdown = ({ cn, difficulty, url }) => {
  return `# ${cn}\r\n\r\n> 难度：${difficulty}\r\n>\r\n> ${url}\r\n\r\n## 题目`;
};

module.exports = update;
