import { describe, expect, it } from 'vitest'
import { findDuplicateSubtrees } from '.'
import type { TreeNode } from '~/utils/treeNode'
import { createTreeNode } from '~/utils/treeNode'

describe('寻找重复的子树', () => {
  describe('使用序列化进行唯一表示', () => testCase(findDuplicateSubtrees))
  describe('使用三元组进行唯一表示', () => testCase(findDuplicateSubtrees))
})

function testCase(fn: (root: TreeNode | null) => Array<TreeNode | null>) {
  it.each([
    [
      [1, 2, 3, 4, null, 2, 4, null, null, 4],
      [[2, 4], [4]],
    ],
    [
      [2, 1, 1],
      [[1]],
    ],
    [
      [2, 2, 2, 3, null, 3, null],
      [[2, 3], [3]],
    ],
  ])('示例%#', (root, expected) => {
    expect(fn(createTreeNode(root)).sort((a, b) => (a as TreeNode).val - (b as TreeNode).val))
      .toStrictEqual(expected.map(node => createTreeNode(node)).sort((a, b) => (a as TreeNode).val - (b as TreeNode).val))
  })
}
