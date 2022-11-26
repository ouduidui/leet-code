# 细分图中的可到达节点

> 难度：困难
>
> https://leetcode.cn/problems/reachable-nodes-in-subdivided-graph/

## 题目

给你一个无向图（原始图），图中有 `n` 个节点，编号从 `0` 到 `n - 1` 。你决定将图中的每条边 **细分** 为一条节点链，每条边之间的新节点数各不相同。

图用由边组成的二维数组 `edges` 表示，其中 `edges[i] = [ui, vi, cnti]` 表示原始图中节点 `ui` 和 `vi` 之间存在一条边，`cnti` 是将边 **细分** 后的新节点总数。注意，`cnti == 0` 表示边不可细分。

要 **细分** 边 `[ui, vi]` ，需要将其替换为 `(cnti + 1)` 条新边，和 `cnti` 个新节点。新节点为 `x1, x2, ..., xcnti` ，新边为 `[ui, x1], [x1, x2], [x2, x3], ..., [xcnti+1, xcnti], [xcnti, vi]` 。

现在得到一个 **新的细分图** ，请你计算从节点 `0` 出发，可以到达多少个节点？如果节点间距离是 `maxMoves` 或更少，则视为 **可以到达** 。

给你原始图和 `maxMoves` ，返回 新的细分图中从节点 `0` **出发** 可到达的节点数 。

### 示例

#### 示例 1：

