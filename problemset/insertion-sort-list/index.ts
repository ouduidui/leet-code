import { ListNode } from '~/utils/listNode'

/**
 * 从前往后找插入点
 * @desc 时间复杂度 O(N^2)  空间复杂度 O(1)
 * @param head
 */
export function insertionSortList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head

  const dummyHead = new ListNode(0)
  dummyHead.next = head
  let lastSorted: ListNode = head // 已排序的最后一个节点
  let cur: ListNode | null = head.next // 未排序的第一个节点

  while (cur) {
    if (lastSorted.val <= cur.val) {
      // 如果下一个要排序的值比已经排序好的最大值还要大，那无需调位，顺位插入即可
      lastSorted = lastSorted.next!
    }
    else {
      // 选择排序，从第一个开始
      let prev = dummyHead
      // 找到第一个大于cur.val的位置
      while (prev.next!.val <= cur.val)
        prev = prev.next!

      lastSorted.next = cur.next;
      // 插入动作
      [cur.next, prev.next] = [prev.next, cur]
    }
    // 重新定位 cur
    cur = lastSorted.next
  }

  return dummyHead.next
}
