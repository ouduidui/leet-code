import { describe, expect, it } from 'vitest'
import { reverseBetween, reverseBetween2 } from '.'
import type { ListNode } from '~/utils/listNode'
import { createListNode } from '~/utils/listNode'

describe('反转链表 II', () => {
  describe('穿针引线', () => {
    testCase(reverseBetween)
  })
  describe('穿针引线(头插法)', () => {
    testCase(reverseBetween2)
  })
})

function testCase(
  fn: (head: ListNode | null, left: number, right: number) => ListNode | null,
) {
  it.each([
    [[1, 2, 3, 4, 5], 2, 4, [1, 4, 3, 2, 5]],
    [[5], 1, 1, [5]],
  ])('示例%#', (head, left, right, expected) => {
    expect(fn(createListNode(head), left, right)).toStrictEqual(createListNode(expected))
  })
}
