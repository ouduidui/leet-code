# 设计循环双端队列

> 难度：中等
>
> https://leetcode.cn/problems/design-circular-deque/

## 题目

设计实现双端队列。

实现 `MyCircularDeque` 类:

- `MyCircularDeque(int k)` ：构造函数,双端队列最大为 `k` 。
- `boolean insertFront()`：将一个元素添加到双端队列头部。 如果操作成功返回 `true` ，否则返回 `false` 。
- `boolean insertLast()` ：将一个元素添加到双端队列尾部。如果操作成功返回 `true` ，否则返回 `false` 。
- `boolean deleteFront()` ：从双端队列头部删除一个元素。 如果操作成功返回 `true` ，否则返回 `false` 。
- `boolean deleteLast()` ：从双端队列尾部删除一个元素。如果操作成功返回 `true` ，否则返回 `false` 。
- `int getFront()` ：从双端队列头部获得一个元素。如果双端队列为空，返回 `-1` 。
- `int getRear()` ：获得双端队列的最后一个元素。 如果双端队列为空，返回 `-1` 。
- `boolean isEmpty()` ：若双端队列为空，则返回 `true` ，否则返回 `false`  。
- `boolean isFull()` ：若双端队列满了，则返回 `true` ，否则返回 `false` 。
 

### 示例：

```
输入
["MyCircularDeque", "insertLast", "insertLast", "insertFront", "insertFront", "getRear", "isFull", "deleteLast", "insertFront", "getFront"]
[[3], [1], [2], [3], [4], [], [], [], [4], []]
输出
[null, true, true, true, false, 2, true, true, true, 4]

解释
MyCircularDeque circularDeque = new MycircularDeque(3); // 设置容量大小为3
circularDeque.insertLast(1);			        // 返回 true
circularDeque.insertLast(2);			        // 返回 true
circularDeque.insertFront(3);			        // 返回 true
circularDeque.insertFront(4);			        // 已经满了，返回 false
circularDeque.getRear();  				// 返回 2
circularDeque.isFull();				        // 返回 true
circularDeque.deleteLast();			        // 返回 true
circularDeque.insertFront(4);			        // 返回 true
circularDeque.getFront();				// 返回 4
```

## 解题

```ts 
/**
 * 数组
 */
export class MyCircularDeque {
  capacity: number
  rear = 0
  front = 0
  elements: number[]

  constructor(k: number) {
    this.capacity = k + 1
    this.elements = new Array(this.capacity).fill(0)
  }

  insertFront(value: number): boolean {
    if (this.isFull()) return false
    this.front = (this.front - 1 + this.capacity) % this.capacity
    this.elements[this.front] = value
    return true
  }

  insertLast(value: number): boolean {
    if (this.isFull()) return false
    this.elements[this.rear] = value
    this.rear = (this.rear + 1) % this.capacity
    return true
  }

  deleteFront(): boolean {
    if (this.isEmpty()) return false
    this.front = (this.front + 1) % this.capacity
    return true
  }

  deleteLast(): boolean {
    if (this.isEmpty()) return false
    this.rear = (this.rear - 1 + this.capacity) % this.capacity
    return true
  }

  getFront(): number {
    if (this.isEmpty()) return -1
    return this.elements[this.front]
  }

  getRear(): number {
    if (this.isEmpty()) return -1
    return this.elements[(this.rear - 1 + this.capacity) % this.capacity]
  }

  isEmpty(): boolean {
    return this.rear === this.front
  }

  isFull(): boolean {
    return (this.rear + 1) % this.capacity === this.front
  }
}
```