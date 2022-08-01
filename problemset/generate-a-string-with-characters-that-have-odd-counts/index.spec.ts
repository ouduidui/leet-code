import { describe, expect, it } from 'vitest'
import { generateTheString } from '.'

describe('生成每种字符都是奇数个的字符串', () => {
  testCase(generateTheString)
})

function testCase(fn: (n: number) => string) {
  it.each([
    [4],
    [2],
    [7],
  ])('示例%#', (n) => {
    const str = fn(n)

    const len = str.length
    expect(len).toBe(n)
    const map = new Map<string, number>()
    for (const s of str)
      map.set(s, (map.get(s) || 0) + 1)

    map.forEach((val) => {
      expect(val % 2).toBe(1)
    })
  })
}
