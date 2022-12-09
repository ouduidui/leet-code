import { describe, expect, it } from 'vitest'
import { checkPowersOfThree } from '.'

describe('判断一个数字是否可以表示成三的幂的和', () => {
  testCase(checkPowersOfThree)
})

function testCase(fn: (n: number) => boolean) {
  it.each([
    [12, true],
    [91, true],
    [21, false],
  ])('示例%#', (n, expected) => {
    expect(fn(n)).toBe(expected)
  })
}
