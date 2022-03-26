import { describe, expect, it } from 'vitest'
import { addBinary } from '.'

describe('二进制求和', () => {
  testCase(addBinary)
})

function testCase(fn: (a: string, b: string) => string) {
  it.each([
    ['11', '1', '100'],
    ['1010', '1011', '10101'],
  ])('示例%#', (a, b, expected) => {
    expect(fn(a, b)).toBe(expected)
  })
}
