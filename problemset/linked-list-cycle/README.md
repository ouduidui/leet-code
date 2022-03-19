# 环形链表

> 难度：简单
>
> https://leetcode-cn.com/problems/linked-list-cycle/

## 题目

给你一个链表的头节点 `head` ，判断链表中是否有环。

如果链表中有某个节点，可以通过连续跟踪 `next` 指针再次到达，则链表中存在环。 为
了表示给定链表中的环，评测系统内部使用整数 `pos` 来表示链表尾连接到链表中的位置
（索引从 `0` 开始）。

注意：`pos` 不作为参数进行传递 。仅仅是为了标识链表的实际情况。

如果链表中存在环 ，则返回 `true` 。 否则，返回 `false` 。

### 示例

#### 示例 1：

![linked-list-cycle-1](https://user-images.githubusercontent.com/54696834/159101993-652d0d79-512b-4b43-8446-aa3584b259dc.png)

```
输入：head = [3,2,0,-4], pos = 1
输出：true
解释：链表中有一个环，其尾部连接到第二个节点。
```

#### 示例 2：

![linked-list-cycle-2](https://user-images.githubusercontent.com/54696834/159102011-eb5a9f9b-76f7-4850-ae08-f0f85ab8429e.png)

```
输入：head = [1,2], pos = 0
输出：true
解释：链表中有一个环，其尾部连接到第一个节点。
```

#### 示例 3：

![linked-list-cycle-3](https://user-images.githubusercontent.com/54696834/159102015-48e95969-b086-4a10-8ecc-0f6d7a5e297c.png)

```
输入：head = [1], pos = -1
输出：false
解释：链表中没有环。
```

## 解题

### 哈希表

```typescript
/**
 * 哈希表
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param head
 */
export function hasCycle(head: ListNode | null): boolean {
  if (!head || !head.next) return false;

  const nodeSet = new Set<ListNode>();

  while (head !== null) {
    if (nodeSet.has(head)) {
      return true;
    }
    nodeSet.add(head);
    head = head.next;
  }

  return false;
}
```

### 快慢指针

```typescript
/**
 * 快慢指针
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param head
 */
export function hasCycle2(head: ListNode | null): boolean {
  if (!head || !head.next) return false;

  let slow: ListNode | null = head;
  let fast: ListNode | null = head.next;

  while (slow !== fast) {
    if (slow === null || fast === null) return false;

    slow = slow.next;
    fast = fast.next?.next || null;
  }

  return true;
}
```
