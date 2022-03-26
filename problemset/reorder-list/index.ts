import type { ListNode } from '~/utils/listNode'

/**
 * 线性表
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param head
 */
export function reorderList(head: ListNode | null): void {
  if (!head || !head.next) return

  const nodeMap: ListNode[] = []
  let cur: ListNode | null = head.next

  while (cur !== null) {
    nodeMap.push(cur)
    cur = cur.next
  }

  cur = head
  let left = 0
  let right = nodeMap.length
  while (left < right) {
    const temp: ListNode = cur.next!
    cur.next = nodeMap.pop()!
    cur.next.next = temp
    cur = temp
    left++
    right--
  }
  cur.next = null
}

/**
 * 寻找链表中点 + 链表逆序 + 合并链表
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param head
 */
export function reorderList2(head: ListNode | null): void {
  if (!head || !head.next) return

  const mid = middleNode(head)
  const l1 = head
  const l2 = reverseList(mid.next!)
  mid.next = null
  mergeList(l1, l2)

  /**
   * 通过快慢指针找到中间节点
   * @param head
   */
  function middleNode(head: ListNode): ListNode {
    let slow: ListNode | null = head
    let fast: ListNode | null = head

    while (fast.next && fast.next.next) {
      slow = slow.next!
      fast = fast.next.next
    }

    return slow
  }

  /**
   * 反转链表
   * @param head
   */
  function reverseList(head: ListNode): ListNode {
    let prev: ListNode | null = null
    let cur: ListNode | null = head

    while (cur) {
      const temp: ListNode | null = cur.next
      cur.next = prev
      prev = cur
      cur = temp
    }

    return prev as ListNode
  }

  /**
   * 合并链表
   * @param l1
   * @param l2
   */
  function mergeList(l1: ListNode | null, l2: ListNode | null) {
    let temp1: ListNode | null
    let temp2: ListNode | null

    while (l1 && l2) {
      temp1 = l1.next
      temp2 = l2.next

      l1.next = l2
      l1 = temp1

      l2.next = l1
      l2 = temp2
    }
  }
}
