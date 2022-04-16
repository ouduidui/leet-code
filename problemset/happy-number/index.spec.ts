import { describe, expect, it } from 'vitest'
import { isHappy, isHappy2 } from '.'

describe('快乐数', () => {
  describe('用哈希集合检测循环', () => {
    testCase(isHappy)
  })

  describe('快慢指针法', () => {
    testCase(isHappy2)
  })
})

function testCase(fn: (n: number) => boolean) {
  it.each([
    [19, true],
    [2, false],
  ])('示例%#', (n, expected) => {
    expect(fn(n)).toBe(expected)
  })
}
