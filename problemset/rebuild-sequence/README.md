# 重建序列

> 难度：中等
>
> https://leetcode.cn/problems/ur2n8P/

## 题目

给定一个长度为 `n` 的整数数组 `nums` ，其中 `nums` 是范围为 `[1，n]` 的整数的排列。还提供了一个 `2D` 整数数组 `sequences` ，其中 `sequences[i]` 是 `nums` 的子序列。

检查 `nums` 是否是唯一的最短 **超序列** 。最短 **超序列** 是 **长度最短** 的序列，并且所有序列 `sequences[i]` 都是它的子序列。对于给定的数组 `sequences` ，可能存在多个有效的 **超序列** 。

- 例如，对于 `sequences = [[1,2],[1,3]]` ，有两个最短的 **超序列** ，`[1,2,3]` 和 `[1,3,2]` 。
- 而对于 `sequences = [[1,2],[1,3],[1,2,3]]` ，唯一可能的最短 **超序列** 是 `[1,2,3]` 。`[1,2,3,4]` 是可能的超序列，但不是最短的。

如果 `nums` 是序列的唯一最短 **超序列** ，则返回 `true` ，否则返回 `false` 。

**子序列** 是一个可以通过从另一个序列中删除一些元素或不删除任何元素，而不改变其余元素的顺序的序列。

 
### 示例

#### 示例 1：

```
输入：nums = [1,2,3], sequences = [[1,2],[1,3]]
输出：false
解释：有两种可能的超序列：[1,2,3]和[1,3,2]。
序列 [1,2] 是[1,2,3]和[1,3,2]的子序列。
序列 [1,3] 是[1,2,3]和[1,3,2]的子序列。
因为 nums 不是唯一最短的超序列，所以返回false。
```

#### 示例 2：

```
输入：nums = [1,2,3], sequences = [[1,2]]
输出：false
解释：最短可能的超序列为 [1,2]。
序列 [1,2] 是它的子序列：[1,2]。
因为 nums 不是最短的超序列，所以返回false。
```

#### 示例 3：

```
输入：nums = [1,2,3], sequences = [[1,2],[1,3],[2,3]]
输出：true
解释：最短可能的超序列为[1,2,3]。
序列 [1,2] 是它的一个子序列：[1,2,3]。
序列 [1,3] 是它的一个子序列：[1,2,3]。
序列 [2,3] 是它的一个子序列：[1,2,3]。
因为 nums 是唯一最短的超序列，所以返回true。
```

## 解题

```ts 
/**
 * 拓扑排序
 * @desc 时间复杂度 O(N+M) 空间复杂度 O(N+M)
 * @param nums
 * @param sequences
 * @returns
 */
export function sequenceReconstruction(nums: number[], sequences: number[][]): boolean {
  const len = nums.length
  const indegrees: number[] = new Array(len + 1).fill(0)
  const graph = new Array(len + 1).fill(0).map(() => new Set<number>())
  for (const sequence of sequences) {
    const size = sequence.length
    for (let i = 1; i < size; i++) {
      const prev = sequence[i - 1]
      const next = sequence[i]
      graph[prev].add(next)
      indegrees[next]++
    }
  }

  const queue: number[] = []
  for (let i = 1; i <= len; i++)
    if (indegrees[i] === 0) queue.push(i)

  while (queue.length) {
    if (queue.length > 1) return false

    const num = queue.shift()!
    const set = graph[num]
    for (const next of set) {
      indegrees[next]--
      if (indegrees[next] === 0) queue.push(next)
    }
  }

  return true
}
```