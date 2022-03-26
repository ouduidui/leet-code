import { describe, expect, it } from 'vitest'
import { maxPathSum } from '.'
import type { TreeNode } from '~/utils/treeNode'
import { createTreeNode } from '~/utils/treeNode'

describe('二叉树中的最大路径和', () => {
  testCase(maxPathSum)
})

function testCase(fn: (root: TreeNode | null) => number) {
  it.each([
    [[1, 2, 3], 6],
    [[-10, 9, 20, null, null, 15, 7], 42],
    [[-3], -3],
  ])('示例%#', (root, expected) => {
    expect(fn(createTreeNode(root))).toBe(expected)
  })
}
