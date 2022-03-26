import { describe, expect, it } from 'vitest'
import { getPermutation, getPermutation2 } from '.'
// need refactor
describe('排列序列', () => {
  describe('回溯', () => {
    testCase(getPermutation)
  })

  describe('数学 + 缩小问题规模', () => {
    testCase(getPermutation2)
  })
})

function testCase(fn: (n: number, k: number) => string) {
  it('示例一', () => {
    const n = 3
    const k = 3
    const expected = '213'

    expect(fn(n, k)).toBe(expected)
  })

  it('示例二', () => {
    const n = 4
    const k = 9
    const expected = '2314'

    expect(fn(n, k)).toBe(expected)
  })

  it('示例三', () => {
    const n = 3
    const k = 1
    const expected = '123'

    expect(fn(n, k)).toBe(expected)
  })
}
