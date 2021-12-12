const clear = require('clear');  // 清屏
const {log, figletLog} = require('./log');
const {inquirer} = require('./inquirer');
const update = require('./update');

module.exports = init = async () => {
    clear();
    await figletLog('ALGORITHM BRUSHING');
    const {cn, en, url, difficulty} = await inquirer();
    update({cn, en, url, difficulty});
}


