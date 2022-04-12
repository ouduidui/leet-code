import { describe, expect, it } from 'vitest'
import { binaryTreePaths, binaryTreePaths2 } from '.'
import type { TreeNode } from '~/utils/treeNode'
import { createTreeNode } from '~/utils/treeNode'

describe('二叉树的所有路径', () => {
  describe('深度优先遍历', () => {
    testCase(binaryTreePaths)
  })

  describe('广度优先遍历', () => {
    testCase(binaryTreePaths2)
  })
})

function testCase(fn: (root: TreeNode | null) => string[]) {
  it.each([
    [[1, 2, 3, null, 5], ['1->2->5', '1->3']],
    [[1], ['1']],
  ])('示例%#', (root, expected) => {
    expect(fn(createTreeNode(root)).sort()).toStrictEqual(expected.sort())
  })
}
