import { ListNode } from '~/utils/listNode'

/**
 * 优先队列
 * @desc 时间复杂度 O(kn×logk)  空间复杂度 O(k)
 * @param lists {Array<ListNode | null>}
 * @return {ListNode | null}
 */
export function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (!lists.length) return null
  if (lists.length === 1 && lists[0] === null) return null

  const head: ListNode = new ListNode(0)
  let tail: ListNode | null = head
  let isOver = false

  while (!isOver) {
    let min = NaN
    let minListIdxs: Array<number> = []
    for (let i = 0; i < lists.length; i++) {
      const item: ListNode | null = lists[i]
      if (!item) continue

      if (isNaN(min) || item.val < min) {
        min = item.val
        minListIdxs = [i]
      }
      else if (item.val === min) {
        minListIdxs.push(i)
      }
    }

    for (let j = 0; j < minListIdxs.length; j++) {
      const item: ListNode = lists[minListIdxs[j]] as ListNode
      tail.next = item
      tail = tail.next
      lists[minListIdxs[j]] = item.next
    }

    // 当lists所有结束了，isOver为true
    isOver = lists.every(item => !item)
  }
  return head.next
}

/**
 * 分支合并
 * @desc 时间复杂度 O(kn×logk)  空间复杂度 O(logk)
 * @param lists {Array<ListNode | null>}
 * @return {ListNode | null}
 */
export function mergeKLists2(lists: Array<ListNode | null>): ListNode | null {
  return merge(lists, 0, lists.length - 1)

  /**
   * 合并列表
   * @param localList {Array<ListNode | null>}
   * @param left {number}
   * @param right {number}
   * @return {ListNode | null}
   */
  function merge(
    localList: Array<ListNode | null>,
    left: number,
    right: number,
  ): ListNode | null {
    if (left === right) return localList[left]
    if (left > right) return null

    // 中间值
    const mid: number = (left + right) >> 1

    return mergeTwoLists(
      merge(localList, left, mid),
      merge(localList, mid + 1, right),
    )
  }

  /**
   * 合并两个有序列表
   * @param listOne {ListNode | null}
   * @param listTwo {ListNode | number}
   * @return {ListNode | null}
   */
  function mergeTwoLists(
    listOne: ListNode | null,
    listTwo: ListNode | null,
  ): ListNode | null {
    if (!listOne || !listTwo) return listOne || listTwo

    const head: ListNode = new ListNode(0)
    let tail: ListNode | null = head
    let aPtr: ListNode | null = listOne
    let bPtr: ListNode | null = listTwo

    while (aPtr && bPtr) {
      if (aPtr.val < bPtr.val) {
        tail.next = aPtr
        aPtr = aPtr.next
      }
      else {
        tail.next = bPtr
        bPtr = bPtr.next
      }
      tail = tail.next
    }

    tail.next = aPtr != null ? aPtr : bPtr
    return head.next
  }
}
