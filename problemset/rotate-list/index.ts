import type { ListNode } from '~/utils/listNode'

/**
 * 合并链表
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param head
 * @param k
 */
export function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (k === 0 || !head || !head.next) return head

  // 求出链表长度
  let len = 1
  let cur = head
  while (cur.next) {
    cur = cur.next
    len++
  }

  // 当 k 大于 len 时，代表会无效旋转一周，因此求出真正的旋转长度
  let add = len - (k % len)
  if (add === len || add === 0) return head

  // 合并链表 （此时 cur 在链表最后一个节点）
  cur.next = head
  while (add) {
    cur = cur.next!
    add--
  }

  const ret = cur.next
  cur.next = null

  return ret
}
