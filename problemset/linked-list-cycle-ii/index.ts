import type { ListNode } from '~/utils/listNode'

/**
 * 哈希表
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param head
 */
export function detectCycle(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return null

  const nodeSet = new Set<ListNode>()

  while (head) {
    if (nodeSet.has(head))
      return head

    nodeSet.add(head)
    head = head.next
  }

  return null
}

/**
 * 快慢指针
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param head
 */
export function detectCycle2(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return null

  let slow: ListNode | null = head
  let fast: ListNode | null = head

  while (fast !== null) {
    slow = slow!.next
    if (fast.next)
      fast = fast.next.next
    else
      return null

    // 如果 fast === slow，证明是一个环形链表
    if (fast === slow) {
      /**
       * - slow 与 fast相遇时，slow还没走完一圈
       *   - 因为每次slow走一步，fast走两步
       *   - slow在入环的时候，fast在环的 b 处，最终 slow 在环内走了 c 距离后跟fast相遇
       *   - 可以得到等式 c = 2 * c - b  =>  c = b
       *
       * 链表中环外部分的长度为 a，环内部分的长度为b
       * slow 指针进入环后，又走了 c 的距离与 fast 相遇
       * 此时，fast 指针已经走完了环的 n 圈
       * 因此 fast 走过的总距离为 a + n * b + c
       * 而 slow 走过的总距离为 a + c
       * 因为 fast 的总路程为 slow 的两倍，因此可以合并等式 a + n * b + c = 2  (a + c)
       * 化简可得 a = n * b - c
       * 因此我们可以新建一个 ptr 指针从启动出发，而 slow 从与 fast 相遇处触发，最终他们会在入环点相遇
       */
      let ptr = head
      while (ptr !== slow) {
        ptr = ptr.next!
        slow = slow!.next
      }
      return ptr
    }
  }

  return null
}
