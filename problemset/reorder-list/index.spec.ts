import { describe, expect, it } from 'vitest'
import { reorderList, reorderList2 } from '.'
import type { ListNode } from '~/utils/listNode'
import { createListNode } from '~/utils/listNode'

describe('重排链表', () => {
  describe('线性表', () => {
    testCase(reorderList)
  })

  describe('寻找链表中点 + 链表逆序 + 合并链表', () => {
    testCase(reorderList2)
  })
})

function testCase(fn: (head: ListNode | null) => void) {
  it.each([
    [[1, 2, 3, 4], [1, 4, 2, 3]],
    [[1, 2, 3, 4, 5], [1, 5, 2, 4, 3]],
  ])('示例%#', (arr, expected) => {
    const head = createListNode(arr)
    fn(head)
    expect(head).toStrictEqual(createListNode(expected))
  })
}
