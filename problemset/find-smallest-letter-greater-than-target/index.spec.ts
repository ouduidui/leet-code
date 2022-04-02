import { describe, expect, it } from 'vitest'
import { nextGreatestLetter, nextGreatestLetter2 } from '.'

describe('寻找比目标字母大的最小字母', () => {
  describe('线性查找', () => {
    testCase(nextGreatestLetter)
  })

  describe('二分法', () => {
    testCase(nextGreatestLetter2)
  })
})

function testCase(fn: (letters: string[], target: string) => string) {
  it.each([
    [['c', 'f', 'j'], 'a', 'c'],
    [['c', 'f', 'j'], 'c', 'f'],
    [['c', 'f', 'j'], 'd', 'f'],
    [['c', 'f', 'j'], 'j', 'c'],
  ])('示例%#', (letters, target, expected) => {
    expect(fn(letters, target)).toBe(expected)
  })
}
