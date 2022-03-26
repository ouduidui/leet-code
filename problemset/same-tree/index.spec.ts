import { describe, expect, it } from 'vitest'
import { isSameTree, isSameTree2 } from '.'
import type { TreeNode } from '~/utils/treeNode'
import { createTreeNode } from '~/utils/treeNode'
// need refactor
describe('相同的树', () => {
  describe('深度优先搜索', () => {
    testCase(isSameTree)
  })

  describe('广度优先搜索', () => {
    testCase(isSameTree2)
  })
})

function testCase(fn: (p: TreeNode | null, g: TreeNode | null) => boolean) {
  it('示例一', () => {
    const p = createTreeNode([1, 2, 3])
    const q = createTreeNode([1, 2, 3])
    const expected = true
    expect(fn(p, q)).toBe(expected)
  })

  it('示例二', () => {
    const p = createTreeNode([1, 2])
    const q = createTreeNode([1, null, 2])
    const expected = false
    expect(fn(p, q)).toBe(expected)
  })

  it('示例三', () => {
    const p = createTreeNode([1, 2, 1])
    const q = createTreeNode([1, 1, 2])
    const expected = false
    expect(fn(p, q)).toBe(expected)
  })
}
