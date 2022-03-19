# 两数相加

> 难度：中等
>
> https://leetcode-cn.com/problems/add-two-numbers/

## 题目

给你两个**非空**的链表，表示两个非负的整数。它们每位数字都是按照**逆序**的方式存
储的，并且每个节点只能存储**一位**数字。

请你将两个数相加，并以相同形式返回一个表示和的链表。

你可以假设除了数字`0`之外，这两个数都不会以`0`开头。

### 示例

#### 示例 1：

![add-two-numbers](https://user-images.githubusercontent.com/88995580/159103314-6d14327c-bb46-4a9f-9cd7-1a5eb5e2fdf8.jpeg)

```
输入：l1 = [2,4,3], l2 = [5,6,4]
输出：[7,0,8]
解释：342 + 465 = 807.
```

#### 示例 2：

```
输入：l1 = [0], l2 = [0]
输出：[0]
```

#### 示例 3：

```
输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
输出：[8,9,9,9,0,0,0,1]
```

## 解法

```typescript
/**
 * @desc 时间复杂度：O(max(m,n))  空间复杂度 O(1)
 * @param l1 {ListNode}
 * @param l2 {ListNode}
 * @return {ListNode}
 */
export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let head: ListNode | null = null; // 存放链头
  let tail: ListNode | null = null; // 存放链尾
  let carry: number = 0; // 进位值

  // 遍历链表
  while (l1 || l2) {
    // 求和
    const n1: number = l1 && l1.val ? l1.val : 0;
    const n2: number = l2 && l2.val ? l2.val : 0;
    const sum: number = n1 + n2 + carry;

    if (!head) {
      head = tail = new ListNode(sum % 10); // 初始化链头和链尾
    } else if (tail) {
      // 插入链尾
      tail.next = new ListNode(sum % 10);
      tail = tail.next;
    }

    // 进位值
    carry = Math.floor(sum / 10);

    // 获取下一个链表
    if (l1?.val || l1?.val === 0) l1 = l1.next;
    if (l2?.val || l2?.val === 0) l2 = l2.next;
  }

  // 遍历结束后检查进位
  if (carry > 0) {
    tail && (tail.next = new ListNode(carry));
  }

  return head;
}
```
