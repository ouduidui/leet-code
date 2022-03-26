import { describe, expect, it } from 'vitest'
import { maxDepth, maxDepth2 } from '.'
import type { TreeNode } from '~/utils/treeNode'
import { createTreeNode } from '~/utils/treeNode'
// need refactor
describe('二叉树的最大深度', () => {
  describe('深度优先遍历', () => {
    testCase(maxDepth)
  })

  describe('广度优先遍历', () => {
    testCase(maxDepth2)
  })
})

function testCase(fn: (root: TreeNode | null) => number) {
  it('示例', () => {
    const root = createTreeNode([3, 9, 20, null, null, 15, 7])
    const expected = 3
    expect(fn(root)).toBe(expected)
  })
}
