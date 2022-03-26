import { describe, expect, it } from 'vitest'
import { numEnclaves } from '.'
// need refactor
describe('飞地的数量', () => {
  testCase(numEnclaves)
})

function testCase(fn: (gird: number[][]) => number) {
  it('示例一', () => {
    const gird = [
      [0, 0, 0, 0],
      [1, 0, 1, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0],
    ]
    const expected = 3
    expect(fn(gird)).toBe(expected)
  })

  it('示例二', () => {
    const gird = [
      [0, 1, 1, 0],
      [0, 0, 1, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 0],
    ]
    const expected = 0
    expect(fn(gird)).toBe(expected)
  })
}
