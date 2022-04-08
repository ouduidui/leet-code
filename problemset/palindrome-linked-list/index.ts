import type { ListNode } from '~/utils/listNode'

/**
 * 将值复制到数组
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param head
 * @returns
 */
export function isPalindrome(head: ListNode | null): boolean {
  if (head === null) return true

  const arr: number[] = []
  while (head) {
    arr.push(head.val)
    head = head.next
  }

  while (arr.length > 1)
    if (arr.shift() !== arr.pop()) return false

  return true
}

/**
 * 快慢指针
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param head
 * @returns
 */
export function isPalindrome2(head: ListNode | null): boolean {
  if (head === null) return true

  // 找到前半部分链表的尾节点并反转后半部分链表
  const secondHalfStart = reverseList(endOfFirstHalf(head).next!)

  // 判断是否回文
  let p1: ListNode | null = head
  let p2: ListNode | null = secondHalfStart
  while (p2 !== null) {
    if (p1!.val !== p2.val) return false
    p1 = p1!.next
    p2 = p2.next
  }

  return true

  /**
   * 找到链表中间位置
   * @param head
   * @returns
   */
  function endOfFirstHalf(head: ListNode): ListNode {
    let fast: ListNode = head
    let slow: ListNode = head
    while (fast.next !== null && fast.next.next !== null) {
      fast = head.next!.next!
      slow = slow.next!
    }
    return slow
  }

  /**
   * 翻转链表
   * @param head
   * @returns
   */
  function reverseList(head: ListNode): ListNode {
    let prev: ListNode | null = null
    let cur: ListNode | null = head
    while (cur !== null) {
      const nextTemp: ListNode | null = cur.next
      cur.next = prev
      prev = cur
      cur = nextTemp
    }

    return prev!
  }
}
