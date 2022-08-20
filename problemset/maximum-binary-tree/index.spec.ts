import { describe, expect, it } from 'vitest'
import { constructMaximumBinaryTree, constructMaximumBinaryTree2 } from '.'
import type { TreeNode } from '~/utils/treeNode'
import { createTreeNode } from '~/utils/treeNode'

describe('最大二叉树', () => {
  describe('递归', () => testCase(constructMaximumBinaryTree))
  describe('单调栈', () => testCase(constructMaximumBinaryTree2))
})

function testCase(fn: (nums: number[]) => TreeNode | null) {
  it.each([
    [
      [3, 2, 1, 6, 0, 5],
      [6, 3, 5, null, 2, 0, null, null, 1],
    ],
    [
      [3, 2, 1],
      [3, null, 2, null, 1],
    ],
  ])('示例%#', (nums, expected) => {
    expect(fn(nums)).toStrictEqual(createTreeNode(expected))
  })
}
