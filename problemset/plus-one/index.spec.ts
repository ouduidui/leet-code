import { describe, expect, it } from 'vitest'
import { plusOne } from '.'
// need refactor
describe('加一', () => {
  testCase(plusOne)
})

function testCase(fn: (digits: number[]) => number[]) {
  it('示例一', () => {
    const digits = [1, 2, 3]
    const expected = [1, 2, 4]

    expect(fn(digits)).toStrictEqual(expected)
  })

  it('示例一', () => {
    const digits = [4, 3, 2, 1]
    const expected = [4, 3, 2, 2]

    expect(fn(digits)).toStrictEqual(expected)
  })

  it('示例一', () => {
    const digits = [0]
    const expected = [1]

    expect(fn(digits)).toStrictEqual(expected)
  })
}
