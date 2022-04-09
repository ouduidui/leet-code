
import { describe, expect, it } from 'vitest'
import { lowestCommonAncestor } from '.'
import type { TreeNode } from '~/utils/treeNode'
import { createTreeNode } from '~/utils/treeNode'

describe('二叉搜索树的最近公共祖先', () => {
  testCase(lowestCommonAncestor)
})

function testCase(fn: (
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null,
) => TreeNode | null) {
  it.each([
    [[6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], 2, 8, 6],
    [[6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], 2, 4, 2],
  ])('示例%#', (_root, _p, _q, _expected) => {
    const root = createTreeNode(_root)
    const p = findNode(root!, _p)
    const q = findNode(root!, _q)
    const expected = findNode(root!, _expected)
    expect(fn(root, p, q)).toBe(expected)
  })
}

function findNode(root: TreeNode, val: number): TreeNode | null {
  const queue: TreeNode[] = [root]
  while (queue.length) {
    const node = queue.pop()!
    if (node.val === val) return node

    node.left && queue.unshift(node.left)
    node.right && queue.unshift(node.right)
  }
  return null
}
