import { describe, expect, it } from 'vitest'
import { partition, partition2 } from '.'

describe('分割回文串', () => {
  describe('回溯 + 记忆化搜索', () => {
    testCase(partition)
  })

  describe('回溯 + 动态规划预处理', () => {
    testCase(partition2)
  })
})

function testCase(fn: (s: string) => string[][]) {
  it.each([
    [
      'aab',
      [
        ['a', 'a', 'b'],
        ['aa', 'b'],
      ],
    ],
    [
      'a',
      [['a']],
    ],
  ])('示例%#', (s, expected) => {
    expect(fn(s)).toStrictEqual(expected)
  })
}
