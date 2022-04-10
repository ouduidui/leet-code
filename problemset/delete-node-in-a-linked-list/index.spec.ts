import { describe, expect, it } from 'vitest'
import { deleteNode } from '.'
import type { ListNode } from '~/utils/listNode'
import { createListNode } from '~/utils/listNode'

describe('删除链表中的节点', () => {
  testCase(deleteNode)
})

function testCase(fn: (root: ListNode | null) => void) {
  it.each([
    [[4, 5, 1, 9], 5, [4, 1, 9]],
    [[4, 5, 1, 9], 1, [4, 5, 9]],
  ])('示例%#', (_root, _node, expected) => {
    const root = createListNode(_root)
    const node = findNode(root!, _node)
    fn(node)
    expect(root).toStrictEqual(createListNode(expected))
  })
}

function findNode(root: ListNode, val: number): ListNode |null {
  let cur: ListNode |null = root

  while (cur !== null) {
    if (cur.val === val) return cur
    cur = cur.next
  }

  return null
}
