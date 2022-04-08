const { promisify } = require('util')
const figlet = promisify(require('figlet')) // 打印
const chalk = require('chalk') // 颜色

const log = (msg, color = 'green') => {
  if (!chalk[color]) color = 'green'
  console.log(chalk[color](msg))
}

const figletLog = async(text, color = 'green') => {
  const msg = await figlet(text)
  log(msg, color)
}

module.exports = {
  log,
  figletLog,
}
