import { describe, expect, it } from 'vitest'
import { checkWays } from '.'
// need refactor
describe('重构一棵树的方案数', () => {
  testCase(checkWays)
})

function testCase(fn: (pairs: number[][]) => number) {
  it('示例一', () => {
    const pairs = [
      [1, 2],
      [2, 3],
    ]
    const expected = 1
    expect(fn(pairs)).toBe(expected)
  })

  it('示例二', () => {
    const pairs = [
      [1, 2],
      [2, 3],
      [1, 3],
    ]
    const expected = 2
    expect(fn(pairs)).toBe(expected)
  })

  it('示例三', () => {
    const pairs = [
      [1, 2],
      [2, 3],
      [2, 4],
      [1, 5],
    ]
    const expected = 0
    expect(fn(pairs)).toBe(expected)
  })
}
