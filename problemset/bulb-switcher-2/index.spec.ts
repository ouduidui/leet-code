import { describe, expect, it } from 'vitest'
import { flipLights } from '.'

describe('灯泡开关 Ⅱ', () => {
  testCase(flipLights)
})

function testCase(fn: (n: number, presses: number) => number) {
  it.each([
    [1, 1, 2],
    [2, 1, 3],
    [3, 1, 4],
  ])('示例%#', (n, presses, expected) => {
    expect(fn(n, presses)).toBe(expected)
  })
}
