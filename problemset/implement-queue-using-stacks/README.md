# 用栈实现队列

> 难度：简单
>
> https://leetcode-cn.com/problems/implement-queue-using-stacks/

## 题目

请你仅使用两个栈实现先入先出队列。队列应当支持一般队列支持的所有操作（`push`、`pop`、`peek`、`empty`）：

实现 `MyQueue` 类：

- `void push(int x)` 将元素 `x` 推到队列的末尾
- `int pop()` 从队列的开头移除并返回元素
- `int peek()` 返回队列开头的元素
- `boolean empty()` 如果队列为空，返回 `true` ；否则，返回 `false`

说明：

- 你 **只能** 使用标准的栈操作 —— 也就是只有` push to top`, `peek/pop from top`,` size`, 和 `is empty` 操作是合法的。
- 你所使用的语言也许不支持栈。你可以使用 `list` 或者 `deque`（双端队列）来模拟一个栈，只要是标准的栈操作即可。
 

### 示例：

```
输入：
["MyQueue", "push", "push", "peek", "pop", "empty"]
[[], [1], [2], [], [], []]
输出：
[null, null, null, 1, 1, false]

解释：
MyQueue myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
myQueue.peek(); // return 1
myQueue.pop(); // return 1, queue is [2]
myQueue.empty(); // return false
```

## 解题

```ts
export class MyQueue<T = number> {
  inStack: T[] = []
  outStack: T[] = []

  push(x: T): void {
    this.inStack.push(x)
  }

  pop(): T {
    if (!this.outStack.length)
      this.inToOut()

    return this.outStack.pop()!
  }

  peek(): T {
    if (!this.outStack.length)
      this.inToOut()

    return this.outStack[this.outStack.length - 1]
  }

  empty(): boolean {
    return this.outStack.length === 0 && this.inStack.length === 0
  }

  private inToOut() {
    while (this.inStack.length)
      this.outStack.push(this.inStack.pop()!)
  }
}
```