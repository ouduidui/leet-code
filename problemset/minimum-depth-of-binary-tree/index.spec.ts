import { describe, expect, it } from 'vitest'
import { minDepth, minDepth2 } from '.'
import type { TreeNode } from '~/utils/treeNode'
import { createTreeNode } from '~/utils/treeNode'

describe('二叉树的最小深度', () => {
  describe('深度优先搜索', () => {
    testCase(minDepth)
  })
  describe('广度优先搜索', () => {
    testCase(minDepth2)
  })
})

function testCase(fn: (root: TreeNode | null) => number) {
  it.each([
    [[3, 9, 20, null, null, 15, 7], 2],
    [[2, null, 3, null, 4, null, 5, null, 6], 5],
  ])('示例%#', (root, expected) => {
    expect(fn(createTreeNode(root))).toBe(expected)
  })
}
