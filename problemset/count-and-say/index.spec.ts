import { describe, expect, it } from 'vitest'
import { countAndSay } from '.'

describe('外观数列', () => {
  describe('遍历生成', () => {
    testCase(countAndSay)
  })
})

function testCase(fn: (n: number) => string) {
  it.each([
    [1, '1'],
    [4, '1211'],
  ])('示例%#', (n, expected) => {
    expect(fn(n)).toBe(expected)
  })
}
