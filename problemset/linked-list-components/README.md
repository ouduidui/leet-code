# 链表组件

> 难度：中等
>
> https://leetcode.cn/problems/linked-list-components/

## 题目

给定链表头结点 head，该链表上的每个结点都有一个 唯一的整型值 。同时给定列表 nums，该列表是上述链表中整型值的一个子集。

返回列表 nums 中组件的个数，这里对组件的定义为：链表中一段最长连续结点的值（该值必须在列表 nums 中）构成的集合。

 

#### 示例 1：

![image](https://user-images.githubusercontent.com/54696834/195327308-9cd30480-b7c0-4c5d-bc13-24cfd0b8a93f.png)

```
输入: head = [0,1,2,3], nums = [0,1,3]
输出: 2
解释: 链表中,0 和 1 是相连接的，且 nums 中不包含 2，所以 [0, 1] 是 nums 的一个组件，同理 [3] 也是一个组件，故返回 2。
```

#### 示例 2：

![image](https://user-images.githubusercontent.com/54696834/195327359-32946af2-6e12-4133-8b80-fab2a9b0d3d3.png)


输入: head = [0,1,2,3,4], nums = [0,3,1,4]
输出: 2
解释: 链表中，0 和 1 是相连接的，3 和 4 是相连接的，所以 [0, 1] 和 [3, 4] 是两个组件，故返回 2。


## 解题

```ts 
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
```