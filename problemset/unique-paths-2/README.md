# 不同路径 II

> 难度：中等
>
> https://leetcode-cn.com/problems/unique-paths-ii/

## 题目

一个机器人位于一个 `m x n` 网格的左上角 （起始点在下图中标记为“Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为
“Finish”）。

现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？

![unique-paths-II-1](https://user-images.githubusercontent.com/88995580/159103256-2fd5e01d-8027-4f0e-8c73-18b7563a1de5.png)

网格中的障碍物和空位置分别用 1 和 0 来表示。

### 示例

#### 示例 1

![unique-paths-II-2](https://user-images.githubusercontent.com/88995580/159103233-6031111d-a476-42a3-b449-ad1a24a55e09.jpg)

```
输入：obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
输出：2
解释：
3x3 网格的正中间有一个障碍物。
从左上角到右下角一共有 2 条不同的路径：
1. 向右 -> 向右 -> 向下 -> 向下
2. 向下 -> 向下 -> 向右 -> 向右
```

#### 示例 2

![unique-paths-II-3](https://user-images.githubusercontent.com/88995580/159103258-45251535-2b61-408f-8a8f-b2af649b4899.jpg)

```
输入：obstacleGrid = [[0,1],[0,0]]
输出：1
```

## 解法

### 动态规划

```typescript
/**
 * 动态规划
 * @desc 时间复杂度 O(MN)  空间复杂度 O(MN)
 * @param obstacleGrid {number[][]}
 * @return number
 */
export function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;

  const dp: number[][] = new Array(m).fill(0).map(() => new Array(n).fill(0));

  for (let x = 0; x < m; x++) {
    if (obstacleGrid[x][0] !== 1) dp[x][0] = 1;
  }

  for (let y = 0; y < n; y++) {
    if (obstacleGrid[0][y] !== 1) dp[0][y] = 1;
  }

  for (let x = 1; x < m; x++) {
    for (let y = 1; y < n; y++) {
      if (obstacleGrid[x][y] !== 1) dp[x][y] = dp[x - 1][y] + dp[x][y - 1];
    }
  }

  return dp[m - 1][n - 1];
}
```

### 滚动数组 + 动态规划

```typescript
/**
 * 动态规划 + 滚动数组
 * @desc 时间复杂度 O(MN)  空间复杂度 O(M)
 * @param obstacleGrid {number[][]}
 * @return number
 */
export function uniquePathsWithObstacles2(obstacleGrid: number[][]): number {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  // 滚动数组
  const f: number[] = new Array(n).fill(0);

  f[0] = obstacleGrid[0][0] === 0 ? 1 : 0;

  for (let x = 0; x < m; x++) {
    for (let y = 0; y < n; y++) {
      if (obstacleGrid[x][y] === 1) {
        f[y] = 0;
        continue;
      }

      if (y - 1 >= 0 && obstacleGrid[x][y - 1] === 0) {
        f[y] += f[y - 1];
      }
    }
  }

  return f[n - 1];
}
```
