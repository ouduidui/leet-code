import { describe, expect, it } from 'vitest'
import { reverseBetween, reverseBetween2 } from '.'
import type { ListNode } from '~/utils/listNode'
import { createListNode } from '~/utils/listNode'
// need refactor
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
  it('示例一', () => {
    const head = createListNode([1, 2, 3, 4, 5])
    const left = 2
    const right = 4
    const expected = createListNode([1, 4, 3, 2, 5])

    expect(fn(head, left, right)).toStrictEqual(expected)
  })

  it('示例二', () => {
    const head = createListNode([5])
    const left = 1
    const right = 1
    const expected = createListNode([5])

    expect(fn(head, left, right)).toStrictEqual(expected)
  })
}
