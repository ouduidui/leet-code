import { expect, it } from 'vitest'
import { BSTIterator } from '.'
import { createTreeNode } from '~/utils/treeNode'

it('二叉搜索树迭代器', () => {
  const bst = new BSTIterator(createTreeNode([7, 3, 15, null, null, 9, 20]))
  expect(bst.next()).toBe(3)
  expect(bst.next()).toBe(7)
  expect(bst.hasNext()).toBe(true)
  expect(bst.next()).toBe(9)
  expect(bst.hasNext()).toBe(true)
  expect(bst.next()).toBe(15)
  expect(bst.hasNext()).toBe(true)
  expect(bst.next()).toBe(20)
  expect(bst.hasNext()).toBe(false)
})
