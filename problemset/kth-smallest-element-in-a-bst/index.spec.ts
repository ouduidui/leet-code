
import { describe, expect, it } from 'vitest'
import { kthSmallest, kthSmallest2 } from '.'
import type { TreeNode } from '~/utils/treeNode'
import { createTreeNode } from '~/utils/treeNode'

describe('二叉搜索树中第K小的元素', () => {
  describe('中序遍历', () => {
    testCase(kthSmallest)
  })

  describe('中序遍历', () => {
    testCase(kthSmallest2)
  })
})

function testCase(fn: (root: TreeNode | null, k: number) => number) {
  it.each([
    [[3, 1, 4, null, 2], 1, 1],
    [[5, 3, 6, 2, 4, null, null, 1], 3, 3],
  ])('示例%#', (root, k, expected) => {
    expect(fn(createTreeNode(root), k)).toBe(expected)
  })
}
