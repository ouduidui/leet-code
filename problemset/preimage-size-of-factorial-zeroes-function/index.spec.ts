import { describe, expect, it } from 'vitest'
import { preimageSizeFZF } from '.'

describe('阶乘函数后 K 个零', () => {
  testCase(preimageSizeFZF)
})

function testCase(fn: (k: number) => number) {
  it.each([
    [0, 5],
    [5, 0],
    [3, 5],
  ])('示例%#', (k, expected) => {
    expect(fn(k)).toBe(expected)
  })
}
