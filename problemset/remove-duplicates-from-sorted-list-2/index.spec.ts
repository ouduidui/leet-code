import { describe, expect, it } from 'vitest'
import { deleteDuplicates } from '.'
import type { ListNode } from '~/utils/listNode'
import { createListNode } from '~/utils/listNode'

describe('删除排序链表的重复元素 II', () => {
  testCase(deleteDuplicates)
})

function testCase(fn: (head: ListNode | null) => ListNode | null) {
  it.each([
    [[1, 2, 3, 3, 4, 4, 5], [1, 2, 5]],
    [[1, 1, 1, 2, 3], [2, 3]],
  ])('示例%#', (head, expected) => {
    expect(fn(createListNode(head))).toStrictEqual(createListNode(expected))
  })
}
