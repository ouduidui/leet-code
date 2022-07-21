import { describe, expect, it } from 'vitest'
import { pruneTree } from '.'
import type { TreeNode } from '~/utils/treeNode'
import { createTreeNode } from '~/utils/treeNode'

describe('二叉树剪枝', () => {
  testCase(pruneTree)
})

function testCase(fn: (root: TreeNode | null) => TreeNode | null) {
  it.each([
    [
      [1, null, 0, 0, 1],
      [1, null, 0, null, 1],
    ],
    [
      [1, 0, 1, 0, 0, 0, 1],
      [1, null, 1, null, 1],
    ],
    [
      [1, 1, 0, 1, 1, 0, 1, 0],
      [1, 1, 0, 1, 1, null, 1],
    ],
  ])('示例%#', (root, expected) => {
    expect(fn(createTreeNode(root))).toStrictEqual(createTreeNode(expected))
  })
}
