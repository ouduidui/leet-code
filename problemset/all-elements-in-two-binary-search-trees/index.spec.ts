import { describe, expect, it } from 'vitest'
import { getAllElements } from '.'
import type { TreeNode } from '~/utils/treeNode'
import { createTreeNode } from '~/utils/treeNode'

describe('两颗二叉搜索树中的所有元素', () => {
  testCase(getAllElements)
})

function testCase(fn: (root1: TreeNode | null, root2: TreeNode | null) => number[]) {
  it.each([
    [[2, 1, 4], [1, 0, 3], [0, 1, 1, 2, 3, 4]],
    [[1, null, 8], [8, 1], [1, 1, 8, 8]],
  ])('示例%#', (root1, root2, expected) => {
    expect(fn(createTreeNode(root1), createTreeNode(root2))).toStrictEqual(expected)
  })
}
