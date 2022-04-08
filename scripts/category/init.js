const fs = require('fs')
const clear = require('clear')
const { figletLog } = require('../utils/log')
const inquirer = require('./inquirer')
const update = require('./update')

const getCategory = () =>
  JSON.parse(fs.readFileSync('./assets/data/category.json'))

module.exports = async() => {
  clear()
  await figletLog('UPDATE CATEGORY')
  const data = getCategory()
  const { id, categories, others } = await inquirer(data)
  update(data, { id, categories, others })
}
