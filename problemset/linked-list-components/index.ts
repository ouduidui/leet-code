import type { ListNode } from '~/utils/listNode'

/**
 * 计算组件的起始位置
 * @desc 时间复杂度 O(N) 空间复杂度 O(M)
 * @param head
 * @param nums
 * @returns
 */
export function numComponents(head: ListNode | null, nums: number[]): number {
  const numsSet = new Set<number>()
  for (const num of nums)
    numsSet.add(num)

  let inSet = false
  let res = 0
  while (head) {
    if (numsSet.has(head.val)) {
      if (!inSet) {
        inSet = true
        res++
      }
    }
    else {
      inSet = false
    }
    head = head.next
  }
  return res
}
