import { describe, expect, it } from 'vitest'
import { isUnivalTree, isUnivalTree2 } from '.'
import type { TreeNode } from '~/utils/treeNode'
import { createTreeNode } from '~/utils/treeNode'

describe('单值二叉树', () => {
  describe('广度优先遍历', () => {
    testCase(isUnivalTree)
  })

  describe('深度优先遍历', () => {
    testCase(isUnivalTree2)
  })
})

function testCase(fn: (root: TreeNode | null) => boolean) {
  it.each([
    [
      [1, 1, 1, 1, 1, null, 1],
      true,
    ],
    [
      [2, 2, 2, 5, 2],
      false,
    ],
  ])('示例%#', (root, expected) => {
    expect(fn(createTreeNode(root))).toBe(expected)
  })
}
