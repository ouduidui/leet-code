
import { describe, expect, it } from 'vitest'
import { levelOrder } from '.'
import type { Node } from '~/utils/nAryTree'
import { createNAryTree } from '~/utils/nAryTree'

describe('N 叉树的层序遍历', () => {
  testCase(levelOrder)
})

function testCase(fn: (root: Node | null) => number[][]) {
  it.each([
    [
      [1, null, 3, 2, 4, null, 5, 6],
      [[1], [3, 2, 4], [5, 6]],
    ],
    [
      [1, null, 2, 3, 4, 5, null, null, 6, 7, null, 8, null, 9, 10, null, null, 11, null, 12, null, 13, null, null, 14],
      [[1], [2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13], [14]],
    ],
  ])('示例%#', (root, expected) => {
    expect(fn(createNAryTree(root))).toStrictEqual(expected)
  })
}
