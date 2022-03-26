import { describe, expect, it } from 'vitest'
import { convertToBase7 } from '.'

describe('七进制数', () => {
  testCase(convertToBase7)
})

function testCase(fn: (num: number) => string) {
  it.each([
    [100, '202'],
    [-7, '-10'],
  ])('示例%#', (num, expected) => {
    expect(fn(num)).toBe(expected)
  })
}
