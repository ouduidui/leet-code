import { describe, expect, it } from 'vitest'
import { flatten, flatten2, flatten3 } from '.'
import type { TreeNode } from '~/utils/treeNode'
import { createTreeNode } from '~/utils/treeNode'

describe('二叉树展开为链表', () => {
  describe('前序遍历', () => {
    testCase(flatten)
  })

  describe('前序遍历和展开同步进行', () => {
    testCase(flatten2)
  })

  describe('寻找前驱节点', () => {
    testCase(flatten3)
  })
})

function testCase(fn: (root: TreeNode | null) => void) {
  it.each([
    [
      [1, 2, 5, 3, 4, null, 6],
      [1, null, 2, null, 3, null, 4, null, 5, null, 6],
    ],
    [[], []],
    [[0], [0]],
  ])('示例%#', (arr, expected) => {
    const root = createTreeNode(arr)
    fn(root)
    expect(root).toStrictEqual(createTreeNode(expected))
  })
}
