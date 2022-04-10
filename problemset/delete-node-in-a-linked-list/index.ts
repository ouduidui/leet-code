import type { ListNode } from '~/utils/listNode'

/**
 * 和下一个节点交换
 * @desc 时间复杂度 O(1)   空间复杂度 O(1)
 * @param root
 */
export function deleteNode(root: ListNode | null): void {
  if (root !== null) {
    root.val = root.next!.val
    root.next = root.next!.next
  }
}
