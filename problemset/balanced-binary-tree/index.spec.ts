import { describe, expect, it } from 'vitest'
import { isBalanced } from '.'
import type { TreeNode } from '~/utils/treeNode'
import { createTreeNode } from '~/utils/treeNode'

describe('平衡二叉树', () => {
  testCase(isBalanced)
})

function testCase(fn: (root: TreeNode | null) => boolean) {
  it.each([
    [[3, 9, 20, null, null, 15, 7], true],
    [[1, 2, 2, 3, 3, null, null, 4, 4], false],
    [[], true],
  ])('示例%#', (root, expected) => {
    expect(fn(createTreeNode(root))).toBe(expected)
  })
}
