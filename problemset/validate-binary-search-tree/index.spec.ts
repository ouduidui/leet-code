import { describe, expect, it } from 'vitest'
import { isValidBST, isValidBST2 } from '.'
import type { TreeNode } from '~/utils/treeNode'
import { createTreeNode } from '~/utils/treeNode'

describe('验证二叉搜索树', () => {
  describe('递归', () => {
    testCase(isValidBST)
  })

  describe('中序遍历', () => {
    testCase(isValidBST2)
  })
})

function testCase(fn: (root: TreeNode | null) => boolean) {
  it.each([
    [[2, 1, 3], true],
    [[5, 1, 4, null, null, 3, 6], false],
    [[2, 2, 2], false],
    [[5, 4, 6, null, null, 3, 7], false],
  ])('示例%#', (root, expected) => {
    expect(fn(createTreeNode(root))).toBe(expected)
  })
}
