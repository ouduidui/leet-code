import { ListNode } from '~/utils/listNode'

/**
 * 模拟
 * @desc 时间复杂度 O(N)   空间复杂度 O(1)
 * @param head
 * @param x
 */
export function partition(head: ListNode | null, x: number): ListNode | null {
  let small = new ListNode(0)
  const smallHead = small
  let large = new ListNode(0)
  const largeHead = large

  while (head !== null) {
    if (head.val < x) {
      small.next = head
      small = small.next
    }
    else {
      large.next = head
      large = large.next
    }
    head = head.next
  }

  // 合并
  large.next = null
  small.next = largeHead.next
  return smallHead.next
}
