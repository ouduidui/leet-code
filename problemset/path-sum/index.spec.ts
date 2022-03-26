import { describe, expect, it } from 'vitest'
import { hasPathSum, hasPathSum2 } from '.'
import type { TreeNode } from '~/utils/treeNode'
import { createTreeNode } from '~/utils/treeNode'
// need refactor
describe('路径总和', () => {
  testCase(hasPathSum)
  testCase(hasPathSum2)
})

function testCase(fn: (root: TreeNode | null, targetSum: number) => boolean) {
  it('示例一', () => {
    const root = createTreeNode([
      5,
      4,
      8,
      11,
      null,
      13,
      4,
      7,
      2,
      null,
      null,
      null,
      1,
    ])
    const targetSum = 22
    const expected = true
    expect(fn(root, targetSum)).toBe(expected)
  })

  it('示例二', () => {
    const root = createTreeNode([1, 2, 3])
    const targetSum = 5
    const expected = false
    expect(fn(root, targetSum)).toBe(expected)
  })

  it('示例三', () => {
    const root = createTreeNode([])
    const targetSum = 0
    const expected = false
    expect(fn(root, targetSum)).toBe(expected)
  })
}
