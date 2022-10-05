import { promisify } from 'util'
import fs from 'fs'
import path from 'path'
import _figlet from 'figlet'
import type { Color } from 'chalk'
import chalk from 'chalk'
import MagicString from 'magic-string'
import { execa } from 'execa'
import { getCache, removeCache, setCache } from 'local-caches'

/**
 * cache
 */

export enum STORE_KEY {
  TOPIC_ID = 'topic_id',
}

export const setStore = (key: STORE_KEY, value: string) => setCache(key, value)

export const getStore = (key: STORE_KEY) => getCache(key)

export const delStore = (key: STORE_KEY) => removeCache(key)

/**
 * data
 */
export type Difficulties = 'easy' | 'medium' | 'hard'

export const DIFFICULTIES: { [Key in Difficulties]: string } = {
  easy: '简单',
  medium: '中等',
  hard: '困难',
} as const

enum DIR {
  ROOT = './',
  TOPICS_PATH = './problemset/',
  TOPICS_DATA_PATH = './assets/data/',
  DOCS_PATH = './assets/docs/',
}

enum FILE_NAME {
  README_MD = 'README.md',
  TOPIC_DATA = 'topics.json',
  TOPIC_MD = 'TOPICS.md',
  CATEGORY_DATA ='categories.json',
  CATEGORY_MD ='CATEGORIES.md',
}

/**
 * log
 */

// eslint-disable-next-line no-console
export const log = (msg: string, color: Color = 'green') => console.log(chalk[color](msg))

const figlet = promisify(_figlet)
export const figletLog = async(msg: string, color: Color = 'green') => log(await figlet(msg) as string, color)

/**
 * format
 */

export const formatEnTitle = (en: string) => en.toLowerCase().split(' ').join('-')

export const formatCamelCase = (en: string) => en.split('-')
  .reduce(
    (acc, cur, idx) =>
      idx
        ? (acc += cur.slice(0, 1).toUpperCase() + cur.slice(1).toLowerCase())
        : (acc += cur.toLowerCase()),
    '',
  )

export const splitTitleWithId = (str: string) => {
  const arr = str.split('.')
  const title = arr.pop()!
  return {
    id: arr.join('.').trim(),
    title: title.trim(),
  }
}

/**
 * path
 */
const __dirname = path.dirname('.')
const getAbsolutePath = (p: string): string => path.resolve(__dirname, p)

const getRelativePath = (from: string, to: string): string => path.relative(getAbsolutePath(from), getAbsolutePath(to))

const checkHasDir = (dir: string) => {
  try {
    log(`start check whether has same directory: ${dir}`, 'white')
    fs.accessSync(dir, fs.constants.F_OK)
    return true
  }
  catch (_) {
    return false
  }
}

export const createDir = (dir: string): boolean => {
  const localDir = getAbsolutePath(`${DIR.TOPICS_PATH}${dir}`)
  if (checkHasDir(localDir)) {
    log('createDir: the path already exists', 'red')
    return false
  }
  log('start create topic directory', 'white')
  fs.mkdirSync(localDir)
  log('topic directory create success')
  return true
}

/**
 * template
 */

const genMainTemplate = (en: string) => {
  fs.writeFileSync(
    getAbsolutePath(`${DIR.TOPICS_PATH}${en}/index.ts`),
    `export function ${formatCamelCase(en)}() {}`,
  )
  log('index.ts generate success')
}

const genReadMeTemplate = (en: string, cn: string, diff: string, url: string) => {
  fs.writeFileSync(
    getAbsolutePath(`${DIR.TOPICS_PATH}${en}/README.md`),
    `# ${cn}\r\n\r\n> 难度：${diff}\r\n>\r\n> ${url}\r\n\r\n## 题目`,
  )
  log('README.md generate success')
}

const genTestTemplate = (en: string, cn: string) => {
  fs.writeFileSync(
    getAbsolutePath(`${DIR.TOPICS_PATH}${en}/index.spec.ts`),
    `import { describe, expect, it } from 'vitest'

describe('${cn}', () => {})

function testCase(fn: unknown) {
  it.each([
    // test cases
  ])('示例%#', () => {
    expect(true).toBe(true)
  })
}`,
  )
  log('test.spec.ts generate success')
}

export const genTemplate = (en: string, cn: string, diff: string, url: string) => {
  log('start generate template', 'white')
  genMainTemplate(en)
  genReadMeTemplate(en, cn, diff, url)
  genTestTemplate(en, cn)
}

/**
 * update docs
 */

export interface Topic {
  id: string
  title: {
    cn: string
    en: string
  }
  difficulty: string
  url: string
  path: string
}

const STR_ID_PREFIX = ['面试题 ', '剑指 Offer II ']

const topicsSort = <T extends { id: string }>(topics: T[]): T[] => {
  const [numIdTopics, strIdTopics] = topics.reduce<[numIdTopics: T[], strIdTopics: T[]]>((acc, cur) => {
    acc[isNaN(Number(cur.id)) ? 1 : 0].push(cur)
    return acc
  }, [[], []])

  return [
    ...numIdTopics.sort((a, b) => Number(a.id) - Number(b.id)),
    ...strIdTopics.sort((a, b) => {
      const aIdx = STR_ID_PREFIX.findIndex(prefix => a.id.startsWith(prefix))
      const bIdx = STR_ID_PREFIX.findIndex(prefix => b.id.startsWith(prefix))
      if (aIdx !== bIdx || aIdx !== -1 || bIdx !== -1) return bIdx - aIdx

      const prefix = STR_ID_PREFIX[aIdx]
      const aId = parseFloat(a.id.slice(prefix.length))
      const bId = parseFloat(b.id.slice(prefix.length))
      return aId - bId
    }),
  ]
}

