# 分隔链表

> 难度：中等
>
> https://leetcode-cn.com/problems/partition-list/

## 题目

给你一个链表的头节点 `head` 和一个特定值 `x` ，请你对链表进行分隔，使得所有 小于
`x` 的节点都出现在 **大于或等于** `x` 的节点之前。

你应当 **保留** 两个分区中每个节点的初始相对位置。

### 示例

#### 示例 1：

```
输入：head = [1,4,3,2,5,2], x = 3
输出：[1,2,2,4,3,5]
```

#### 示例 2：

```
输入：head = [2,1], x = 2
输出：[1,2]
```

## 解题

```typescript
/**
 * 模拟
 * @desc 时间复杂度 O(N)   空间复杂度 O(1)
 * @param head
 * @param x
 */
export function partition(head: ListNode | null, x: number): ListNode | null {
  let small = new ListNode(0);
  const smallHead = small;
  let large = new ListNode(0);
  const largeHead = large;

  while (head !== null) {
    if (head.val < x) {
      small.next = head;
      small = small.next;
    } else {
      large.next = head;
      large = large.next;
    }
    head = head.next;
  }

  // 合并
  large.next = null;
  small.next = largeHead.next;
  return smallHead.next;
}
```
