import { describe, expect, it } from 'vitest'
import { minSubArrayLen } from '.'
// need refactor
describe('长度最小的子数组', () => {
  testCase(minSubArrayLen)
})

function testCase(fn: (target: number, nums: number[]) => number) {
  it('示例一', () => {
    const target = 7
    const nums = [2, 3, 1, 2, 4, 3]
    const expected = 2
    expect(fn(target, nums)).toEqual(expected)
  })

  it('示例二', () => {
    const target = 4
    const nums = [1, 4, 4]
    const expected = 1
    expect(fn(target, nums)).toEqual(expected)
  })

  it('示例三', () => {
    const target = 11
    const nums = [1, 1, 1, 1, 1, 1, 1, 1]
    const expected = 0
    expect(fn(target, nums)).toEqual(expected)
  })
}
