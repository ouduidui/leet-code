# 最长数对链

> 难度：中等
>
> https://leetcode.cn/problems/maximum-length-of-pair-chain/

## 题目

给出 `n` 个数对。 在每一个数对中，第一个数字总是比第二个数字小。

现在，我们定义一种跟随关系，当且仅当 `b < c` 时，数对`(c, d)` 才可以跟在 `(a, b)` 后面。我们用这种形式来构造一个数对链。

给定一个数对集合，找出能够形成的最长数对链的长度。你不需要用到所有的数对，你可以以任何顺序选择其中的一些数对来构造。

### 示例：

```
输入：[[1,2], [2,3], [3,4]]
输出：2
解释：最长的数对链是 [1,2] -> [3,4]
```

## 解法

### 动态规划

```ts 
/**
 * 动态规划
 * @desc 时间复杂度 O(N²) 空间复杂度 O(N)
 * @param pairs
 * @returns
 */
export function findLongestChain(pairs: number[][]): number {
  const n = pairs.length
  pairs.sort((a, b) => a[0] - b[0])
  const dp = new Array(n).fill(1)
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (pairs[i][0] > pairs[j][1])
        dp[i] = Math.max(dp[i], dp[j] + 1)
    }
  }
  return dp[n - 1]
}
```

### 最长递增子序列

```ts 
/**
 * 最长递增子序列
 * @desc 时间复杂度 O(NlogN) 空间复杂度 O(N)
 * @param pairs
 * @returns
 */
export function findLongestChain2(pairs: number[][]): number {
  pairs.sort((a, b) => a[0] - b[0])
  const arr: number[] = []
  for (const p of pairs) {
    const x = p[0]; const y = p[1]
    if (arr.length === 0 || x > arr[arr.length - 1]) {
      arr.push(y)
    }
    else {
      const idx = binarySearch(arr, x)
      arr[idx] = Math.min(arr[idx], y)
    }
  }
  return arr.length

  function binarySearch(arr: number[], x: number) {
    let low = 0; let high = arr.length - 1
    while (low < high) {
      const mid = low + Math.floor((high - low) / 2)
      if (arr[mid] >= x)
        high = mid

      else
        low = mid + 1
    }
    return low
  }
}
```

### 贪心算法

```ts 
/**
 * 贪心算法
 * @desc 时间复杂度 O(NlogN) 空间复杂度 O(logN)
 * @param pairs
 * @returns
 */
export function findLongestChain3(pairs: number[][]): number {
  let curr = -Number.MAX_VALUE; let res = 0
  pairs.sort((a, b) => a[1] - b[1])
  for (const p of pairs) {
    if (curr < p[0]) {
      curr = p[1]
      res++
    }
  }
  return res
}
```