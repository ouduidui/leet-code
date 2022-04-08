const inquirer = require('inquirer')
const { log } = require('../utils/log')

module.exports = (data) => {
  const labels = data.map(item => item.label)

  return new Promise((resolve, reject) => {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'id',
          message: '请输入算法题序号',
        },
        {
          type: 'checkbox',
          name: 'categories',
          message: '选择已有分类',
          choices: labels.map(label => ({ name: label, value: label })),
        },
        {
          type: 'input',
          name: 'others',
          message: '请输入新增分类（多个分类以空格区分）',
        },
      ])
      .then((res) => {
        if (res.others)
          res.others = res.others.split(' ').filter(i => !!i)

        else
          res.others = []

        res.id = Number(res.id)
        resolve(res)
      })
      .catch((err) => {
        log(err.message, 'red')
        reject(err)
      })
  })
}
