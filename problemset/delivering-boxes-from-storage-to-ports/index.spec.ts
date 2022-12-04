import { describe, expect, it } from 'vitest'
import { boxDelivering } from '.'

describe('从仓库到码头运输箱子', () => {
  testCase(boxDelivering)
})

function testCase(fn: (boxes: number[][], portsCount: number, maxBoxes: number, maxWeight: number) => number) {
  it.each([
    [[[1, 1], [2, 1], [1, 1]], 2, 3, 3, 4],
    [[[1, 2], [3, 3], [3, 1], [3, 1], [2, 4]], 3, 3, 6, 6],
    [[[1, 4], [1, 2], [2, 1], [2, 1], [3, 2], [3, 4]], 3, 6, 7, 6],
    [[[2, 4], [2, 5], [3, 1], [3, 2], [3, 7], [3, 1], [4, 4], [1, 3], [5, 2]], 5, 5, 7, 14],

  ])('示例%#', (boxes, portsCount, maxBoxes, maxWeight, expected) => {
    expect(fn(boxes, portsCount, maxBoxes, maxWeight)).toBe(expected)
  })
}
