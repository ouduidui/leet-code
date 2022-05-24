import { describe, expect, it } from 'vitest'
import { preorder, preorder2 } from '.'
import type { Node } from '~/utils/nAryTree'
import { createNAryTree } from '~/utils/nAryTree'

describe('N 叉树的前序遍历', () => {
  describe('递归', () => {
    testCase(preorder)
  })

  describe('迭代', () => {
    testCase(preorder2)
  })
})

function testCase(fn: (root: Node | null) => number[]) {
  it.each([
    [
      [1, null, 3, 2, 4, null, 5, 6],
      [1, 3, 5, 6, 2, 4],
    ],
    [
      [
        1, null, 2, 3, 4, 5, null, null, 6, 7, null, 8, null, 9, 10, null, null, 11, null, 12, null, 13, null, null, 14,
      ],
      [1, 2, 3, 6, 7, 11, 14, 4, 8, 12, 5, 9, 13, 10],
    ],
  ])('示例%#', (root, expected) => {
    expect(fn(createNAryTree(root))).toStrictEqual(expected)
  })
}
