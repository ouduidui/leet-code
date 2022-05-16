import { expect, it } from 'vitest'
import { Trie } from '.'

it('实现 Trie (前缀树)', () => {
  const trie = new Trie()
  trie.insert('apple')
  expect(trie.search('apple')).toBe(true) // 返回 True
  expect(trie.search('app')).toBe(false) // 返回 False
  expect(trie.startsWith('app')).toBe(true) // 返回 True
  trie.insert('app')
  expect(trie.search('app')).toBe(true) // 返回 True
})