![image](https://user-images.githubusercontent.com/54696834/204071819-c1e7c0fb-851f-4cb3-b3f2-05d9341d79f6.png)
  
```
输入：edges = [[0,1,10],[0,2,1],[1,2,2]], maxMoves = 6, n = 3
输出：13
解释：边的细分情况如上图所示。
可以到达的节点已经用黄色标注出来。
```

#### 示例 2：

```
输入：edges = [[0,1,4],[1,2,6],[0,2,8],[1,3,1]], maxMoves = 10, n = 4
输出：23
```

#### 示例 3：

```
输入：edges = [[1,2,4],[1,4,5],[1,3,1],[2,3,4],[3,4,5]], maxMoves = 17, n = 5
输出：1
解释：节点 0 与图的其余部分没有连通，所以只有节点 0 可以到达。
```

## 解题

```ts 
/**
 * Dijkstra算法
 * @param edges
 * @param maxMoves
 * @param n
 * @returns
 */
export function reachableNodes(
  edges: number[][],
  maxMoves: number,
  n: number,
): number {
  const adList: [number, number][][] = Array(n)
    .fill(0)
    .map(() => [])

  for (const [u, v, c] of edges) {
    adList[u].push([v, c])
    adList[v].push([u, c])
  }

  const used = new Map<string, number>()
  const visited: boolean[] = Array(n).fill(false)
  let reachableNodes = 0

  const pq = new BinaryHeap<[number, number]>((a, b) => a[0] - b[0])
  pq.push([0, 0])

  while (!pq.isEmpty() && (pq.peek() as [number, number])[0] <= maxMoves) {
    const [step, u] = pq.pop() as [number, number]
    if (visited[u])
      continue

    visited[u] = true
    reachableNodes++

    for (const [v, c] of adList[u]) {
      if (c + step + 1 <= maxMoves && !visited[v])
        pq.push([c + step + 1, v])

      used.set(JSON.stringify([u, v]), Math.min(c, maxMoves - step))
    }
  }

  for (const [u, v, c] of edges) {
    reachableNodes += Math.min(
      c,
      (used.get(JSON.stringify([u, v])) ?? 0)
                + (used.get(JSON.stringify([v, u])) ?? 0),
    )
  }
  return reachableNodes
}

// Copyright 2018-2022 the Deno authors. All rights reserved. MIT license.
/** This module is browser compatible. */

/** Swaps the values at two indexes in an array. */
function swap<T>(array: T[], a: number, b: number) {
  const temp: T = array[a]
  array[a] = array[b]
  array[b] = temp
}

/** Returns the parent index for a child index. */
function getParentIndex(index: number) {
  return Math.floor((index + 1) / 2) - 1
}

/**
 * A priority queue implemented with a binary heap. The heap is in decending order by default,
 * using JavaScript's built in comparison operators to sort the values.
 */
class BinaryHeap<T> implements Iterable<T> {
  _data: T[] = []
  constructor(private compare: (a: T, b: T) => number = descend) {}

  /** Creates a new binary heap from an array like or iterable object. */
  static from<T>(
    collection: ArrayLike<T> | Iterable<T> | BinaryHeap<T>,
  ): BinaryHeap<T>

  static from<T>(
    collection: ArrayLike<T> | Iterable<T> | BinaryHeap<T>,
    options: {
      compare?: (a: T, b: T) => number
    },
  ): BinaryHeap<T>

  static from<T, U, V>(
    collection: ArrayLike<T> | Iterable<T> | BinaryHeap<T>,
    options: {
      compare?: (a: U, b: U) => number
      map: (value: T, index: number) => U
      thisArg?: V
    },
  ): BinaryHeap<U>

  static from<T, U, V>(
    collection: ArrayLike<T> | Iterable<T> | BinaryHeap<T>,
    options?: {
      compare?: (a: U, b: U) => number
      map?: (value: T, index: number) => U
      thisArg?: V
    },
  ): BinaryHeap<U> {
    let result: BinaryHeap<U>
    let unmappedValues: ArrayLike<T> | Iterable<T> = []
    if (collection instanceof BinaryHeap) {
      result = new BinaryHeap(
        options?.compare ?? (collection as unknown as BinaryHeap<U>).compare,
      )
      if (options?.compare || options?.map)
        unmappedValues = collection._data

      else
        result._data = Array.from(collection._data as unknown as U[])
    }
    else {
      result = options?.compare
        ? new BinaryHeap(options.compare)
        : new BinaryHeap()
      unmappedValues = collection
    }
    const values: Iterable<U> = options?.map
      ? Array.from(unmappedValues, options.map, options.thisArg)
      : unmappedValues as U[]
    result.push(...values)
    return result
  }

  /** The amount of values stored in the binary heap. */
  get length(): number {
    return this._data.length
  }

  /** Returns the greatest value in the binary heap, or undefined if it is empty. */
  peek(): T | undefined {
    return this._data[0]
  }

  /** Removes the greatest value from the binary heap and returns it, or null if it is empty. */
  pop(): T | undefined {
    const size: number = this._data.length - 1
    swap(this._data, 0, size)
    let parent = 0
    let right: number = 2 * (parent + 1)
    let left: number = right - 1
    while (left < size) {
      const greatestChild
        = right === size || this.compare(this._data[left], this._data[right]) <= 0
          ? left
          : right
      if (this.compare(this._data[greatestChild], this._data[parent]) < 0) {
        swap(this._data, parent, greatestChild)
        parent = greatestChild
      }
      else {
        break
      }
      right = 2 * (parent + 1)
      left = right - 1
    }
    return this._data.pop()
  }

  /** Adds values to the binary heap. */
  push(...values: T[]): number {
    for (const value of values) {
      let index: number = this._data.length
      let parent: number = getParentIndex(index)
      this._data.push(value)
      while (
        index !== 0 && this.compare(this._data[index], this._data[parent]) < 0
      ) {
        swap(this._data, parent, index)
        index = parent
        parent = getParentIndex(index)
      }
    }
    return this._data.length
  }

  /** Removes all values from the binary heap. */
  clear() {
    this._data = []
  }

  /** Checks if the binary heap is empty. */
  isEmpty(): boolean {
    return this._data.length === 0
  }

  /** Returns an iterator for retrieving and removing values from the binary heap. */
  *drain(): IterableIterator<T> {
    while (!this.isEmpty())
      yield this.pop() as T
  }

  *[Symbol.iterator](): IterableIterator<T> {
    yield * this.drain()
  }
}

/** Compares its two arguments for descending order using JavaScript's built in comparison operators. */
function descend<T>(a: T, b: T) {
  return a < b ? 1 : a > b ? -1 : 0
}
```