import { describe, expect, it } from 'vitest'
import { CBTInserter, CBTInserter2 } from '.'
import type { TreeNode } from '~/utils/treeNode'
import { createTreeNode } from '~/utils/treeNode'

describe('完全二叉树插入器', () => {
  describe('队列', () => testCase(CBTInserter))
  describe('二进制', () => testCase(CBTInserter2))
})

type CtorType = new (root: TreeNode | null) => {
  insert: (val: number) => number
  get_root: () => TreeNode | null
}

function testCase(Ctor: CtorType) {
  it('示例', () => {
    const cBTInserter = new Ctor(createTreeNode([1, 2]))
    expect(cBTInserter.insert(3)).toBe(1)
    expect(cBTInserter.insert(4)).toBe(2)
    expect(cBTInserter.get_root()).toStrictEqual(createTreeNode([1, 2, 3, 4]))
  })
}
