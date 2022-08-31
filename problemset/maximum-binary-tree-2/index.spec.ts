import { describe, expect, it } from 'vitest'
import { insertIntoMaxTree } from '.'
import type { TreeNode } from '~/utils/treeNode'
import { createTreeNode } from '~/utils/treeNode'

describe('最大二叉树 II', () => {
  testCase(insertIntoMaxTree)
})

function testCase(fn: (root: TreeNode | null, val: number) => TreeNode | null) {
  it.each([
    [
      [4, 1, 3, null, null, 2],
      5,
      [5, 4, null, 1, 3, null, null, 2],
    ],
    [
      [5, 2, 4, null, 1],
      3,
      [5, 2, 4, null, 1, null, 3],
    ],
    [
      [5, 2, 3, null, 1],
      4,
      [5, 2, 4, null, 1, 3],
    ],
  ])('示例%#', (root, val, expected) => {
    expect(fn(createTreeNode(root), val)).toStrictEqual(createTreeNode(expected))
  })
}
