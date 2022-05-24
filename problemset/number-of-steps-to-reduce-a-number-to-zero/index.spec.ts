import { describe, expect, it } from 'vitest'
import { numberOfSteps } from '.'

describe('将数字变成 0 的操作次数', () => {
  testCase(numberOfSteps)
})

function testCase(fn: (num: number) => number) {
  it.each([
    [14, 6],
    [8, 4],
    [123, 12],
  ])('示例%#', (num, expected) => {
    expect(fn(num)).toBe(expected)
  })
}
