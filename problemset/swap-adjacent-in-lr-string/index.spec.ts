import { describe, expect, it } from 'vitest'
import { canTransform } from '.'

describe('在LR字符串中交换相邻字符', () => {
  testCase(canTransform)
})

function testCase(fn: (start: string, end: string) => boolean) {
  it.each([
    [
      'RXXLRXRXL',
      'XRLXXRRLX',
      true,
    ],
  ])('示例%#', (start, end, expected) => {
    expect(fn(start, end)).toBe(expected)
  })
}
