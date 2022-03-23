# 反转链表

> 难度：简单
>
> https://leetcode-cn.com/problems/reverse-linked-list/

## 题目

给你单链表的头节点 `head` ，请你反转链表，并返回反转后的链表。

### 示例

#### 示例 1：

![reverse-linked-list-1](https://user-images.githubusercontent.com/54696834/159611547-004b7091-a5ec-459f-9811-ab1e4d9b0bad.jpg)

```
输入：head = [1,2,3,4,5]
输出：[5,4,3,2,1]
```

#### 示例 2：

![reverse-linked-list-2](https://user-images.githubusercontent.com/54696834/159611555-56f29a2e-4207-44e1-bcd6-9e910dd8c020.jpg)

```
输入：head = [1,2]
输出：[2,1]
```

#### 示例 3：

```
输入：head = []
输出：[]
```

## 解题

```typescript
/**
 * 迭代
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param head
 * @returns
 */
export function reverseList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return null;

  const dummy = new ListNode(0);

  while (head) {
    dummy.next = new ListNode(head.val, dummy.next);
    head = head.next;
  }

  return dummy.next;
}
```
