import { describe, expect, it } from 'vitest'
import { intersect } from '.'
import { createQuadTree } from '~/utils/quadTree'
import type { Node, QuadTreeArrType } from '~/utils/quadTree'

describe('四叉树交集', () => {
  testCase(intersect)
})

function testCase(fn: (quadTree1: Node | null, quadTree2: Node | null) => Node | null) {
  it.each([
    [
      [[0, 0], [1, 0], [1, 0], [1, 1], [1, 1]],
      [[0, 0], [1, 1], [1, 1], [1, 0], [1, 1]],
      [[1, 1]],
    ],
  ])('示例%#', (quadTree1, quadTree2, expected) => {
    expect(
      fn(
        createQuadTree(quadTree1 as QuadTreeArrType),
        createQuadTree(quadTree2 as QuadTreeArrType)),
    ).toStrictEqual(
      createQuadTree(expected as QuadTreeArrType),
    )
  })
}
