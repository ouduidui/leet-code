# 旋转链表

> 难度：中等
>
> https://leetcode-cn.com/problems/rotate-list/

## 题目

给你一个链表的头节点 `head` ，旋转链表，将链表每个节点向右移动 `k` 个位置。

### 示例

#### 示例 1

![rotate-list-1](https://user-images.githubusercontent.com/54696834/159102064-caad4659-88e3-4540-bba3-da567fa88c3d.jpg)

```
输入：head = [1,2,3,4,5], k = 2
输出：[4,5,1,2,3]
```

#### 示例 1

![rotate-list-2](https://user-images.githubusercontent.com/54696834/159102062-5e74d6d7-cb29-48d7-b847-697d4c7d4e6a.jpg)

```
输入：head = [0,1,2], k = 4
输出：[2,0,1]
```

## 解法

```typescript
/**
 * 合并链表
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param head
 * @param k
 */
export function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (k === 0 || !head || !head.next) return head;

  // 求出链表长度
  let len = 1;
  let cur = head;
  while (cur.next) {
    cur = cur.next;
    len++;
  }

  // 当 k 大于 len 时，代表会无效旋转一周，因此求出真正的旋转长度
  let add = len - (k % len);
  if (add === len || add === 0) return head;

  // 合并链表 （此时 cur 在链表最后一个节点）
  cur.next = head;
  while (add) {
    cur = cur.next!;
    add--;
  }

  const ret = cur.next;
  cur.next = null;

  return ret;
}
```
