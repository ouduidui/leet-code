# 重排链表

> 难度：中等
>
> https://leetcode-cn.com/problems/reorder-list/

## 题目

给定一个单链表 `L` 的头节点 `head` ，单链表 `L` 表示为：

```
L0 → L1 → … → Ln - 1 → Ln
```

请将其重新排列后变为：

```
L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
```

不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

### 示例

#### 示例 1：

![reorder-list-1](https://user-images.githubusercontent.com/54696834/159101961-7699492d-62a1-44f0-b1a7-29e1a0fdf649.png)

```
输入：head = [1,2,3,4]
输出：[1,4,2,3]
```

#### 示例 2：

![reorder-list-2](https://user-images.githubusercontent.com/54696834/159101955-6c2d4641-d0a3-4fa9-b06a-f281b09635b6.png)

```
输入：head = [1,2,3,4,5]
输出：[1,5,2,4,3]
```

## 解题

### 线性表

```typescript
/**
 * 线性表
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param head
 */
export function reorderList(head: ListNode | null): void {
  if (!head || !head.next) return;

  const nodeMap: ListNode[] = [];
  let cur: ListNode | null = head.next;

  while (cur !== null) {
    nodeMap.push(cur);
    cur = cur.next;
  }

  cur = head;
  let left = 0;
  let right = nodeMap.length;
  while (left < right) {
    const temp: ListNode = cur.next!;
    cur.next = nodeMap.pop()!;
    cur.next.next = temp;
    cur = temp;
    left++;
    right--;
  }
  cur.next = null;
}
```

### 寻找链表中点 + 链表逆序 + 合并链表

```typescript
/**
 * 寻找链表中点 + 链表逆序 + 合并链表
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param head
 */
export function reorderList2(head: ListNode | null): void {
  if (!head || !head.next) return;

  const mid = middleNode(head);
  const l1 = head;
  const l2 = reverseList(mid.next!);
  mid.next = null;
  mergeList(l1, l2);

  /**
   * 通过快慢指针找到中间节点
   * @param head
   */
  function middleNode(head: ListNode): ListNode {
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    while (fast.next && fast.next.next) {
      slow = slow.next!;
      fast = fast.next.next;
    }

    return slow;
  }

  /**
   * 反转链表
   * @param head
   */
  function reverseList(head: ListNode): ListNode {
    let prev: ListNode | null = null;
    let cur: ListNode | null = head;

    while (cur) {
      const temp: ListNode | null = cur.next;
      cur.next = prev;
      prev = cur;
      cur = temp;
    }

    return prev as ListNode;
  }

  /**
   * 合并链表
   * @param l1
   * @param l2
   */
  function mergeList(l1: ListNode | null, l2: ListNode | null) {
    let temp1: ListNode | null;
    let temp2: ListNode | null;

    while (l1 && l2) {
      temp1 = l1.next;
      temp2 = l2.next;

      l1.next = l2;
      l1 = temp1;

      l2.next = l1;
      l2 = temp2;
    }
  }
}
```
