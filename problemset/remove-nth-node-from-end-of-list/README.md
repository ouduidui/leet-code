# 删除链表的倒数第 N 个结点

> 难度：中等
>
> https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/

## 题目

给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

### 示例

#### 示例 1

![remove-nth-node-from-end-of-list](https://user-images.githubusercontent.com/88995580/159103318-daf0581e-c125-4d5c-8736-ab06487f9b75.jpg)

```
输入：head = [1,2,3,4,5], n = 2
输出：[1,2,3,5]
```

### 示例 2

```
输入：head = [1], n = 1
输出：[]
```

### 示例 3

```
输入：head = [1,2], n = 1
输出：[1]
```

## 解法

### 暴力解法

```typescript
/**
 * 暴力解法
 * @desc 时间复杂度 O(N^2)  空间复杂度O(N)
 * @param head {ListNode | null}
 * @param n {number}
 * @return {ListNode | null}
 */
export function removeNthFromEnd(
  head: ListNode | null,
  n: number
): ListNode | null {
  if (!head) return null;

  // 将ListNode转成数组
  const arr: number[] = [head.val];
  while (head.next) {
    head = head.next;
    arr.push(head.val);
  }

  let ans = null;
  for (let i: number = arr.length - 1; i >= 0; i--) {
    if (i === arr.length - n) continue;
    ans = new ListNode(arr[i], ans);
  }

  return ans;
}
```

### 计算链表长度

```typescript
/**
 * 计算链表长度
 * @desc 时间复杂度 O(N^2)  空间复杂度O(1)
 * @param head {ListNode | null}
 * @param n {number}
 * @return {ListNode | null}
 */
export function removeNthFromEnd2(
  head: ListNode | null,
  n: number
): ListNode | null {
  if (!head) return null;

  // 获取ListNode长度
  const len: number = getListNodeLength(head);

  // 哑节点
  const dummy: ListNode = new ListNode(0, head);
  let cur: ListNode | null = dummy;

  for (let i: number = 1; i < len - n + 1; ++i) {
    cur = cur && cur.next;
  }

  // 接上后续结点
  if (cur && cur.next) {
    cur.next && (cur.next = cur.next.next);
  }

  return dummy.next;

  function getListNodeLength(listNode: ListNode | null): number {
    if (!listNode) return 0;

    let len: number = 0;
    while (listNode) {
      len++;
      listNode = listNode.next;
    }

    return len;
  }
}
```

### 双指针（快慢指针）

```typescript
/**
 * 双指针（快慢指针）
 * @desc 时间复杂度 O(N)  空间复杂度O(1)
 * @param head {ListNode | null}
 * @param n {number}
 * @return {ListNode | null}
 */
export function removeNthFromEnd3(
  head: ListNode | null,
  n: number
): ListNode | null {
  if (!head) return null;

  const dummy: ListNode = new ListNode(0, head);
  // 双指针
  let firstPoint: ListNode | null = head;
  let secondPoint: ListNode | null = dummy;

  // 先将firstPoint移动与secondPoint相隔n个结点
  while (n--) {
    firstPoint = firstPoint && firstPoint.next;
  }

  // 一并移动firstPoint和secondPoint，直至一并移动firstPoint到链表顶部
  while (firstPoint) {
    firstPoint = firstPoint.next;
    secondPoint = secondPoint && secondPoint.next;
  }

  // 删除结点
  if (secondPoint && secondPoint.next) {
    secondPoint.next = secondPoint.next.next;
  }

  return dummy.next;
}
```
