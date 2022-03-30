# 找到处理最多请求的服务器

> 难度：困难
>
> https://leetcode-cn.com/problems/find-servers-that-handled-most-number-of-requests/

## 题目

你有 `k` 个服务器，编号为 `0` 到 `k-1` ，它们可以同时处理多个请求组。每个服务器有无穷的计算能力但是 **不能同时处理超过一个请求** 。请求分配到服务器的规则如下：

- 第 `i` （序号从 `0 `开始）个请求到达。
- 如果所有服务器都已被占据，那么该请求被舍弃（完全不处理）。
- 如果第 `(i % k)` 个服务器空闲，那么对应服务器会处理该请求。
- 否则，将请求安排给下一个空闲的服务器（服务器构成一个环，必要的话可能从第 0 个服务器开始继续找下一个空闲的服务器）。比方说，如果第 `i` 个服务器在忙，那么会查看第 `(i+1)` 个服务器，第 `(i+2)` 个服务器等等。

给你一个 **严格递增** 的正整数数组 `arrival` ，表示第 `i` 个任务的到达时间，和另一个数组 `load` ，其中 `load[i]` 表示第 `i` 个请求的工作量（也就是服务器完成它所需要的时间）。你的任务是找到 **最繁忙的服务器** 。最繁忙定义为一个服务器处理的请求数是所有服务器里最多的。

请你返回包含所有 **最繁忙服务器** 序号的列表，你可以以任意顺序返回这个列表。

### 示例

#### 示例 1：

![find-servers-that-handled-most-number-of-requests](https://user-images.githubusercontent.com/54696834/160734018-a9ba5f3f-5624-4e9d-8e3f-5508f0f59a9e.png)

```
输入：k = 3, arrival = [1,2,3,4,5], load = [5,2,3,3,3] 
输出：[1] 
解释：
所有服务器一开始都是空闲的。
前 3 个请求分别由前 3 台服务器依次处理。
请求 3 进来的时候，服务器 0 被占据，所以它呗安排到下一台空闲的服务器，也就是服务器 1 。
请求 4 进来的时候，由于所有服务器都被占据，该请求被舍弃。
服务器 0 和 2 分别都处理了一个请求，服务器 1 处理了两个请求。所以服务器 1 是最忙的服务器。
```

#### 示例 2：

```
输入：k = 3, arrival = [1,2,3,4], load = [1,2,1,2]
输出：[0]
解释：
前 3 个请求分别被前 3 个服务器处理。
请求 3 进来，由于服务器 0 空闲，它被服务器 0 处理。
服务器 0 处理了两个请求，服务器 1 和 2 分别处理了一个请求。所以服务器 0 是最忙的服务器。
```

#### 示例 3：

```
输入：k = 3, arrival = [1,2,3], load = [10,12,11]
输出：[0,1,2]
解释：每个服务器分别处理了一个请求，所以它们都是最忙的服务器。
```

#### 示例 4：

```
输入：k = 3, arrival = [1,2,3,4,8,9,10], load = [5,2,10,3,1,2,2]
输出：[1]
```

#### 示例 5：

```
输入：k = 1, arrival = [1], load = [1]
输出：[0]
```

## 解题

```ts
/**
 * 双优先队列 + 模拟
 * @desc 时间复杂度 O((k+n)logk)  空间复杂度 O(k)
 * @param k
 * @param arrival
 * @param load
 * @returns
 */
export function busiestServers(
  k: number,
  arrival: number[],
  load: number[],
): number[] {
  const used = new PriorityQueue<[delay: number, index: number]>((a, b) => a[0] < b[0])
  const available = new PriorityQueue<number>((a, b) => a < b)
  for (let i = 0; i < k; i++)
    available.offer(i)

  const counts = new Array(k).fill(0)
  let maxCount = 0

  // 遍历所有请求
  for (let i = 0; i < arrival.length; i++) {
    const arr = arrival[i]
    const duration = load[i]
    // 找到已经处理完请求的服务器并将其入队等候
    while (used.size > 0 && used.peek()![0] <= arr) {
      const cur = used.poll()!
      available.offer(
        i + ((cur[1] - i) % k + k) % k, // 保证得到的是一个不小于 i 的且与 id 同余的数
      )
    }
    if (available.size > 0) {
      // 找到空闲的服务器下标
      const idx = available.poll()! % k
      used.offer([arr + duration, idx])

      // 更新计数
      counts[idx]++
      maxCount = Math.max(maxCount, counts[idx])
    }
  }

  return counts.reduce((acc, cur, index) => {
    if (cur === maxCount) acc.push(index)
    return acc
  }, [])
}

/**
 * 优先队列
 */
class PriorityQueue<T> {
  _data: T[] = []
  size = 0

  constructor(
    private _compare: (a: T, b: T) => boolean,
  ) {}

  /**
   * 获取队头的值
   * @returns
   */
  peek(): T | null {
    return this.size === 0 ? null : this._data[0]
  }

  /**
   * 入队操作
   * @param val
   */
  offer(val: T) {
    this._data.push(val)
    // 将优先级最高的放置队尾
    this._shiftUp(this.size++)
  }

  /**
   * 弹出队尾的值
   * @returns
   */
  poll() {
    if (this.size === 0) return null

    this._swap(0, --this.size)
    // 将优先级最高的放置队尾
    this._shiftDown(0)
    return this._data.pop()
  }

  private _parent(index: number): number {
    return index - 1 >> 1
  }

  private _child(index: number): number {
    return (index << 1) + 1
  }

  private _shiftUp(index: number) {
    while (this._parent(index) >= 0
      && this._compare(this._data[index], this._data[this._parent(index)])) {
      this._swap(index, this._parent(index))
      index = this._parent(index)
    }
  }

  private _shiftDown(index: number) {
    while (this._child(index) < this.size) {
      let child = this._child(index)
      if (child + 1 < this.size && this._compare(this._data[child + 1], this._data[child]))
        child = child + 1

      if (this._compare(this._data[index], this._data[child]))
        break

      this._swap(index, child)
      index = child
    }
  }

  /**
   * 调换顺序
   * @param a
   * @param b
   */
  private _swap(a: number, b: number) {
    [this._data[a], this._data[b]] = [this._data[b], this._data[a]]
  }
}
```