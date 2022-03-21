# 移除链表元素

> 难度：简单
>
> https://leetcode-cn.com/problems/remove-linked-list-elements/

## 题目

给你一个链表的头节点 `head` 和一个整数 `val` ，请你删除链表中所有满足
`Node.val == val` 的节点，并返回 **新的头节点** 。

### 示例

#### 示例 1

![remove-linked-list-elements](https://user-images.githubusercontent.com/54696834/159191813-06207770-83fa-4c1b-a7ee-cc765f7f9cfd.jpg)

```
输入：head = [1,2,6,3,4,5,6], val = 6
输出：[1,2,3,4,5]
```

#### 示例 2

```
输入：head = [], val = 1
输出：[]
```

#### 示例 3

```
输入：head = [7,7,7,7], val = 7
输出：[]
```

## 解题

### 递归

```typescript
/**
 * 递归
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param head
 * @param val
 * @returns
 */
export function removeElements(
  head: ListNode | null,
  val: number
): ListNode | null {
  if (head === null) return head;
  head.next = removeElements(head.next, val);
  return head.val === val ? head.next : head;
}
```

### 迭代

```typescript
/**
 * 迭代
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param head
 * @param val
 * @returns
 */
export function removeElements2(
  head: ListNode | null,
  val: number
): ListNode | null {
  const dummyHead = new ListNode(0, head);
  let temp = dummyHead;
  while (temp.next !== null) {
    if (temp.next.val == val) {
      temp.next = temp.next.next;
    } else {
      temp = temp.next;
    }
  }
  return dummyHead.next;
}
```
