# 回文链表

> 难度：简单
>
> https://leetcode-cn.com/problems/palindrome-linked-list/

## 题目

给你一个单链表的头节点 `head` ，请你判断该链表是否为回文链表。如果是，返回 `true` ；否则，返回 `false` 。

### 示例

#### 示例 1：

![pal1linked-list](https://user-images.githubusercontent.com/54696834/162509513-1b4dc1d5-3d8a-4191-b754-8e146b15c1bb.jpg)

```
输入：head = [1,2,2,1]
输出：true
```

#### 示例 2：

![pal2linked-list](https://user-images.githubusercontent.com/54696834/162509520-5a372f67-be6c-48e5-a022-edfcaf5c69b0.jpg)

```
输入：head = [1,2]
输出：false
```

## 解题

### 将值复制到数组

```ts
/**
 * 将值复制到数组
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param head
 * @returns
 */
export function isPalindrome(head: ListNode | null): boolean {
  if (head === null) return true

  const arr: number[] = []
  while (head) {
    arr.push(head.val)
    head = head.next
  }

  while (arr.length > 1)
    if (arr.shift() !== arr.pop()) return false

  return true
}
```

### 快慢指针

```ts
/**
 * 快慢指针
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param head
 * @returns
 */
export function isPalindrome2(head: ListNode | null): boolean {
  if (head === null) return true

  // 找到前半部分链表的尾节点并反转后半部分链表
  const secondHalfStart = reverseList(endOfFirstHalf(head).next!)

  // 判断是否回文
  let p1: ListNode | null = head
  let p2: ListNode | null = secondHalfStart
  while (p2 !== null) {
    if (p1!.val !== p2.val) return false
    p1 = p1!.next
    p2 = p2.next
  }

  return true

  /**
   * 找到链表中间位置
   * @param head
   * @returns
   */
  function endOfFirstHalf(head: ListNode): ListNode {
    let fast: ListNode = head
    let slow: ListNode = head
    while (fast.next !== null && fast.next.next !== null) {
      fast = head.next!.next!
      slow = slow.next!
    }
    return slow
  }

  /**
   * 翻转链表
   * @param head
   * @returns
   */
  function reverseList(head: ListNode): ListNode {
    let prev: ListNode | null = null
    let cur: ListNode | null = head
    while (cur !== null) {
      const nextTemp: ListNode | null = cur.next
      cur.next = prev
      prev = cur
      cur = nextTemp
    }

    return prev!
  }
}
```