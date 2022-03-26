import { describe, expect, it } from 'vitest'
import { inorderTraversal, inorderTraversal2, inorderTraversal3 } from '.'
import type { TreeNode } from '~/utils/treeNode'
import { createTreeNode } from '~/utils/treeNode'

describe('二叉树的中序遍历', () => {
  describe('递归', () => {
    testCase(inorderTraversal)
  })

  describe('迭代 + 栈', () => {
    testCase(inorderTraversal2)
  })

  describe('Morris 中序遍历', () => {
    testCase(inorderTraversal3)
  })
})

function testCase(fn: (root: TreeNode | null) => number[]) {
  it.each([
    [
      [1, null, 2, 3],
      [1, 3, 2],
    ],
    [[], []],
    [[1], [1]],
    [
      [1, 2],
      [2, 1],
    ],
    [
      [1, null, 2],
      [1, 2],
    ],
  ])('示例%#', (root, expected) => {
    expect(fn(createTreeNode(root))).toStrictEqual(expected)
  })
}
