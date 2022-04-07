import { describe, expect, it } from 'vitest'
import { rotateString, rotateString2 } from '.'

describe('旋转字符串', () => {
  describe('模拟', () => {
    testCase(rotateString)
  })

  describe('搜索子字符串', () => {
    testCase(rotateString2)
  })
})

function testCase(fn: (s: string, goal: string) => boolean) {
  it.each([
    ['abcde', 'cdeab', true],
    ['abcde', 'abced', false],
    ['clrwmpkwru', 'wmpkwruclr', true],
  ])('示例%#', (s, goal, expected) => {
    expect(fn(s, goal)).toBe(expected)
  })
}
