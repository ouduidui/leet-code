import { describe, expect, it } from 'vitest'
import { construct, construct2 } from '.'
import type { Node } from '~/utils/quadTree'
import { createQuadTree } from '~/utils/quadTree'

describe('建立四叉树', () => {
  describe('递归', () => {
    testCase(construct)
  })

  describe('递归 + 二维前缀和优化', () => {
    testCase(construct2)
  })
})

function testCase(fn: (grid: number[][]) => Node | null) {
  it.each([
    [
      [
        [0, 1],
        [1, 0],
      ],
      [[0, 1], [1, 0], [1, 1], [1, 1], [1, 0]],
    ],
    [
      [
        [1, 1, 1, 1, 0, 0, 0, 0],
        [1, 1, 1, 1, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 0, 0, 0],
        [1, 1, 1, 1, 0, 0, 0, 0],
        [1, 1, 1, 1, 0, 0, 0, 0],
        [1, 1, 1, 1, 0, 0, 0, 0],
      ],
      [[0, 1], [1, 1], [0, 1], [1, 1], [1, 0], null, null, null, null, [1, 0], [1, 0], [1, 1], [1, 1]],
    ],
    [
      [
        [1, 1],
        [1, 1],
      ],
      [[1, 1]],
    ],
    [
      [[0]],
      [[1, 0]],
    ],
    [
      [
        [1, 1, 0, 0],
        [1, 1, 0, 0],
        [0, 0, 1, 1],
        [0, 0, 1, 1],
      ],
      [[0, 1], [1, 1], [1, 0], [1, 0], [1, 1]],
    ],
  ])('示例%#', (grid, node) => {
    expect(fn(grid))
      .toStrictEqual(createQuadTree(node as ([0 | 1, 0 | 1] | null)[]))
  })
}
