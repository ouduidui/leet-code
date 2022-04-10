import { describe, expect, it } from 'vitest'
import { lowestCommonAncestor, lowestCommonAncestor2 } from '.'
import type { TreeNode } from '~/utils/treeNode'
import { createTreeNode, findNode } from '~/utils/treeNode'

describe('二叉树的最近公共祖先', () => {
  describe('递归', () => {
    testCase(lowestCommonAncestor)
  })

  describe('存储父节点', () => {
    testCase(lowestCommonAncestor2)
  })
})

function testCase(fn: (root: TreeNode | null, p: TreeNode | null, q: TreeNode | null) => TreeNode | null) {
  it.each([
    [[3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], 5, 1, 3],
    [[3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], 5, 4, 5],
    [[1, 2], 1, 2, 1],
  ])('示例%#', (_root, _p, _q, _expected) => {
    const root = createTreeNode(_root)
    const p = findNode(root!, _p)
    const q = findNode(root!, _q)
    const expected = findNode(root!, _expected)
    expect(fn(root, p, q)).toBe(expected)
  })
}
