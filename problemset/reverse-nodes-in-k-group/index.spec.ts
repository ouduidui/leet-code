import { describe, expect, it } from 'vitest'
import { reverseKGroup } from '.'
import type { ListNode } from '~/utils/listNode'
import { createListNode } from '~/utils/listNode'
// need refactor
describe('K个一组翻转链表', () => {
  describe('模拟', () => {
    testCase(reverseKGroup)
  })
})

function testCase(fn: (head: ListNode | null, k: number) => ListNode | null) {
  it('示例一', () => {
    const head: ListNode = createListNode([1, 2, 3, 4, 5]) as ListNode
    const k = 2
    const expected: ListNode = createListNode([2, 1, 4, 3, 5]) as ListNode

    expect(fn(head, k)).toEqual(expected)
  })

  it('示例二', () => {
    const head: ListNode = createListNode([1, 2, 3, 4, 5]) as ListNode
    const k = 3
    const expected: ListNode = createListNode([3, 2, 1, 4, 5]) as ListNode

    expect(fn(head, k)).toEqual(expected)
  })

  it('示例三', () => {
    const head: ListNode = createListNode([1, 2, 3, 4, 5]) as ListNode
    const k = 1
    const expected: ListNode = createListNode([1, 2, 3, 4, 5]) as ListNode

    expect(fn(head, k)).toEqual(expected)
  })

  it('示例四', () => {
    const head: ListNode = createListNode([1]) as ListNode
    const k = 1
    const expected: ListNode = createListNode([1]) as ListNode

    expect(fn(head, k)).toEqual(expected)
  })
}
