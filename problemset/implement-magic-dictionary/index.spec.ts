import { describe, expect, it } from 'vitest'
import { MagicDictionary, MagicDictionary2 } from '.'

describe('实现一个魔法字典', () => {
  describe('枚举每个字典中的字符串并判断', () => testCase(MagicDictionary))
  describe('使用字典树优化枚举', () => testCase(MagicDictionary2))
})

type CtorType = new () => ({
  buildDict: (dictionary: string[]) => void
  search: (searchWord: string) => boolean
})

function testCase(Ctor: CtorType) {
  it('示例', () => {
    const magicDictionary = new Ctor()
    magicDictionary.buildDict(['hello', 'leetcode'])
    expect(magicDictionary.search('hello')).toBe(false) // 返回 False
    expect(magicDictionary.search('hhllo')).toBe(true) // 将第二个 'h' 替换为 'e' 可以匹配 "hello" ，所以返回 True
    expect(magicDictionary.search('hell')).toBe(false) // 返回 False
    expect(magicDictionary.search('leetcoded')).toBe(false) // 返回 False
  })
}
