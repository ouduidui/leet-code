import { describe, expect, it } from 'vitest'
import { largestValues } from '.'
import type { TreeNode } from '~/utils/treeNode'
import { createTreeNode } from '~/utils/treeNode'

describe('在每个树行中找最大值', () => {
  testCase(largestValues)
})

function testCase(fn: (root: TreeNode | null) => number[]) {
  it.each([
    [
      [1, 3, 2, 5, 3, null, 9],
      [1, 3, 9],
    ],
    [
      [1, 2, 3],
      [1, 3],
    ],
  ])('示例%#', (root, expected) => {
    expect(fn(createTreeNode(root))).toStrictEqual(expected)
  })
}
