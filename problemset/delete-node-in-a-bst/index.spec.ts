import { describe, expect, it } from 'vitest'
import { deleteNode, deleteNode2 } from '.'
import type { TreeNode } from '~/utils/treeNode'
import { createTreeNode } from '~/utils/treeNode'

describe('删除二叉搜索树中的节点', () => {
  describe('递归', () => {
    testCase(deleteNode)
  })

  describe('迭代', () => {
    testCase(deleteNode2)
  })
})

function testCase(fn: (root: TreeNode | null, key: number) => TreeNode | null) {
  it.each([
    [
      [5, 3, 6, 2, 4, null, 7],
      3,
      [
        [5, 4, 6, 2, null, null, 7],
        [5, 2, 6, null, 4, null, 7],
      ],
    ],
    [
      [5, 3, 6, 2, 4, null, 7],
      0,
      [
        [5, 3, 6, 2, 4, null, 7],
      ],
    ],
    [
      [],
      0,
      [
        [],
      ],
    ],
  ])('示例%#', (root, key, expecteds) => {
    expect(expecteds.map(arr => createTreeNode(arr)))
      .toContainEqual(fn(createTreeNode(root), key))
  })
}
