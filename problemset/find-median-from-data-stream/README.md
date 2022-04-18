# 数据流的中位数

> 难度：困难
>
> https://leetcode-cn.com/problems/find-median-from-data-stream/

## 题目

中位数是有序列表中间的数。如果列表长度是偶数，中位数则是中间两个数的平均值。

例如，

`[2,3,4]` 的中位数是 `3`

`[2,3]` 的中位数是 `(2 + 3) / 2 = 2.5`

设计一个支持以下两种操作的数据结构：

- `void addNum(int num)` - 从数据流中添加一个整数到数据结构中。
- `double findMedian()` - 返回目前所有元素的中位数。

### 示例：

```
addNum(1)
addNum(2)
findMedian() -> 1.5
addNum(3) 
findMedian() -> 2
```

## 解题

```ts
/**
 * 优先队列
 */
export class MedianFinder {
  // 记录小于等于中位数的数值
  private minQueue = new PriorityQueue<number>((a, b) => b < a)
  // 记录大于中位数的数值
  private maxQueue = new PriorityQueue<number>((a, b) => a < b)

  /**
   * 插入数值
   * @desc 时间复杂度 O(logN)  空间复杂度 O(N)
   * @param num
   */
  addNum(num: number): void {
    if (this.minQueue.isEmpty() || num < this.minQueue.peek()!) {
      this.minQueue.offer(num)
      if (this.maxQueue.size + 1 < this.minQueue.size)
        this.maxQueue.offer(this.minQueue.poll()!)
    }
    else {
      this.maxQueue.offer(num)
      if (this.maxQueue.size > this.minQueue.size)
        this.minQueue.offer(this.maxQueue.poll()!)
    }
  }

  /**
   * 获取中位数
   * @desc 时间复杂度 O(1)  空间复杂度 O(N)
   * @returns
   */
  findMedian(): number {
    if (this.minQueue.size > this.maxQueue.size)
      return this.minQueue.peek()!

    return (this.minQueue.peek()! + this.maxQueue.peek()!) / 2
  }
}
```