import { describe, expect, it } from 'vitest'
import { insertionSortList } from '.'
import type { ListNode } from '~/utils/listNode'
import { createListNode } from '~/utils/listNode'
// need refactor
describe('对链表进行插入排序', () => {
  testCase(insertionSortList)
})

function testCase(fn: (head: ListNode | null) => ListNode | null) {
  it('示例一', () => {
    const head = createListNode([4, 2, 1, 3])
    const expected = createListNode([1, 2, 3, 4])
    expect(fn(head)).toStrictEqual(expected)
  })

  it('示例二', () => {
    const head = createListNode([-1, 5, 3, 4, 0])
    const expected = createListNode([-1, 0, 3, 4, 5])
    expect(fn(head)).toStrictEqual(expected)
  })
}
