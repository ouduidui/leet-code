import clear from 'clear'
import inquirer from 'inquirer'
import type { Category, Topic } from './helper'
import { figletLog, log, updateCategoriesJson, updateCategoriesReadme } from './helper'
import categories from '~/assets/data/categories.json'
import topics from '~/assets/data/topics.json'

interface InquirerAnswers {
  id: string
  existingCategories: string[]
  newCategories: string
}

(async() => {
  // clear terminal
  clear()

  // banner
  await figletLog('UPDATE CATEGORY', 'magenta')

  // interact
  const categoriesOptions = categories.map(item => item.label)
  const ans = await inquirer.prompt<InquirerAnswers>([
    {
      type: 'input',
      name: 'id',
      message: 'please enter the topic id:',
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
  ]).catch((err) => {
    log(err.message, 'red')
    process.exit(1)
  })

  const { id, existingCategories } = ans
  const newCategories = ans.newCategories ? ans.newCategories.split(' ').filter(i => !!i) : []
  const topic: Topic = topics.find(topic => topic.id === id)!

  log('start update topic category', 'white')

  const localCategories = updateCategoriesJson(
    categories as unknown as Category[],
    topic,
    { id, existingCategories, newCategories },
  )

  updateCategoriesReadme(localCategories)

  log('update topic category success')
})()
