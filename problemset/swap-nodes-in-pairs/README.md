# 两两交换链表中的节点

> 难度：中等
>
> https://leetcode-cn.com/problems/swap-nodes-in-pairs/

## 题目

给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

**你不能只是单纯的改变节点内部的值**，而是需要实际的进行节点交换。

### 示例

#### 示例 1

![swap-nodes-in-pairs](https://user-images.githubusercontent.com/88995580/159103326-9748f484-8b4f-4994-8bcc-5a466f404bd1.jpg)

```
输入：head = [1,2,3,4]
输出：[2,1,4,3]
```

#### 示例 2

```
输入：head = []
输出：[]
```

#### 示例 3

```
输入：head = [1]
输出：[1]
```

## 解题

### 迭代

```typescript
/**
 * 迭代
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param head {ListNode | null}
 * @return {ListNode | null}
 */
export function swapPairs(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;

  const ans: ListNode = new ListNode(0);
  ans.next = head;
  let cur: ListNode | null = ans;

  while (cur.next && cur.next.next) {
    const firstNode: ListNode = cur.next;
    const secondNode: ListNode | null = cur.next.next;
    cur.next = secondNode;
    firstNode.next = secondNode.next;
    secondNode.next = firstNode;
    cur = firstNode;
  }

  return ans.next;
}
```

### 递归

```typescript
/**
 * 递归
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param head {ListNode | null}
 * @return {ListNode | null}
 */
export function swapPairs2(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;

  const ans: ListNode = head.next;
  head.next = swapPairs2(ans.next);
  ans.next = head;
  return ans;
}
```
