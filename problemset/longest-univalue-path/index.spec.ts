import { describe, expect, it } from 'vitest'
import { longestUnivaluePath } from '.'
import type { TreeNode } from '~/utils/treeNode'
import { createTreeNode } from '~/utils/treeNode'

describe('最长同值路径', () => {
  testCase(longestUnivaluePath)
})

function testCase(fn: (root: TreeNode | null) => number) {
  it.each([
    [
      [5, 4, 5, 1, 1, 5],
      2,
    ],
    [
      [1, 4, 5, 4, 4, 5],
      2,
    ],
  ])('示例%#', (root, expected) => {
    expect(fn(createTreeNode(root))).toBe(expected)
  })
}
