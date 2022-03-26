import { TreeNode } from '~/utils/treeNode'
import type { ListNode } from '~/utils/listNode'

/**
 * 分治
 * @desc 时间复杂度 O(NlogN)   空间复杂度 O(logN)
 * @param head {ListNode | null}
 * @return {TreeNode | null}
 */
export function sortedListToBST(head: ListNode | null): TreeNode | null {
  return buildTree(head, null)

  /**
   * 搭建二叉树
   * @param left
   * @param right
   */
  function buildTree(
    left: ListNode | null,
    right: ListNode | null,
  ): TreeNode | null {
    if (left === right) return null

    // 找到中位节点
    const mid = getMedian(left!, right)
    // 新建二叉树
    const root = new TreeNode(mid.val)
    // 实现左右节点
    root.left = buildTree(left, mid)
    root.right = buildTree(mid.next, right)

    return root
  }

  /**
   * 快慢指针找到中位节点
   * @param left
   * @param right
   */
  function getMedian(left: ListNode, right: ListNode | null): ListNode {
    let fastPoint: ListNode | null = left
    let slowPoint: ListNode = left

    while (fastPoint !== right && fastPoint?.next !== right) {
      fastPoint = fastPoint!.next!.next
      slowPoint = slowPoint!.next!
    }

    return slowPoint!
  }
}

/**
 * 分治 + 中序遍历优化
 * @desc 时间复杂度 O(N)   空间复杂度 O(logN)
 * @param head {ListNode | null}
 * @return {TreeNode | null}
 */
export function sortedListToBST2(head: ListNode | null): TreeNode | null {
  const len = getLength(head)
  return buildTree(0, len - 1)

  function getLength(head: ListNode | null): number {
    let _head = head
    let result = 0
    while (_head !== null) {
      result++
      _head = _head.next
    }

    return result
  }

  function buildTree(left: number, right: number): TreeNode | null {
    if (left > right) return null

    const mid = (left + right + 1) >> 1
    const root = new TreeNode()
    root.left = buildTree(left, mid - 1)
    root.val = head!.val
    head = head!.next
    root.right = buildTree(mid + 1, right)
    return root
  }
}
