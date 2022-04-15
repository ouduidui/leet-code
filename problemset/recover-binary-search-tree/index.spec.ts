import { describe, expect, it } from 'vitest'
import { recoverTree, recoverTree2, recoverTree3 } from '.'
import type { TreeNode } from '~/utils/treeNode'
import { createTreeNode } from '~/utils/treeNode'

describe('恢复二叉搜索树', () => {
  describe('显式中序遍历', () => {
    testCase(recoverTree)
  })

  describe('隐式中序遍历', () => {
    testCase(recoverTree2)
  })

  describe('Morris 中序遍历', () => {
    testCase(recoverTree3)
  })
})

function testCase(fn: (root: TreeNode | null) => void) {
  it.each([
    [[1, 3, null, null, 2], [3, 1, null, null, 2]],
    [[3, 1, 4, null, null, 2], [2, 1, 4, null, null, 3]],
  ])('示例%#', (arr, expected) => {
    const root = createTreeNode(arr)
    fn(root)
    expect(root).toStrictEqual(createTreeNode(expected))
  })
}
