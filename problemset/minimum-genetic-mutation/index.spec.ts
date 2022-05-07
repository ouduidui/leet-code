import { describe, expect, it } from 'vitest'
import { minMutation, minMutation2 } from '.'

describe('最小基因变化', () => {
  describe('广度优先搜索', () => {
    testCase(minMutation)
  })

  describe('预处理优化', () => {
    testCase(minMutation2)
  })
})

function testCase(fn: (start: string, end: string, bank: string[]) => number) {
  it.each([
    ['AACCGGTT', 'AACCGGTA', ['AACCGGTA'], 1],
    ['AACCGGTT', 'AAACGGTA', ['AACCGGTA', 'AACCGCTA', 'AAACGGTA'], 2],
    ['AAAAACCC', 'AACCCCCC', ['AAAACCCC', 'AAACCCCC', 'AACCCCCC'], 3],
  ])('示例%#', (start, end, bank, expected) => {
    expect(fn(start, end, bank)).toBe(expected)
  })
}
