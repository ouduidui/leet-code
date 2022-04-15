import { describe, expect, it } from 'vitest'
import { reverseList } from '.'
import type { ListNode } from '~/utils/listNode'
import { createListNode } from '~/utils/listNode'

describe('反转链表', () => {
  testCase(reverseList)
})

function testCase(fn: (head: ListNode | null) => ListNode | null) {
  it.each([
    [[1, 2, 3, 4, 5], [5, 4, 3, 2, 1]],
    [[1, 2], [2, 1]],
    [[], []],
  ])('示例%#', (head, expected) => {
    expect(fn(createListNode(head))).toStrictEqual(createListNode(expected))
  })

  it('示例二', () => {
    const head = createListNode([1, 2])
    const expected = createListNode([2, 1])
    expect(fn(head)).toStrictEqual(expected)
  })

  it('示例三', () => {
    const head = createListNode([])
    const expected = createListNode([])
    expect(fn(head)).toStrictEqual(expected)
  })
}
