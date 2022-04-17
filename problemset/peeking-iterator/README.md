# 顶端迭代器

> 难度：中等
>
> https://leetcode-cn.com/problems/peeking-iterator/

## 题目

请你在设计一个迭代器，在集成现有迭代器拥有的 `hasNext` 和 `next` 操作的基础上，还额外支持 `peek` 操作。

实现 `PeekingIterator` 类：

- `PeekingIterator(Iterator<int> nums)` 使用指定整数迭代器 `nums` 初始化迭代器。
- `int next()` 返回数组中的下一个元素，并将指针移动到下个元素处。
- `bool hasNext()` 如果数组中存在下一个元素，返回 `true` ；否则，返回 `false` 。
- `int peek()` 返回数组中的下一个元素，但 **不** 移动指针。

注意：每种语言可能有不同的构造函数和迭代器 `Iterator`，但均支持 `int next()` 和 `boolean hasNext()` 函数。

 

### 示例：

```
输入：
["PeekingIterator", "next", "peek", "next", "next", "hasNext"]
[[[1, 2, 3]], [], [], [], [], []]
输出：
[null, 1, 2, 2, 3, false]

解释：
PeekingIterator peekingIterator = new PeekingIterator([1, 2, 3]); // [1,2,3]
peekingIterator.next();    // 返回 1 ，指针移动到下一个元素 [1,2,3]
peekingIterator.peek();    // 返回 2 ，指针未发生移动 [1,2,3]
peekingIterator.next();    // 返回 2 ，指针移动到下一个元素 [1,2,3]
peekingIterator.next();    // 返回 3 ，指针移动到下一个元素 [1,2,3]
peekingIterator.hasNext(); // 返回 False
```

## 解题

```ts
export class Iterator<T = number> {
  constructor(private arr: T[]) {}

  hasNext(): boolean {
    return this.arr.length > 0
  }

  next(): T {
    return this.arr.shift()!
  }
}

export class PeekingIterator<T = number> {
  private nextElement: T | null = null

  constructor(private iterator: Iterator<T>) {
    if (iterator.hasNext())
      this.nextElement = iterator.next()
  }

  peek(): T {
    return this.nextElement!
  }

  next(): T {
    const res = this.nextElement
    if (this.iterator.hasNext())
      this.nextElement = this.iterator.next()
    else
      this.nextElement = null

    return res!
  }

  hasNext(): boolean {
    return this.nextElement !== null
  }
}
```