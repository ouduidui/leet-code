# 最大加号标志

> 难度：中等
>
> https://leetcode.cn/problems/largest-plus-sign/

## 题目

在一个 `n x n` 的矩阵 `grid` 中，除了在数组 `mines` 中给出的元素为 `0`，其他每个元素都为 `1`。`mines[i] = [xi, yi]`表示 `grid[xi][yi] == 0`

返回 `grid` 中包含 `1` 的最大的 **轴对齐** 加号标志的阶数 。如果未找到加号标志，则返回 `0` 。

一个 `k` 阶由 `1` 组成的 **“轴对称”加号标志** 具有中心网格 g`rid[r][c] == 1` ，以及4个从中心向上、向下、向左、向右延伸，长度为 `k-1`，由 `1` 组成的臂。注意，只有加号标志的所有网格要求为 `1` ，别的网格可能为 `0` 也可能为 `1` 。

### 示例

#### 示例 1：

![image](https://user-images.githubusercontent.com/54696834/200703457-0d982279-bc0f-4100-be98-ad47cb782343.png)

```
输入: n = 5, mines = [[4, 2]]
输出: 2
解释: 在上面的网格中，最大加号标志的阶只能是2。一个标志已在图中标出。
```

#### 示例 2：

![image](https://user-images.githubusercontent.com/54696834/200703474-f1308f8d-c672-4b3c-a68c-db2b81cb2168.png)

```
输入: n = 1, mines = [[0, 0]]
输出: 0
解释: 没有加号标志，返回 0 。
```

## 解题

```ts
/**
 * 动态规划
 * @desc 时间复杂度 O(N²) 空间复杂度 O(N²)
 * @param n
 * @param mines
 * @returns
 */
export function orderOfLargestPlusSign(n: number, mines: number[][]): number {
  const dp: number[][] = new Array(n).fill(0).map(() => new Array(n).fill(n))
  const banned = new Set<number>()
  for (const vec of mines)
    banned.add(vec[0] * n + vec[1])

  let ans = 0
  for (let i = 0; i < n; i++) {
    let count = 0
    /* left */
    for (let j = 0; j < n; j++) {
      if (banned.has(i * n + j))
        count = 0

      else
        count++

      dp[i][j] = Math.min(dp[i][j], count)
    }
    count = 0
    /* right */
    for (let j = n - 1; j >= 0; j--) {
      if (banned.has(i * n + j))
        count = 0

      else
        count++

      dp[i][j] = Math.min(dp[i][j], count)
    }
  }
  for (let i = 0; i < n; i++) {
    let count = 0
    /* up */
    for (let j = 0; j < n; j++) {
      if (banned.has(j * n + i))
        count = 0

      else
        count++

      dp[j][i] = Math.min(dp[j][i], count)
    }
    count = 0
    /* down */
    for (let j = n - 1; j >= 0; j--) {
      if (banned.has(j * n + i))
        count = 0

      else
        count++

      dp[j][i] = Math.min(dp[j][i], count)
      ans = Math.max(ans, dp[j][i])
    }
  }
  return ans
}
```