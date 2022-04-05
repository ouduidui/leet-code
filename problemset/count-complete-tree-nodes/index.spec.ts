import { describe, expect, it } from 'vitest'
import { countNodes, countNodes2 } from '.'
import type { TreeNode } from '~/utils/treeNode'
import { createTreeNode } from '~/utils/treeNode'

describe('完全二叉树的节点个数', () => {
  describe('暴力递归', () => {
    testCase(countNodes)
  })

  describe('二分查找 + 位运算', () => {
    testCase(countNodes2)
  })
})

function testCase(fn: (root: TreeNode | null) => number) {
  it.each([
    [[1, 2, 3, 4, 5, 6], 6],
    [[], 0],
    [[1], 1],
  ])('示例%#', (arr, expected) => {
    expect(fn(createTreeNode(arr))).toBe(expected)
  })
}
