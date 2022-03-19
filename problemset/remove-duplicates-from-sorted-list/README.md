# 删除排序列表中的重复元素

> 难度：中等
>
> https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/

## 题目

存在一个按升序排列的链表，给你这个链表的头节点 `head` ，请你删除所有重复的元素
，**使每个元素** 只出现一次 。

返回同样按升序排列的结果链表。

### 示例

#### 示例 1：

![remove-duplicates-from-sorted-list-1](https://user-images.githubusercontent.com/88995580/159103250-98d13f87-2481-45af-b1a5-d5007ebbf943.jpg)

```
输入：head = [1,1,2]
输出：[1,2]
```

#### 示例 2：

![remove-duplicates-from-sorted-list-2](https://user-images.githubusercontent.com/88995580/159103520-eb9e7387-954f-48e3-a84b-b4d6d18c7c96.jpg)

```
输入：head = [1,1,2,3,3]
输出：[1,2,3]
```

## 解题

```typescript
/**
 * 一次遍历
 * @desc 时间复杂度 O(N)   空间复杂度 O(1)
 * @param head
 */
export function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) return head;

  let cur = head;

  while (cur.next) {
    if (cur.val === cur.next.val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }

  return head;
}
```
