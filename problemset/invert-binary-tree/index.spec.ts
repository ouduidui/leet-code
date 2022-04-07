
import { describe, expect, it } from 'vitest'
import { invertTree, invertTree2 } from '.'
import type { TreeNode } from '~/utils/treeNode'
import { createTreeNode } from '~/utils/treeNode'

describe('翻转二叉树', () => {
  describe('递归', () => {
    testCase(invertTree)
  })

  describe('迭代', () => {
    testCase(invertTree2)
  })
})

function testCase(fn: (root: TreeNode | null) => TreeNode | null) {
  it.each([
    [[4, 2, 7, 1, 3, 6, 9], [4, 7, 2, 9, 6, 3, 1]],
    [[2, 1, 3], [2, 3, 1]],
    [[], []],
  ])('示例%#', (root, expected) => {
    expect(fn(createTreeNode(root))).toStrictEqual(createTreeNode(expected))
  })
}
