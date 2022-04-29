import { describe, expect, it } from 'vitest'
import { oddEvenList } from '.'
import type { ListNode } from '~/utils/listNode'
import { createListNode } from '~/utils/listNode'

describe('奇偶链表', () => {
  testCase(oddEvenList)
})

function testCase(fn: (head: ListNode | null) => ListNode | null) {
  it.each([
    [
      [1, 2, 3, 4, 5],
      [1, 3, 5, 2, 4],
    ],
    [
      [2, 1, 3, 5, 6, 4, 7],
      [2, 3, 6, 7, 1, 5, 4],
    ],
  ])('示例%#', (head, expected) => {
    expect(fn(createListNode(head))).toStrictEqual(createListNode(expected))
  })
}
