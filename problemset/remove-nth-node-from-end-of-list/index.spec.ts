import { describe, expect, it } from 'vitest'
import { removeNthFromEnd, removeNthFromEnd2, removeNthFromEnd3 } from '.'
import type { ListNode } from '~/utils/listNode'
import { createListNode } from '~/utils/listNode'
// need refactor
describe('删除链表的倒数第N个结点', () => {
  describe('暴力解法', () => {
    testCase(removeNthFromEnd)
  })

  describe('计算链表长度', () => {
    testCase(removeNthFromEnd2)
  })

  describe('双指针', () => {
    testCase(removeNthFromEnd3)
  })
})

function testCase(fn: (head: ListNode | null, n: number) => ListNode | null) {
  it('示例一', () => {
    const head: ListNode | null = createListNode([1, 2, 3, 4, 5])
    const n = 2
    const expected: ListNode | null = createListNode([1, 2, 3, 5])

    expect(fn(head, n)).toEqual(expected)
  })

  it('示例二', () => {
    const head: ListNode | null = createListNode([1])
    const n = 1
    const expected: ListNode | null = createListNode([])

    expect(fn(head, n)).toEqual(expected)
  })

  it('示例一', () => {
    const head: ListNode | null = createListNode([1, 2])
    const n = 1
    const expected: ListNode | null = createListNode([1])

    expect(fn(head, n)).toEqual(expected)
  })
}
