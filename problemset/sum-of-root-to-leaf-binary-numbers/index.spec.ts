import { describe, expect, it } from 'vitest'
import { sumRootToLeaf, sumRootToLeaf2 } from '.'
import type { TreeNode } from '~/utils/treeNode'
import { createTreeNode } from '~/utils/treeNode'

describe(' 从根到叶的二进制数之和', () => {
  describe('递归', () => {
    testCase(sumRootToLeaf)
  })

  describe('递归', () => {
    testCase(sumRootToLeaf2)
  })
})

function testCase(fn: (root: TreeNode | null) => number) {
  it.each([
    [
      [1, 0, 1, 0, 1, 0, 1],
      22,
    ],
    [
      [0],
      0,
    ],
  ])('示例%#', (root, expected) => {
    expect(fn(createTreeNode(root))).toBe(expected)
  })
}
