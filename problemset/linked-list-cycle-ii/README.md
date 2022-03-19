# 环形链表 II

> 难度：中等
>
> https://leetcode-cn.com/problems/linked-list-cycle-ii/

## 题目

给定一个链表的头节点 `head` ，返回链表开始入环的第一个节点。 如果链表无环，则返
回 `null`。

如果链表中有某个节点，可以通过连续跟踪 `next` 指针再次到达，则链表中存在环。 为
了表示给定链表中的环，评测系统内部使用整数 `pos` 来表示链表尾连接到链表中的位置
（索引从 `0` 开始）。如果 `pos` 是 `-1`，则在该链表中没有环。

注意：`pos` 不作为参数进行传递，仅仅是为了标识链表的实际情况。

**不允许修改** 链表。

### 示例

#### 示例 1：

![linked-list-cycle-ii-1](https://user-images.githubusercontent.com/54696834/159101994-cfb5eb66-42ba-473c-9b03-de2da5e6104e.png)

```
输入：head = [3,2,0,-4], pos = 1
输出：返回索引为 1 的链表节点
解释：链表中有一个环，其尾部连接到第二个节点。
```

#### 示例 2：

![linked-list-cycle-ii-2](https://user-images.githubusercontent.com/54696834/159102013-14547371-68e3-4efe-a6bc-b2e242a05d9e.png)

```
输入：head = [1,2], pos = 0
输出：返回索引为 0 的链表节点
解释：链表中有一个环，其尾部连接到第一个节点。
```

#### 示例 3：

![linked-list-cycle-ii-3](https://user-images.githubusercontent.com/88995580/159103212-952c323d-90fb-477f-8a20-a04cc04180cb.png)

```
输入：head = [1], pos = -1
输出：返回 null
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
export function detectCycle(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return null;

  const nodeSet = new Set<ListNode>();

  while (head) {
    if (nodeSet.has(head)) {
      return head;
    }
    nodeSet.add(head);
    head = head.next;
  }

  return null;
}
```

### 快慢指针

```typescript
/**
 * 快慢指针
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param head
 */
export function detectCycle2(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return null;

  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  while (fast !== null) {
    slow = slow!.next;
    if (fast.next) {
      fast = fast.next.next;
    } else {
      return null;
    }

    // 如果 fast === slow，证明是一个环形链表
    if (fast === slow) {
      /**
       * - slow 与 fast相遇时，slow还没走完一圈
       *   - 因为每次slow走一步，fast走两步
       *   - slow在入环的时候，fast在环的 b 处，最终 slow 在环内走了 c 距离后跟fast相遇
       *   - 可以得到等式 c = 2 * c - b  =>  c = b
       *
       * 链表中环外部分的长度为 a，环内部分的长度为b
       * slow 指针进入环后，又走了 c 的距离与 fast 相遇
       * 此时，fast 指针已经走完了环的 n 圈
       * 因此 fast 走过的总距离为 a + n * b + c
       * 而 slow 走过的总距离为 a + c
       * 因为 fast 的总路程为 slow 的两倍，因此可以合并等式 a + n * b + c = 2  (a + c)
       * 化简可得 a = n * b - c
       * 因此我们可以新建一个 ptr 指针从启动出发，而 slow 从与 fast 相遇处触发，最终他们会在入环点相遇
       */
      let ptr = head;
      while (ptr !== slow) {
        ptr = ptr.next!;
        slow = slow!.next;
      }
      return ptr;
    }
  }

  return null;
}
```
