import { describe, expect, it } from 'vitest'
import { grayCode, grayCode2 } from '.'

describe('格雷编码', () => {
  describe('对称生成', () => {
    testCase(grayCode)
  })

  describe('二进制数转格雷码', () => {
    testCase(grayCode2)
  })
})

function testCase(fn: (n: number) => number[]) {
  it.each([
    [2, [0, 1, 3, 2]],
    [1, [0, 1]],
  ])('示例%#', (n, expected) => {
    expect(fn(n)).toStrictEqual(expected)
  })
}
