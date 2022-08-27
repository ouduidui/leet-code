import { describe, expect, it } from 'vitest'
import { widthOfBinaryTree, widthOfBinaryTree2 } from '.'
import type { TreeNode } from '~/utils/treeNode'
import { createTreeNode } from '~/utils/treeNode'

describe('二叉树最大宽度', () => {
  describe('广度优先搜索', () => testCase(widthOfBinaryTree))
  describe('广度优先搜索', () => testCase(widthOfBinaryTree2))
})

function testCase(fn: (root: TreeNode | null) => number) {
  it.each([
    [
      [1, 3, 2, 5, 3, null, 9],
      4,
    ],
    [
      [1, 3, 2, 5, null, null, 9, 6, null, 7],
      7,
    ],
    [
      [1, 3, 2, 5],
      2,
    ],
    [
      [1, 3, 2, 5, 3, null, 9],
      4,
    ],
  ])('示例%#', (root, expected) => {
    expect(fn(createTreeNode(root))).toBe(expected)
  })
}
