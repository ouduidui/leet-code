# 飞地的数量

> 难度：中等
>
> https://leetcode-cn.com/problems/number-of-enclaves/

## 题目

给你一个大小为 `m x n` 的二进制矩阵 `grid` ，其中 `0` 表示一个海洋单元格、`1` 表
示一个陆地单元格。

一次 **移动** 是指从一个陆地单元格走到另一个相邻（`上、下、左、右`）的陆地单元格
或跨过 `grid` 的边界。

返回网格中 **无法** 在任意次数的移动中离开网格边界的陆地单元格的数量。

### 示例

#### 示例 1：

![number-of-enclaves-1](https://user-images.githubusercontent.com/54696834/159101985-51ffac72-b3ac-42dc-aeba-b9779610015d.jpg)

```
输入：grid = [[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]]
输出：3
解释：有三个 1 被 0 包围。一个 1 没有被包围，因为它在边界上。
```

#### 示例 2：

![number-of-enclaves-2](https://user-images.githubusercontent.com/54696834/159101983-66e02449-236d-4bdb-9ba5-d44d8a22b9c6.jpg)

```
输入：grid = [[0,1,1,0],[0,0,1,0],[0,0,1,0],[0,0,0,0]]
输出：0
解释：所有 1 都在边界上或可以到达边界。
```

## 解题

```typescript
/**
 * 深度优先搜索
 * @desc 时间复杂度 O(MN)   空间复杂度 O(MN)
 * @param grid
 */
export function numEnclaves(grid: number[][]): number {
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1]
  ];
  const m = grid.length;
  const n = grid[0].length;
  const visited: boolean[][] = new Array(m)
    .fill([])
    .map(() => new Array(n).fill(false));

  // 遍历边界所有单元格，看看能够触及到内圈的陆地单元格
  // 遍历第一列和最后一列
  for (let i = 0; i < m; i++) {
    dfs(grid, i, 0);
    dfs(grid, i, n - 1);
  }

  // 遍历第一行和最后一行
  for (let j = 1; j < n - 1; j++) {
    dfs(grid, 0, j);
    dfs(grid, m - 1, j);
  }

  // 将gird和visited每个单元格进行异或操作
  let enclaves = 0;
  for (let i = 1; i < m - 1; i++) {
    for (let j = 1; j < n - 1; j++) {
      if (grid[i][j] === 1 && !visited[i][j]) enclaves++;
    }
  }

  return enclaves;

  function dfs(grid: number[][], row: number, col: number) {
    if (
      /* 超出边界 */
      row < 0 ||
      row >= m ||
      col < 0 ||
      col >= n ||
      /* 海洋单元格 */
      grid[row][col] === 0 ||
      /* 走过的单元格 */
      visited[row][col]
    )
      return;

    visited[row][col] = true;
    for (const dir of dirs) {
      dfs(grid, row + dir[0], col + dir[1]);
    }
  }
}
```
