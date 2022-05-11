import { describe, expect, it } from 'vitest'
import { deserialize, serialize } from '.'
import type { TreeNode } from '~/utils/treeNode'
import { createTreeNode } from '~/utils/treeNode'

describe('序列化和反序列化二叉搜索树', () => {
  testCase(serialize, deserialize)
})

function testCase(
  serialize: (root: TreeNode | null) => string,
  deserialize: (data: string) => TreeNode | null,
) {
  it.each([
    [[2, 1, 3]],
    [[]],
  ])('示例%#', (arr) => {
    const str = serialize(createTreeNode([...arr]))
    expect(typeof str).toBe('string')
    expect(deserialize(str)).toStrictEqual(createTreeNode([...arr]))
  })
}