export const updateTopicsJson = (
  topics: Topic[],
  id: string,
  cn: string,
  en: string,
  diff: string,
  url: string,
): Topic[] => {
  log('start update topics database', 'white')
  topics.push({
    id: `${id}`,
    title: { cn, en },
    difficulty: diff,
    url,
    path: `${DIR.TOPICS_PATH}${en}/README.md`,
  })
  topics = topicsSort<Topic>(topics)
  fs.writeFileSync(
    getAbsolutePath(DIR.TOPICS_DATA_PATH + FILE_NAME.TOPIC_DATA),
    JSON.stringify(topics, null, 2),
  )

  log('update topics database success')
  return topics
}

export const updateTopicsReadme = (topics: Topic[]) => {
  log('start update topics readme', 'white')
  fs.writeFileSync(
    getAbsolutePath(DIR.DOCS_PATH + FILE_NAME.TOPIC_MD),
    topics.reduce((md, topic) =>
      `${md}\r\n\r\n[${topic.id}. ${topic.title.cn}](${
        getRelativePath(DIR.DOCS_PATH, topic.path)
      })`
    , '# 题库目录'),
  )
  log('update topics readme success')
}

interface CategoryTopic {
  id: string
  title: string
  difficulty: string
  path: string
}

export interface Category {
  label: string
  topics: CategoryTopic[]
}

interface NewCategoryOptions {
  id: string
  existingCategories: string[]
  newCategories: string[]
}

const updateCategoriesData = (
  categories: Category[],
  topic: Topic,
  {
    id,
    existingCategories,
    newCategories,
  }: NewCategoryOptions,
): Category[] => {
  if (existingCategories.length) {
    existingCategories.forEach((label) => {
      const category = categories.find(c => c.label === label)!
      if (!category?.topics.find(t => t.id === id)) {
        category?.topics.push({
          id,
          title: topic.title.cn,
          path: topic.path,
          difficulty: topic.difficulty,
        })
        category.topics = topicsSort<CategoryTopic>(category.topics)
      }
    })
  }

  if (newCategories.length) {
    newCategories.forEach((label) => {
      categories.push({
        label,
        topics: [
          {
            id,
            title: topic.title.cn,
            path: topic.path,
            difficulty: topic.difficulty,
          },
        ],
      })
    })
  }

  return categories
}

export const updateCategoriesJson = (
  categories: Category[],
  topic: Topic,
  newCategoryOptions: NewCategoryOptions,
): Category[] => {
  log('start update categories datebase', 'white')
  categories = updateCategoriesData(categories, topic, newCategoryOptions)
  fs.writeFileSync(
    getAbsolutePath(DIR.TOPICS_DATA_PATH + FILE_NAME.CATEGORY_DATA),
    JSON.stringify(categories, null, 2),
  )

  log('update categories datebase success')
  return categories
}

export const updateCategoriesReadme = (categories: Category[]) => {
  log('start update categories markdown', 'white')
  let md = '# 题目分类\r\n'
  categories.forEach((category) => {
    md += `\r\n## ${category.label}\r\n\r\n`
    md += '| 题目 | 难度 |\r\n'
    md += '| ---- | ---- |\r\n'
    category.topics.forEach((topic) => {
      md += `| ${topic.id}. [${topic.title}](${getRelativePath(DIR.DOCS_PATH, topic.path)}) | ${topic.difficulty} |\r\n`
    })
  })

  fs.writeFileSync(getAbsolutePath(DIR.DOCS_PATH + FILE_NAME.CATEGORY_MD), md)

  log('start update categories markdown success')
}

const COMMENT_START_FLAG = '<!-- TOPICS COUNT START -->'
const COMMENT_END_FLAG = '<!-- TOPICS COUNT END -->'

export const updateTopicCountOnReadme = (count: number) => {
  const readmePath = getAbsolutePath(DIR.ROOT + FILE_NAME.README_MD)
  const md = fs.readFileSync(readmePath, 'utf-8')
  const leftIdx = md.match(new RegExp(COMMENT_START_FLAG))?.index
  const rightIdx = md.match(new RegExp(COMMENT_END_FLAG))?.index
  if (leftIdx === undefined || rightIdx === undefined) return

  const ms = new MagicString(md)
  ms.overwrite(
    leftIdx + COMMENT_START_FLAG.length, rightIdx,
    `\r\n<img src="https://img.shields.io/badge/-进度:${count}-green" alt="进度:${count}">\r\n`,
  )
  fs.writeFileSync(readmePath, ms.toString())
}

/**
 * exec
 */

export const commandAction = (command: string, args: string[]) => {
  return new Promise((resolve) => {
    log(`start run command: ${`${command} ${args.join(' ')}`}`)
    execa(command, args, { stdout: 'inherit' }).on('exit', () => resolve(true))
  })
}
