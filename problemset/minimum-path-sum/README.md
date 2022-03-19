# 最小路径和

> 难度：中等
>
> https://leetcode-cn.com/problems/minimum-path-sum/

## 题目

给定一个包含非负整数的 `m x n` 网格 grid ，请找出一条从左上角到右下角的路径，使
得路径上的数字总和为最小。

说明：每次只能向下或者向右移动一步。

### 示例

#### 示例 1

![minimum-path-sum](https://user-images.githubusercontent.com/88995580/159103260-d2ce9e33-8c9b-48af-bf03-af3db1fc13de.jpg)

```
输入：grid = [[1,3,1],[1,5,1],[4,2,1]]
输出：7
解释：因为路径 1→3→1→1→1 的总和最小。
```

#### 示例 2

```
输入：grid = [[1,2,3],[4,5,6]]
输出：12
```

## 解法

```typescript
/**
 * 动态规划
 * @desc 时间复杂度 O(MN)   空间复杂度 O(MN)
 * @param grid
 */
export function minPathSum(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;

  // 深拷贝 grid
  const dp = [...grid].map((item) => [...item]);

  for (let x = 0; x < m; x++) {
    for (let y = 0; y < n; y++) {
      if (x === 0 && y !== 0) {
        dp[x][y] += dp[x][y - 1];
      } else if (x !== 0 && y === 0) {
        dp[x][y] += dp[x - 1][y];
      } else if (x !== 0 && y !== 0) {
        dp[x][y] = Math.min(dp[x][y] + dp[x - 1][y], dp[x][y] + dp[x][y - 1]);
      }
    }
  }

  return dp[m - 1][n - 1];
}
```
