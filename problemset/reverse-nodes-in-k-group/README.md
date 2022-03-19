# K 个一组翻转链表

> 难度：困难
>
> https://leetcode-cn.com/problems/reverse-nodes-in-k-group/

## 题目

给你一个链表，每`k`个节点一组进行翻转，请你返回翻转后的链表。

`k`是一个正整数，它的值小于或等于链表的长度。

如果节点总数不是`k`的整数倍，那么请将最后剩余的节点保持原有顺序。

进阶：

- 你可以设计一个只使用常数额外空间的算法来解决此问题吗？
- 你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。

### 示例

#### 示例 1

![reverse-nodes-in-k-group-1](https://user-images.githubusercontent.com/88995580/159103315-6e0b3af3-7a13-4d6d-ae3a-83993904776c.jpg)

```
输入：head = [1,2,3,4,5], k = 2
输出：[2,1,4,3,5]
```

#### 示例 2

![reverse-nodes-in-k-group-2](https://user-images.githubusercontent.com/88995580/159103316-29ce61bd-c41c-48f0-a6c7-c7a301d282d2.jpg)

```
输入：head = [1,2,3,4,5], k = 3
输出：[3,2,1,4,5]
```

#### 示例 3

```
输入：head = [1,2,3,4,5], k = 1
输出：[1,2,3,4,5]
```

#### 示例 4

```
输入：head = [1], k = 1
输出：[1]
```

## 解法

```typescript
/**
 * 模拟
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param head {ListNode}
 * @param k {number}
 * @return {ListNode | null}
 */
export function reverseKGroup(
  head: ListNode | null,
  k: number
): ListNode | null {
  if (k === 1 || !head || !head.next) return head;

  const ans: ListNode = new ListNode(0);
  ans.next = head;
  let cur: ListNode | null = ans;

  while (head) {
    let tail: ListNode | null = cur;
    // 查看剩余部分长度是否大于等于K
    for (let i: number = 0; i < k; ++i) {
      tail = tail.next;
      if (!tail) return ans.next;
    }

    // 此时tail处于第k个节点
    const nex = tail.next;
    // 将head到tail这段节点继续反转
    [head, tail] = reverseList(head, tail);

    // 把子链表重新接回原链表
    cur.next = head;
    tail.next = nex;
    cur = tail;
    head = tail.next;
  }

  return ans.next;

  function reverseList(head: ListNode, tail: ListNode): [ListNode, ListNode] {
    let prev: ListNode | null = tail.next;
    let p: ListNode = head;
    while (prev !== tail) {
      const nex: ListNode = p.next as ListNode;
      p.next = prev;
      prev = p;
      p = nex;
    }

    return [tail, head];
  }
}
```
