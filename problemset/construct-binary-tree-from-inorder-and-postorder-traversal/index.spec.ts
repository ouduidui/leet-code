import { describe, expect, it } from 'vitest'
import { buildTree, buildTree2 } from '.'
import type { TreeNode } from '~/utils/treeNode'
import { createTreeNode } from '~/utils/treeNode'

describe('从中序与后序遍历序列构造二叉树', () => {
  describe('递归', () => {
    testCase(buildTree)
  })

  describe('迭代', () => {
    testCase(buildTree2)
  })
})

function testCase(
  fn: (inorder: number[], postorder: number[]) => TreeNode | null,
) {
  it.each([
    [
      [9, 3, 15, 20, 7],
      [9, 15, 7, 20, 3],
      [3, 9, 20, null, null, 15, 7],
    ],
    [[-1], [-1], [-1]],
  ])('示例%#', (inorder, postorder, expected) => {
    expect(fn(inorder, postorder)).toStrictEqual(createTreeNode(expected))
  })
}
