import { describe, expect, it } from 'vitest'
import { insertionSortList } from '.'
import type { ListNode } from '~/utils/listNode'
import { createListNode } from '~/utils/listNode'

describe('对链表进行插入排序', () => {
  testCase(insertionSortList)
})

function testCase(fn: (head: ListNode | null) => ListNode | null) {
  it.each([
    [
      [4, 2, 1, 3],
      [1, 2, 3, 4],
    ],
    [
      [-1, 5, 3, 4, 0],
      [-1, 0, 3, 4, 5],
    ],
  ])('示例%#', (head, expected) => {
    expect(fn(createListNode(head))).toStrictEqual(createListNode(expected))
  })
}
