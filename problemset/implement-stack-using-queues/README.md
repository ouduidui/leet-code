# 用队列实现栈

> 难度：简单
>
> https://leetcode-cn.com/problems/implement-stack-using-queues/

## 题目

请你仅使用两个队列实现一个后入先出（LIFO）的栈，并支持普通栈的全部四种操作（`push`、`top`、`pop` 和 `empty`）。

实现 `MyStack` 类：

- `void push(int x)` 将元素 `x` 压入栈顶。
- `int pop()` 移除并返回栈顶元素。
- `int top()` 返回栈顶元素。
- `boolean empty()` 如果栈是空的，返回 `true` ；否则，返回 `false` 。
 

注意：

- 你只能使用队列的基本操作 —— 也就是 `push to back`、`peek/pop from front`、`size` 和 `is empty` 这些操作。
- 你所使用的语言也许不支持队列。 你可以使用 `list` （列表）或者 `deque`（双端队列）来模拟一个队列 , 只要是标准的队列操作即可。
 

### 示例：

```
输入：
["MyStack", "push", "push", "top", "pop", "empty"]
[[], [1], [2], [], [], []]
输出：
[null, null, null, 2, 2, false]

解释：
MyStack myStack = new MyStack();
myStack.push(1);
myStack.push(2);
myStack.top(); // 返回 2
myStack.pop(); // 返回 2
myStack.empty(); // 返回 False
```

## 解题

```ts
export class MyStack<T = number> {
  queue = new Array<T>()

  /**
   * 入栈
   * @param x
   */
  push(x: T): void {
    let len = this.queue.length
    this.queue.unshift(x)
    while (len) {
      this.queue.unshift(this.queue.pop()!)
      len--
    }
  }

  /**
   * 出栈
   * @returns
   */
  pop(): T {
    return this.queue.pop()!
  }

  /**
   * 获取栈顶元素
   * @returns
   */
  top(): T {
    return this.queue[this.queue.length - 1]
  }

  /**
   * 判断栈是否为空
   * @returns
   */
  empty(): boolean {
    return this.queue.length === 0
  }
}
```