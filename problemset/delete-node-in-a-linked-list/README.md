# 删除链表中的节点

> 难度：简单
>
> https://leetcode-cn.com/problems/delete-node-in-a-linked-list/

## 题目

请编写一个函数，用于 **删除单链表中某个特定节点** 。在设计函数时需要注意，你无法访问链表的头节点 `head` ，只能直接访问 **要被删除的节点** 。

题目数据保证需要删除的节点 **不是末尾节点** 。

### 示例 1：

![node1](https://user-images.githubusercontent.com/54696834/162600542-637052d9-f572-4324-80b2-09c92874cbf1.jpg)

```
输入：head = [4,5,1,9], node = 5
输出：[4,1,9]
解释：指定链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -> 1 -> 9
```

### 示例 2：

![node2](https://user-images.githubusercontent.com/54696834/162600544-d1f3be9e-8b28-4c77-8c23-2e7c49e25fe8.jpg)

```
输入：head = [4,5,1,9], node = 1
输出：[4,5,9]
解释：指定链表中值为 1 的第三个节点，那么在调用了你的函数之后，该链表应变为 4 -> 5 -> 9
```

## 解题

```ts
/**
 * 和下一个节点交换
 * @desc 时间复杂度 O(1)   空间复杂度 O(1)
 * @param root
 */
export function deleteNode(root: ListNode | null): void {
  if (root !== null) {
    root.val = root.next!.val
    root.next = root.next!.next
  }
}
```