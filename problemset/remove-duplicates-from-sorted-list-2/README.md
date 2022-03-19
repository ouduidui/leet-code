# 删除排序链表的重复元素 II

> 难度：中等
>
> https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii/

## 题目

存在一个按升序排列的链表，给你这个链表的头节点 `head` ，请你删除链表中所有存在数
字重复情况的节点，只保留原始链表中 **没有重复出现** 的数字。

返回同样按升序排列的结果链表。

### 示例

#### 示例 1：

![remove-duplicates-from-sorted-list-ii-1](https://user-images.githubusercontent.com/54696834/159102077-e3cf358a-b963-47f1-8679-f63ef5dd5aff.jpg)

```
输入：head = [1,2,3,3,4,4,5]
输出：[1,2,5]
```

#### 示例 2：

![remove-duplicates-from-sorted-list-ii-2](https://user-images.githubusercontent.com/88995580/159103218-6539e88b-6d25-47e4-b587-a35feeba48eb.jpg)

```
输入：head = [1,1,1,2,3]
输出：[2,3]
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

  const dummy = new ListNode(0, head);

  let cur = dummy;
  while (cur && cur.next && cur.next.next) {
    if (cur.next.val === cur.next.next.val) {
      const x = cur.next.val;
      // 去重
      while (cur.next && cur.next.val === x) {
        cur.next = cur.next.next;
      }
    } else {
      cur = cur.next;
    }
  }

  return dummy.next;
}
```
