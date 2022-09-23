# 设计链表

> 难度：中等
>
> https://leetcode.cn/problems/design-linked-list/

## 题目

设计链表的实现。您可以选择使用单链表或双链表。单链表中的节点应该具有两个属性：`val` 和 `next`。`val` 是当前节点的值，`next` 是指向下一个节点的指针/引用。如果要使用双向链表，则还需要一个属性 `prev` 以指示链表中的上一个节点。假设链表中的所有节点都是 `0-index` 的。

在链表类中实现这些功能：

- `get(index)`：获取链表中第 `index` 个节点的值。如果索引无效，则返回`-1`。
- `addAtHead(val)`：在链表的第一个元素之前添加一个值为 `val` 的节点。插入后，新节点将成为链表的第一个节点。
- `addAtTail(val)`：将值为 `val` 的节点追加到链表的最后一个元素。
- `addAtIndex(index,val)`：在链表中的第 `index` 个节点之前添加值为 `val`  的节点。如果 `index` 等于链表的长度，则该节点将附加到链表的末尾。如果 `index` 大于链表长度，则不会插入节点。如果`index`小于0，则在头部插入节点。
- `deleteAtIndex(index)`：如果索引 `index` 有效，则删除链表中的第 `index` 个节点。
 

### 示例：

```
MyLinkedList linkedList = new MyLinkedList();
linkedList.addAtHead(1);
linkedList.addAtTail(3);
linkedList.addAtIndex(1,2);   //链表变为1-> 2-> 3
linkedList.get(1);            //返回2
linkedList.deleteAtIndex(1);  //现在链表是1-> 3
linkedList.get(1);            //返回3
```

## 解题

```ts 
/**
 * 单向链表
 */
export class MyLinkedList {
  private _size = 0
  private _head = new ListNode(0)

  get(index: number): number {
    if (index < 0 || index >= this._size)
      return -1

    let cur = this._head
    for (let i = 0; i <= index; i++)
      cur = cur.next!

    return cur.val
  }

  addAtHead(val: number): void {
    this.addAtIndex(0, val)
  }

  addAtTail(val: number): void {
    this.addAtIndex(this._size, val)
  }

  addAtIndex(index: number, val: number): void {
    if (index > this._size)
      return

    index = Math.max(0, index)
    this._size++
    let pred = this._head
    for (let i = 0; i < index; i++)
      pred = pred.next!

    const toAdd = new ListNode(val, pred.next)
    pred.next = toAdd
  }

  deleteAtIndex(index: number): void {
    if (index < 0 || index >= this._size)
      return

    this._size--
    let pred = this._head
    for (let i = 0; i < index; i++) {
      pred = pred.next!
      pred.next = pred.next!.next
    }
  }
}
```