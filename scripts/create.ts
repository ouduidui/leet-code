import clear from 'clear'
import inquirer from 'inquirer'
import type { Difficulties, Topic } from './helper'
import { DIFFICULTIES, STORE_KEY, commandAction, createDir, figletLog, formatEnTitle, genTemplate, log, setStore, splitTitleWithId, updateTopicCountOnReadme, updateTopicsJson, updateTopicsReadme } from './helper'
import topics from '~/assets/data/topics.json'

interface InquirerAnswers {
  id: string
  cn: string
  en: string
  url: string
  diff: Difficulties
}

// main
(async() => {
  // git pull
  await commandAction('git', ['pull'])

  // clear terminal
  clear()

  // banner
  await figletLog('CREATE TOPIC', 'magenta')

  // interact
  const ans = await inquirer.prompt<InquirerAnswers>([
    {
      type: 'input',
      name: 'cn',
      message: 'please enter the chinese title of the topic (with topic id):',
    },
    {
      type: 'input',
      name: 'id',
      message: 'please enter the topic id:',
      default: ({ cn }: InquirerAnswers) => {
        if (cn.includes('.')) {
          const { id } = splitTitleWithId(cn)
          return id
        }
        return ''
      },
      validate: (input) => {
        if (topics.find(topic => topic.id === input))
          return 'The same topic id already exists'
        else
          return !!input
      },
    },
    {
      type: 'input',
      name: 'url',
      message: 'please enter the leetcode url of the topic:',
    },
    {
      type: 'input',
      name: 'en',
      default: ({ url }: InquirerAnswers) => {
        const arr = url.split('/')
        while (arr.length && !arr[arr.length - 1])
          arr.pop()

        return arr.pop()
      },
      message: 'please enter the english title of the topic:',
      validate: (input) => {
        const en = formatEnTitle(input)
        if (topics.find(topic => topic.title.en === en))
          return 'The same topic title already exists'
        else
          return true
      },
    },
    {
      type: 'list',
      name: 'diff',
      message: 'please choose the difficulty of the topic:',
      default: Object.keys(DIFFICULTIES)[0],
      choices: Object.keys(DIFFICULTIES).map(k => ({ name: k, value: k })),
    },
  ]).catch((err) => {
    log(err.message, 'red')
    process.exit(1)
  })

  const { id, cn, url } = ans
  let title = cn
  if (cn.includes('.'))
    title = splitTitleWithId(cn).title

  const en = formatEnTitle(ans.en)
  const diff = DIFFICULTIES[ans.diff]
  log(`start creating topic: ${en}`, 'white')

  // create
  if (createDir(en)) {
    genTemplate(en, title, diff, url)
    const newTopics = updateTopicsJson(topics as Topic[], id, title, en, diff, url)
    updateTopicsReadme(newTopics)
    updateTopicCountOnReadme(newTopics.length)

    // set cache
    setStore(STORE_KEY.TOPIC_ID, id)

    log(`${en} topic created successfully`)
  }
})()
