import { describe, expect, it } from 'vitest'
import { bulbSwitch } from '.'

describe('灯泡开关', () => {
  testCase(bulbSwitch)
})

function testCase(fn: (n: number) => number) {
  it.each([
    [3, 1],
    [0, 0],
    [1, 1],
  ])('示例%#', (n, expected) => {
    expect(fn(n)).toBe(expected)
  })
}
