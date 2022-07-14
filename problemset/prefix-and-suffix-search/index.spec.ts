import { describe, expect, it } from 'vitest'
import { WordFilter } from '.'

describe('前缀和后缀搜索', () => {
  describe('计算每个单词的前缀后缀组合可能性', () => testCase(WordFilter))
})

type CtorType = new (words: string[]) => {
  f(pref: string, suff: string): number
}

function testCase(Ctor: CtorType) {
  it('示例', () => {
    const wordFilter = new Ctor(['apple'])
    expect(wordFilter.f('a', 'e')).toBe(0)
  })
}
