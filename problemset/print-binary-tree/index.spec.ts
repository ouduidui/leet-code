import { describe, expect, it } from 'vitest'
import { printTree } from '.'
import type { TreeNode } from '~/utils/treeNode'
import { createTreeNode } from '~/utils/treeNode'

describe('输出二叉树', () => {
  testCase(printTree)
})

function testCase(fn: (root: TreeNode | null) => string[][]) {
  it.each([
    [
      [1, 2],
      [['', '1', ''],
        ['2', '', '']],
    ],
    [
      [1, 2, 3, null, 4],
      [
        ['', '', '', '1', '', '', ''],
        ['', '2', '', '', '', '3', ''],
        ['', '', '4', '', '', '', ''],
      ],
    ],
  ])('示例%#', (root, expected) => {
    expect(fn(createTreeNode(root))).toStrictEqual(expected)
  })
}
