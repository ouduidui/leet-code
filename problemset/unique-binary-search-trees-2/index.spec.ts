import { describe, expect, it } from 'vitest'
import { generateTrees } from '.'
import type { TreeNode } from '~/utils/treeNode'
import { createTreeNode } from '~/utils/treeNode'

describe('不同的二叉搜索数 II', () => {
  testCase(generateTrees)
})

function testCase(fn: (n: number) => Array<TreeNode | null>) {
  it.each([
    [
      3,
      [
        [1, null, 2, null, 3],
        [1, null, 3, 2],
        [2, 1, 3],
        [3, 1, null, null, 2],
        [3, 2, null, 1],
      ],
    ],
    [1, [[1]]],
  ])('示例%#', (n, arr) => {
    const expected = arr.map(i => createTreeNode(i))
    expect(fn(n)).toStrictEqual(expected)
  })
}
