import { describe, expect, it } from 'vitest'
import { findTarget, findTarget2, findTarget3 } from '.'
import type { TreeNode } from '~/utils/treeNode'
import { createTreeNode } from '~/utils/treeNode'

describe('两数之和 IV - 输入 BST', () => {
  describe('广度优先搜索 + 哈希表', () => {
    testCase(findTarget)
  })

  describe('广度优先搜索 + 哈希表', () => {
    testCase(findTarget2)
  })

  describe('广度优先搜索 + 哈希表', () => {
    testCase(findTarget3)
  })
})

function testCase(fn: (root: TreeNode | null, k: number) => boolean) {
  it.each([
    [[5, 3, 6, 2, 4, null, 7], 9, true],
    [[5, 3, 6, 2, 4, null, 7], 28, false],
  ])('示例%#', (root, k, expected) => {
    expect(fn(createTreeNode(root), k)).toBe(expected)
  })
}
