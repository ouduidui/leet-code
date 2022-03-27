import { expect, it } from 'vitest'
import { WordDictionary } from './index'

it('添加与搜索单词 - 数据结构设计', () => {
  const wordDictionary = new WordDictionary()
  wordDictionary.addWord('bad')
  wordDictionary.addWord('dad')
  wordDictionary.addWord('mad')
  expect(wordDictionary.search('pad')).toBe(false)
  expect(wordDictionary.search('bad')).toBe(true)
  expect(wordDictionary.search('.ad')).toBe(true)
  expect(wordDictionary.search('b..')).toBe(true)
})
