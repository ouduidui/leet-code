import { describe, expect, it } from 'vitest'
import { pathSum, pathSum2 } from '.'
import type { TreeNode } from '~/utils/treeNode'
import { createTreeNode } from '~/utils/treeNode'

describe('路径总和 II', () => {
  describe('深度优先搜索', () => {
    testCase(pathSum)
  })
  describe('广度优先搜索', () => {
    testCase(pathSum2)
  })
})

function testCase(
  fn: (root: TreeNode | null, targetSum: number) => number[][],
) {
  it.each([
    [
      [
        5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1],
      22,
      [
        [5, 4, 11, 2],
        [5, 8, 4, 5],
      ],
    ],
    [
      [1, 2, 3],
      5,
      [],
    ],
    [
      [1, 2],
      0,
      [],
    ],
  ])('示例%#', (root, targetSum, expected) => {
    expect(fn(createTreeNode(root), targetSum)).toStrictEqual(expected)
  })
}
