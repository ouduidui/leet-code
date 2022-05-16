import { describe, expect, it } from 'vitest'
import { isSameTree, isSameTree2 } from '.'
import type { TreeNode } from '~/utils/treeNode'
import { createTreeNode } from '~/utils/treeNode'

describe('相同的树', () => {
  describe('深度优先搜索', () => {
    testCase(isSameTree)
  })

  describe('广度优先搜索', () => {
    testCase(isSameTree2)
  })
})

function testCase(fn: (p: TreeNode | null, g: TreeNode | null) => boolean) {
  it.each([
    [[1, 2, 3], [1, 2, 3], true],
    [[1, 2], [1, null, 2], false],
    [[1, 2, 1], [1, 1, 2], false],
  ])('示例%#', (p, q, expected) => {
    expect(fn(createTreeNode(p), createTreeNode(q))).toBe(expected)
  })
}
