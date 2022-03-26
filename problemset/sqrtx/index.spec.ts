import { describe, expect, it } from 'vitest'
import { mySqrt, mySqrt2 } from '.'
// need refactor
describe('Sqrt(x)', () => {
  describe('二分法', () => {
    testCase(mySqrt)
  })

  describe('二分法', () => {
    testCase(mySqrt2)
  })
})

function testCase(fn: (x: number) => number) {
  it('示例一', () => {
    const x = 4
    const expected = 2
    expect(fn(x)).toBe(expected)
  })

  it('示例二', () => {
    const x = 8
    const expected = 2
    expect(fn(x)).toBe(expected)
  })
}
