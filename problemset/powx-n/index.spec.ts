import { describe, expect, it } from 'vitest'
import { myPow } from '.'
// need refactor
describe('Pow(x, n)', () => {
  describe('迭代', () => {
    testCase(myPow)
  })
})

function testCase(fn: (x: number, n: number) => number) {
  it('示例一', () => {
    const x = 2.0
    const n = 10
    const expected = 1024.0

    expect(fn(x, n)).toBe(expected)
  })

  it('示例一', () => {
    const x = 2.1
    const n = 3
    const expected = 9.261

    expect(fn(x, n)).toBe(expected)
  })

  it('示例一', () => {
    const x = 2.0
    const n = -2
    const expected = 0.25

    expect(fn(x, n)).toBe(expected)
  })
}
