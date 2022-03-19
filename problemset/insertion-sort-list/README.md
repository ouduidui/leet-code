# 对链表进行插入排序

> 难度：中等
>
> https://leetcode-cn.com/problems/insertion-sort-list/

## 题目

给定单个链表的头 `head` ，使用 **插入排序** 对链表进行排序，并返回 排序后链表的
头 。

插入排序 算法的步骤:

- 插入排序是迭代的，每次只移动一个元素，直到所有元素可以形成一个有序的输出列表。
- 每次迭代中，插入排序只从输入数据中移除一个待排序的元素，找到它在序列中适当的位
  置，并将其插入。
- 重复直到所有输入数据插入完为止。

下面是插入排序算法的一个图形示例。部分排序的列表(黑色)最初只包含列表中的第一个元
素。每次迭代时，从输入数据中删除一个元素(红色)，并就地插入已排序的列表中。

对链表进行插入排序。

![insertion-sort-list-1](https://user-images.githubusercontent.com/54696834/159101939-797e654a-479b-4e9a-9f73-a4ab951e3214.gif)

### 示例

#### 示例 1：

![insertion-sort-list-2](https://user-images.githubusercontent.com/54696834/159101979-fec3b4ef-94ee-4eec-b69c-5aa7f382576a.jpg)

```
输入: head = [4,2,1,3]
输出: [1,2,3,4]
```

#### 示例 2：

![insertion-sort-list-3](https://user-images.githubusercontent.com/54696834/159101971-2ccb0ab1-c704-4df1-8630-dc08c77c0a4b.jpg)

```
输入: head = [-1,5,3,4,0]
输出: [-1,0,3,4,5]
```

## 解题

```typescript
/**
 * 从前往后找插入点
 * @desc 时间复杂度 O(N^2)  空间复杂度 O(1)
 * @param head
 */
export function insertionSortList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;

  const dummyHead = new ListNode(0);
  dummyHead.next = head;
  let lastSorted: ListNode = head; // 已排序的最后一个节点
  let cur: ListNode | null = head.next; // 未排序的第一个节点

  while (cur) {
    if (lastSorted.val <= cur.val) {
      // 如果下一个要排序的值比已经排序好的最大值还要大，那无需调位，顺位插入即可
      lastSorted = lastSorted.next!;
    } else {
      // 选择排序，从第一个开始
      let prev = dummyHead;
      // 找到第一个大于cur.val的位置
      while (prev.next!.val <= cur.val) {
        prev = prev.next!;
      }
      lastSorted.next = cur.next;
      // 插入动作
      [cur.next, prev.next] = [prev.next, cur];
    }
    // 重新定位 cur
    cur = lastSorted.next;
  }

  return dummyHead.next;
}
```
