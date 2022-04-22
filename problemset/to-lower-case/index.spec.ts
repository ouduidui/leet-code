import { describe, expect, it } from 'vitest'
import { toLowerCase, toLowerCase2 } from '.'

describe('转换成小写字母', () => {
  describe('使用语言API', () => {
    testCase(toLowerCase)
  })

  describe('遍历', () => {
    testCase(toLowerCase2)
  })
})

function testCase(fn: (s: string) => string) {
  it.each([
    ['Hello', 'hello'],
    ['here', 'here'],
    ['LOVELY', 'lovely'],
  ])('示例%#', (s, expected) => {
    expect(fn(s)).toBe(expected)
  })
}
