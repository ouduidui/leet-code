import { describe, expect, it } from 'vitest'
import { pushDominoes, pushDominoes2 } from '.'

describe('推多米诺', () => {
  describe('广度优先搜索', () => {
    testCase(pushDominoes)
  })

  describe('模拟', () => {
    testCase(pushDominoes2)
  })
})

function testCase(fn: (dominoes: string) => string) {
  it.each([
    ['RR.L', 'RR.L'],
    ['.L.R...LR..L..', 'LL.RR.LLRRLL..'],
  ])('示例%#', (dominoes, expected) => {
    expect(fn(dominoes)).toBe(expected)
  })
}
