import { describe, expect, it } from 'vitest'
import { maximumUnits } from '.'

describe('卡车上的最大单元数', () => {
  testCase(maximumUnits)
})

function testCase(fn: (boxTypes: number[][], truckSize: number) => number) {
  it.each([
    [[[1, 3], [2, 2], [3, 1]], 4, 8],
    [[[5, 10], [2, 5], [4, 7], [3, 9]], 10, 91],
  ])('示例%#', (boxTypes, truckSize, expected) => {
    expect(fn(boxTypes, truckSize)).toBe(expected)
  })
}
