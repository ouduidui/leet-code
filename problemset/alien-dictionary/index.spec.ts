import { describe, expect, it } from 'vitest'
import { alienOrder, alienOrder2 } from '.'

describe('外星文字典', () => {
  describe('拓扑排序 + 深度优先搜索', () => {
    testCase(alienOrder)
  })

  describe('拓扑排序 + 广度优先搜索', () => {
    testCase(alienOrder2)
  })
})

function testCase(fn: (words: string[]) => string) {
  it.each([
    [
      ['wrt', 'wrf', 'er', 'ett', 'rftt'],
      'wertf',
    ],
    [
      ['z', 'x'],
      'zx',
    ],
    [
      ['z', 'x', 'z'],
      '',
    ],
  ])('示例%#', (words, expected) => {
    expect(fn(words)).toBe(expected)
  })
}
