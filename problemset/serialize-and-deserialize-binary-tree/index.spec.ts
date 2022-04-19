import { describe, expect, it } from 'vitest'
import { deserialize, serialize } from '.'
import type { TreeNode } from '~/utils/treeNode'
import { createTreeNode } from '~/utils/treeNode'

describe('二叉树的序列化与反序列化', () => {
  testCase(serialize, deserialize)
})

function testCase(
  serialize: (root: TreeNode | null) => string,
  deserialize: (data: string) => TreeNode | null,
) {
  it.each([
    [[1, 2, 3, null, null, 4, 5], '1,2,Node,Node,3,4,Node,Node,5,Node,Node,'],
    [[], 'Node,'],
    [[1], '1,Node,Node,'],
    [[1, 2], '1,2,Node,Node,Node,'],
  ])('示例%#', (arr, str) => {
    const root = createTreeNode(arr)
    expect(serialize(root)).toBe(str)
    expect(deserialize(str)).toStrictEqual(root)
  })
}
