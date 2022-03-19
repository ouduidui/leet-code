# 合并两个有序链表

> 难度：简单
>
> https://leetcode-cn.com/problems/merge-two-sorted-lists/

## 题目

将两个升序链表合并为一个新的 **升序** 链表并返回。新链表是通过拼接给定的两个链表
的所有节点组成的。

### 示例

#### 示例 1

![merge-two-sorted-lists](https://user-images.githubusercontent.com/88995580/159103312-41bb1593-062b-48d9-8ed9-4bd1f93be474.jpg)

```
输入：l1 = [1,2,4], l2 = [1,3,4]
输出：[1,1,2,3,4,4]
```

#### 示例 2

```
输入：l1 = [], l2 = []
输出：[]
```

#### 示例 3

```
输入：l1 = [], l2 = [0]
输出：[0]
```

## 解法

### 递归

```typescript
/**
 * 递归
 * @desc 时间复杂度 O(N+M)  空间复杂度 O(N+M)
 * @param l1 {ListNode | null}
 * @param l2 {ListNode | null}
 * @return {ListNode | null}
 */
export function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (!l1 && !l2) return null;
  if (!l1) return l2;
  if (!l2) return l1;

  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
}
```

### 迭代

```typescript
/**
 * 迭代
 * @desc 时间复杂度 O(N+M)  空间复杂度 O(1)
 * @param l1 {ListNode | null}
 * @param l2 {ListNode | null}
 * @return {ListNode | null}
 */
export function mergeTwoLists2(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const prevHead: ListNode = new ListNode(-1);

  let prev: ListNode | null = prevHead;
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      prev.next = l1;
      l1 = l1.next;
    } else {
      prev.next = l2;
      l2 = l2.next;
    }
    prev = prev?.next;
  }

  prev.next = l1 ? l1 : l2;

  return prevHead.next;
}
```
