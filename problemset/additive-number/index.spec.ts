import { describe, expect, it } from 'vitest'
import { isAdditiveNumber } from '.'

describe('累加数', () => {
  testCase(isAdditiveNumber)
})

function testCase(fn: (num: string) => boolean) {
  it.each([
    ['112358', true],
    ['199100199', true],
  ])('示例%#', (num, expected) => {
    expect(fn(num)).toBe(expected)
  })
}
