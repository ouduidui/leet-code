const clear = require('clear') // 清屏
const { figletLog } = require('../utils/log')
const inquirer = require('./inquirer')
const update = require('./update')

module.exports = async() => {
  clear()
  await figletLog('CREATE PROBLEM')
  const { cn, en, url, difficulty, id } = await inquirer()
  update({ cn, en, url, difficulty, id })
}
