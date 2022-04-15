import { describe, expect, it } from 'vitest'
import { removeElements, removeElements2 } from '.'
import type { ListNode } from '~/utils/listNode'
import { createListNode } from '~/utils/listNode'

describe('移除链表元素', () => {
  describe('递归', () => {
    testCase(removeElements)
  })

  describe('迭代', () => {
    testCase(removeElements2)
  })
})

function testCase(fn: (head: ListNode | null, val: number) => ListNode | null) {
  it.each([
    [[1, 2, 6, 3, 4, 5, 6], 6, [1, 2, 3, 4, 5]],
    [[], 1, []],
    [[7, 7, 7, 7], 7, []],
  ])('示例%#', (head, val, expected) => {
    expect(fn(createListNode(head), val)).toStrictEqual(createListNode(expected))
  })
}
