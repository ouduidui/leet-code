import { describe, expect, it } from 'vitest'
import { levelOrderBottom } from '.'
import type { TreeNode } from '~/utils/treeNode'
import { createTreeNode } from '~/utils/treeNode'

describe('二叉树的层序遍历 II', () => {
  testCase(levelOrderBottom)
})

function testCase(fn: (root: TreeNode | null) => number[][]) {
  it.each([
    [
      [3, 9, 20, null, null, 15, 7],
      [[15, 7], [9, 20], [3]],
    ],
    [[1], [[1]]],
    [[], []],
    [
      [1, 2, 3, 4, null, null, 5],
      [[4, 5], [2, 3], [1]],
    ],
  ])('示例%#', (root, expected) => {
    expect(fn(createTreeNode(root))).toStrictEqual(expected)
  })
}
