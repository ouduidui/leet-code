import { describe, expect, it } from 'vitest'
import { removeElements, removeElements2 } from '.'
import type { ListNode } from '~/utils/listNode'
import { createListNode } from '~/utils/listNode'
// need refactor
describe('移除链表元素', () => {
  describe('递归', () => {
    testCase(removeElements)
  })

  describe('迭代', () => {
    testCase(removeElements2)
  })
})

function testCase(fn: (head: ListNode | null, val: number) => ListNode | null) {
  it('示例一', () => {
    const head = createListNode([1, 2, 6, 3, 4, 5, 6])
    const val = 6
    const expected = createListNode([1, 2, 3, 4, 5])
    expect(fn(head, val)).toStrictEqual(expected)
  })

  it('示例二', () => {
    const head = createListNode([])
    const val = 1
    const expected = createListNode([])
    expect(fn(head, val)).toStrictEqual(expected)
  })

  it('示例三', () => {
    const head = createListNode([7, 7, 7, 7])
    const val = 7
    const expected = createListNode([])
    expect(fn(head, val)).toStrictEqual(expected)
  })
}
