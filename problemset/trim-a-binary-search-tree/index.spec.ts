import { describe, expect, it } from 'vitest'
import { trimBST, trimBST2 } from '.'
import type { TreeNode } from '~/utils/treeNode'
import { createTreeNode } from '~/utils/treeNode'

describe('修剪二叉搜索树', () => {
  describe('递归', () => testCase(trimBST))
  describe('迭代', () => testCase(trimBST2))
})

function testCase(fn: (root: TreeNode | null, low: number, high: number) => TreeNode | null) {
  it.each([
    [
      [1, 0, 2], 1, 2, [1, null, 2],
    ],
    [
      [3, 0, 4, null, 2, null, null, 1], 1, 3, [3, 2, null, 1],
    ],
  ])('示例%#', (root, low, high, expected) => {
    expect(fn(createTreeNode(root), low, high)).toStrictEqual(createTreeNode(expected))
  })
}
