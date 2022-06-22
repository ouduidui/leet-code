import { describe, expect, it } from 'vitest'
import { findBottomLeftValue } from '.'
import type { TreeNode } from '~/utils/treeNode'
import { createTreeNode } from '~/utils/treeNode'

describe('找树左下角的值', () => {
  describe('深度优先遍历', () => {
    testCase(findBottomLeftValue)
  })

  describe('广度优先遍历', () => {
    testCase(findBottomLeftValue)
  })
})

function testCase(fn: (root: TreeNode | null) => number) {
  it.each([
    [
      [2, 1, 3],
      1,
    ],
    [
      [1, 2, 3, 4, null, 5, 6, null, null, 7],
      7,
    ],
  ])('示例%#', (root, expected) => {
    expect(fn(createTreeNode(root))).toBe(expected)
  })
}
