import { ListNode } from '~/utils/listNode'

/**
 * 模拟
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param head {ListNode}
 * @param k {number}
 * @return {ListNode | null}
 */
export function reverseKGroup(
  head: ListNode | null,
  k: number,
): ListNode | null {
  if (k === 1 || !head || !head.next) return head

  const ans: ListNode = new ListNode(0)
  ans.next = head
  let cur: ListNode | null = ans

  while (head) {
    let tail: ListNode | null = cur
    // 查看剩余部分长度是否大于等于K
    for (let i = 0; i < k; ++i) {
      tail = tail.next
      if (!tail) return ans.next
    }

    // 此时tail处于第k个节点
    const nex = tail.next;
    // 将head到tail这段节点继续反转
    [head, tail] = reverseList(head, tail)

    // 把子链表重新接回原链表
    cur.next = head
    tail.next = nex
    cur = tail
    head = tail.next
  }

  return ans.next

  function reverseList(head: ListNode, tail: ListNode): [ListNode, ListNode] {
    let prev: ListNode | null = tail.next
    let p: ListNode = head
    while (prev !== tail) {
      const nex: ListNode = p.next as ListNode
      p.next = prev
      prev = p
      p = nex
    }

    return [tail, head]
  }
}
