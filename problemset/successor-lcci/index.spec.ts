import { describe, expect, it } from 'vitest'
import { inorderSuccessor, inorderSuccessor2 } from '.'
import type { TreeNode } from '~/utils/treeNode'
import { createTreeNode, findNode } from '~/utils/treeNode'

describe('后继者', () => {
  describe('中序遍历', () => {
    testCase(inorderSuccessor)
  })

  describe('利用二叉搜索树的性质', () => {
    testCase(inorderSuccessor2)
  })
})

function testCase(fn: (root: TreeNode | null, p: TreeNode | null) => TreeNode | null) {
  it.each([
    [[2, 1, 3], 1, 2],
    [[5, 3, 6, 2, 4, null, null, 1], 6, null],
  ])('示例%#', (_root, _p, _expected) => {
    const root = createTreeNode(_root)
    const p = findNode(root!, _p)
    const expected = _expected === null ? null : findNode(root!, _expected)
    expect(fn(root, p)).toBe(expected)
  })
}
