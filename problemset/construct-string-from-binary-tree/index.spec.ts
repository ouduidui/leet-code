import { describe, expect, it } from 'vitest'
import { tree2str, tree2str2 } from '.'
import type { TreeNode } from '~/utils/treeNode'
import { createTreeNode } from '~/utils/treeNode'

describe('根据二叉树创建字符串', () => {
  describe('递归', () => {
    testCase(tree2str)
  })

  describe('迭代', () => {
    testCase(tree2str2)
  })
})

function testCase(fn: (root: TreeNode | null) => string) {
  it.each([
    [[1, 2, 3, 4], '1(2(4))(3)'],
    [[1, 2, 3, null, 4], '1(2()(4))(3)'],
  ])('示例%#', (root, expected) => {
    expect(fn(createTreeNode(root))).toBe(expected)
  })
}
