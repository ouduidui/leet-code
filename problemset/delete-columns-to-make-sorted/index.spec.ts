import { describe, expect, it } from 'vitest'
import { minDeletionSize } from '.'

describe('删列造序', () => {
  testCase(minDeletionSize)
})

function testCase(fn: (strs: string[]) => number) {
  it.each([
    [
      ['cba', 'daf', 'ghi'],
      1,
    ],
    [
      ['a', 'b'],
      0,
    ],
    [
      ['zyx', 'wvu', 'tsr'],
      3,
    ],
  ])('示例%#', (strs, expected) => {
    expect(fn(strs)).toBe(expected)
  })
}
