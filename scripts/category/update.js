const fs = require('fs');

module.exports = (data, { id, categories, others }) => {
  const newData = addToData(data, { id, categories, others });
  fs.writeFileSync(
    './assets/data/category.json',
    JSON.stringify(newData, null, 2)
  );
  updateMarkdown(newData);
};

const addToData = (data, { id, categories, others }) => {
  const problem = findProblem(id);
  if (categories.length > 0) {
    categories.forEach((label) => {
      const category = data.find((c) => c.label === label);
      if (!category.problems.find((item) => item.id === problem.id)) {
        category.problems.push({
          id: problem.id,
          title: problem.title.cn,
          path: problem.path,
          difficulty: problem.difficulty
        });
        category.problems.sort((a, b) => a.id - b.id);
      }
    });
  }
  if (others.length > 0) {
    others.forEach((label) => {
      data.push({
        label,
        problems: [
          {
            id: problem.id,
            title: problem.title.cn,
            path: problem.path,
            difficulty: problem.difficulty
          }
        ]
      });
    });
  }

  return data;
};

const findProblem = (id) => {
  const problems = JSON.parse(
    fs.readFileSync('./assets/data/problems.json', 'utf-8')
  );
  return problems.find((problem) => problem.id === id);
};

const updateMarkdown = (data) => {
  let md = `# 题目分类\r\n`;
  data.forEach((item) => {
    md += `\r\n## ${item.label}\r\n\r\n`;
    md += `| 题目 | 难度 |\r\n`;
    md += `| ---- | ---- |\r\n`;
    item.problems.forEach((problem) => {
      md += `| ${problem.id}. [${problem.title}](${problem.path}) | ${problem.difficulty} |\r\n`;
    });
  });
  fs.writeFileSync('./assets/docs/CATEGORY.md', md);
};
