import clear from 'clear'
import inquirer from 'inquirer'
import type { Category, Topic } from './helper'
import { STORE_KEY, commandAction, delStore, figletLog, getStore, log, updateCategoriesJson, updateCategoriesReadme } from './helper'
import categories from '~/assets/data/categories.json'
import topics from '~/assets/data/topics.json'

interface InquirerAnswers {
  id: string
  existingCategories: string[]
  newCategories: string
  needPushAction: boolean
}

// main
(async() => {
  // clear terminal
  clear()

  // banner
  await figletLog('UPDATE CATEGORY', 'magenta')

  // get Cache Id
  const cacheTopicId = getStore(STORE_KEY.TOPIC_ID) || ''

  // interact
  const categoriesOptions = categories.map(item => item.label)
  const ans = await inquirer.prompt<InquirerAnswers>([
    {
      type: 'input',
      name: 'id',
      message: 'please enter the topic id:',
      default: cacheTopicId,
      validate: (input) => {
        if (topics.find(topic => topic.id === input))
          return true
        else
          return 'This topic does not exist'
      },
    },
    {
      type: 'checkbox',
      name: 'existingCategories',
      message: 'please choose the categories of this topic:',
      choices: categoriesOptions.map(label => ({ name: label, value: label })),
    },
    {
      type: 'input',
      name: 'newCategories',
      message: 'please enter new category (multiple categories are separated by spaces):',
    },
    {
      type: 'comfirm',
      name: 'needPushAction',
      message: 'whether to auto commit code and push to github:',
      default: true,
    },
  ]).catch((err) => {
    log(err.message, 'red')
    process.exit(1)
  })

  const { id, existingCategories, needPushAction } = ans
  const newCategories = ans.newCategories ? ans.newCategories.split(' ').filter(i => !!i) : []
  const topic: Topic = topics.find(topic => topic.id === id)!

  log('start update topic category', 'white')

  const localCategories = updateCategoriesJson(
    categories as unknown as Category[],
    topic,
    { id, existingCategories, newCategories },
  )

  updateCategoriesReadme(localCategories)

  // del cache
  delStore(STORE_KEY.TOPIC_ID)

  log('update topic category success')

  if (needPushAction) {
    await commandAction('git', ['add', '.'])
    await commandAction('git', ['commit', '-am', `feat: leetcode ${id}`])
    await commandAction('git', ['push'])
  }
})()
