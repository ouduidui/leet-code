import { describe, expect, it } from 'vitest'
import { numDecodings } from '.'
describe('解码方法', () => {
  testCase(numDecodings)
})

function testCase(fn: (s: string) => number) {
  it.each([
    ['12', 2],
    ['226', 3],
    ['0', 0],
    ['06', 0],
    ['2101', 1],
  ])('示例%#', (s, expected) => {
    expect(fn(s)).toBe(expected)
  })
}
