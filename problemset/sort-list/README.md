# 排序链表

> 难度：中等
>
> https://leetcode-cn.com/problems/sort-list/

## 题目

给你链表的头结点 `head` ，请将其按 **升序** 排列并返回 **排序后的链表** 。

### 示例

#### 示例 1：

![sort-list-1](https://user-images.githubusercontent.com/54696834/159101966-49bb3a2d-2129-4950-9b2c-e7f5ba75c413.jpg)

```
输入：head = [4,2,1,3]
输出：[1,2,3,4]
```

#### 示例 2：

![sort-list-2](https://user-images.githubusercontent.com/54696834/159101962-d52884af-96c1-4ac3-92f1-9dad2ddfe3a3.jpg)

```
输入：head = [-1,5,3,4,0]
输出：[-1,0,3,4,5]
```

#### 示例 3：

```
输入：head = []
输出：[]
```

## 解题

### 自顶向下归并排序

```typescript
/**
 * 自顶向下归并排序
 * @desc 时间复杂度 O(NlogN)  空间复杂度 O(logN)
 * @param head
 */
export function sortList(head: ListNode | null): ListNode | null {
  return toSortList(head, null);

  /**
   * 核心函数
   * @param head 头结点
   * @param tail 尾节点
   */
  function toSortList(
    head: ListNode | null,
    tail: ListNode | null
  ): ListNode | null {
    if (!head) return head;

    if (head.next === tail) {
      head.next = null;
      return head;
    }

    // 通过快慢指针，找到中间节点
    let slow: ListNode = head;
    let fast: ListNode | null = head;
    while (fast !== tail) {
      slow = slow.next!;
      fast = fast!.next;
      if (fast !== tail) {
        fast = fast!.next;
      }
    }

    // 以slow为之间节点
    return merge(toSortList(head, slow), toSortList(slow, tail));
  }

  /**
   * 合并动作
   * @param head1
   * @param head2
   */
  function merge(
    head1: ListNode | null,
    head2: ListNode | null
  ): ListNode | null {
    const dummyHead = new ListNode(0);
    let temp = dummyHead;
    let temp1 = head1;
    let temp2 = head2;

    // 从头开始遍历节点，一一比较，小者插入
    while (temp1 && temp2) {
      if (temp1.val <= temp2.val) {
        temp.next = temp1;
        temp1 = temp1.next;
      } else {
        temp.next = temp2;
        temp2 = temp2.next;
      }
      temp = temp.next;
    }

    if (temp1) {
      temp.next = temp1;
    } else if (temp2) {
      temp.next = temp2;
    }
    return dummyHead.next;
  }
}
```

### 自底向上归并排序

```typescript
/**
 * 自底向上归并排序
 * @desc 时间复杂度 O(NlogN)  空间复杂度 O(1)
 * @param head
 */
export function sortList2(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;

  // 求得链表长度
  let length = 0;
  let node: ListNode | null = head;
  while (node) {
    length++;
    node = node.next;
  }

  const dummyHead = new ListNode(0, head);
  for (
    let subLength = 1;
    subLength < length;
    subLength <<= 1 /* subLength * 2 */
  ) {
    let prev = dummyHead;
    let curr = dummyHead.next;
    while (curr) {
      const head1 = curr;
      for (let i = 1; i < subLength && curr.next; i++) {
        curr = curr.next;
      }
      const head2 = curr.next;
      curr.next = null;
      curr = head2;
      for (let i = 1; i < subLength && curr && curr.next; i++) {
        curr = curr.next;
      }
      let next = null;
      if (curr) {
        next = curr.next;
        curr.next = null;
      }
      prev.next = merge(head1, head2);
      while (prev.next) {
        prev = prev.next;
      }
      curr = next;
    }
  }
  return dummyHead.next;

  /**
   * 合并操作
   * @param head1
   * @param head2
   */
  function merge(head1: ListNode | null, head2: ListNode | null) {
    const dummyHead = new ListNode(0);
    let temp = dummyHead,
      temp1 = head1,
      temp2 = head2;
    while (temp1 && temp2) {
      if (temp1.val <= temp2.val) {
        temp.next = temp1;
        temp1 = temp1.next;
      } else {
        temp.next = temp2;
        temp2 = temp2.next;
      }
      temp = temp.next;
    }
    if (temp1 !== null) {
      temp.next = temp1;
    } else if (temp2 !== null) {
      temp.next = temp2;
    }
    return dummyHead.next;
  }
}
```
