# 奇偶链表

> 难度：中等
>
> https://leetcode-cn.com/problems/odd-even-linked-list/

## 题目

给定单链表的头节点 `head` ，将所有索引为奇数的节点和索引为偶数的节点分别组合在一起，然后返回重新排序的列表。

第一个节点的索引被认为是 **奇数** ， 第二个节点的索引为 **偶数** ，以此类推。

请注意，偶数组和奇数组内部的相对顺序应该与输入时保持一致。

你必须在 `O(1)` 的额外空间复杂度和 `O(n)` 的时间复杂度下解决这个问题。

### 示例

#### 示例 1：

![oddeven-linked-list](https://user-images.githubusercontent.com/54696834/165983103-1d7f9c60-e1e4-4910-9ed8-de30413ac48a.jpg)

```
输入: head = [1,2,3,4,5]
输出: [1,3,5,2,4]
```

#### 示例 2：

![oddeven2-linked-list](https://user-images.githubusercontent.com/54696834/165983115-10667613-ac82-4353-a781-e21c74e67ae5.jpg)

```
输入: head = [2,1,3,5,6,4,7]
输出: [2,3,6,7,1,5,4]
```

## 解题

```ts 
/**
 * 分离再拼接
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param head
 * @returns
 */
export function oddEvenList(head: ListNode | null): ListNode | null {
  if (!head) return null

  let odd = head
  const evenRoot = head.next
  let even = evenRoot
  if (even === null || even.next === null) return head

  let cur: ListNode | null = even.next
  while (cur) {
    odd.next = cur
    odd = odd.next
    cur = cur.next

    if (cur) {
      even.next = cur
      even = even.next
      cur = cur.next
    }
  }

  odd.next = evenRoot
  even.next = null
  return head
}
```