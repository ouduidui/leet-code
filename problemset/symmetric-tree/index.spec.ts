import { describe, expect, it } from 'vitest'
import { isSymmetric, isSymmetric2 } from '.'
import type { TreeNode } from '~/utils/treeNode'
import { createTreeNode } from '~/utils/treeNode'

describe('对称二叉树', () => {
  describe('递归', () => {
    testCase(isSymmetric)
  })

  describe('迭代', () => {
    testCase(isSymmetric2)
  })
})

function testCase(fn: (root: TreeNode | null) => boolean) {
  it.each([
    [[1, 2, 2, 3, 4, 4, 3], true],
    [[1, 2, 2, null, 3, null, 3], false],
  ])('示例%#', (root, expected) => {
    expect(fn(createTreeNode(root))).toBe(expected)
  })
}
