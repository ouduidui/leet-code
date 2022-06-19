import { describe, expect, it } from 'vitest'
import { findFrequentTreeSum } from '.'
import type { TreeNode } from '~/utils/treeNode'
import { createTreeNode } from '~/utils/treeNode'

describe('出现次数最多的子树元素和', () => {
  testCase(findFrequentTreeSum)
})

function testCase(fn: (root: TreeNode | null) => number[]) {
  it.each([
    [
      [5, 2, -3],
      [2, -3, 4],
    ],
    [
      [5, 2, -5],
      [2],
    ],
  ])('示例%#', (root, expected) => {
    expect(fn(createTreeNode(root))).toStrictEqual(expected)
  })
}
