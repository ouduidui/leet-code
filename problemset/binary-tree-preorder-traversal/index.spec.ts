import { describe, expect, it } from 'vitest'
import { preorderTraversal, preorderTraversal2, preorderTraversal3 } from '.'
import type { TreeNode } from '~/utils/treeNode'
import { createTreeNode } from '~/utils/treeNode'

describe('二叉树的前序遍历', () => {
  describe('递归', () => {
    testCase(preorderTraversal)
  })

  describe('迭代', () => {
    testCase(preorderTraversal2)
  })

  describe('Morris 遍历', () => {
    testCase(preorderTraversal3)
  })
})

function testCase(fn: (root: TreeNode | null) => number[]) {
  it.each([
    [
      [1, null, 2, 3],
      [1, 2, 3],
    ],
    [[], []],
    [[1], [1]],
  ])('示例%#', (root, expected) => {
    expect(fn(createTreeNode(root))).toStrictEqual(expected)
  })
}
