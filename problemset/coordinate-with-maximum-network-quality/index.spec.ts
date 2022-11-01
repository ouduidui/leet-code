import { describe, expect, it } from 'vitest'
import { bestCoordinate } from '.'

describe('网络信号最好的坐标', () => {
  testCase(bestCoordinate)
})

function testCase(fn: (towers: number[][], radius: number) => number[]) {
  it.each([
    [[[1, 2, 5], [2, 1, 7], [3, 1, 9]], 2, [2, 1]],
    [[[23, 11, 21]], 9, [23, 11]],
    [[[1, 2, 13], [2, 1, 7], [0, 1, 9]], 2, [1, 2]],
  ])('示例%#', (towers, radius, expected) => {
    expect(fn(towers, radius)).toStrictEqual(expected)
  })
}
