import { describe, expect, it } from 'vitest'
import { addOneRow } from '.'
import type { TreeNode } from '~/utils/treeNode'
import { createTreeNode } from '~/utils/treeNode'

describe('在二叉树中增加一行', () => {
  testCase(addOneRow)
})

function testCase(fn: (root: TreeNode | null, val: number, depth: number) => TreeNode | null) {
  it.each([
    [
      [4, 2, 6, 3, 1, 5],
      1,
      2,
      [4, 1, 1, 2, null, null, 6, 3, 1, 5],
    ],
    [
      [4, 2, null, 3, 1],
      1,
      3,
      [4, 2, null, 1, 1, 3, null, null, 1],
    ],
  ])('示例%#', (root, val, depth, expected) => {
    expect(fn(createTreeNode(root), val, depth)).toStrictEqual(createTreeNode(expected))
  })
}
