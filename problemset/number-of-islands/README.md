# 岛屿数量

> 难度：中等
>
> https://leetcode-cn.com/problems/number-of-islands/

## 题目

给你一个由  `'1'`（陆地）和 `'0'`（水）组成的的二维网格，请你计算网格中岛屿的数
量。

岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。

此外，你可以假设该网格的四条边均被水包围。

### 示例

#### 示例 1：

```
输入：grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
输出：1
```

#### 示例 2：

```
输入：grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
输出：3
```

## 解题

### 深度优先遍历

```typescript
/**
 * 深度优先遍历
 * @desc 时间复杂度 O(NM)   空间复杂度 O(NM)
 * @param grid
 * @returns
 */
export function numIslands(grid: string[][]): number {
  if (grid.length === 0 || grid[0].length === 0) return 0;

  const m = grid.length;
  const n = grid[0].length;
  let result = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] !== '1') continue;
      result++;
      dfs(grid, m, n, i, j);
    }
  }

  return result;

  function dfs(
    grid: string[][],
    m: number,
    n: number,
    i: number,
    j: number
  ): void {
    if (i < 0 || j < 0 || i >= m || j >= n || grid[i][j] === '0') return;

    grid[i][j] = '0';
    dfs(grid, m, n, i + 1, j);
    dfs(grid, m, n, i - 1, j);
    dfs(grid, m, n, i, j + 1);
    dfs(grid, m, n, i, j - 1);
  }
}
```

### 广度优先遍历

```typescript
/**
 * 广度优先遍历
 * @desc 时间复杂度 O(NM)   空间复杂度 O(NM)
 * @param grid
 * @returns
 */
export function numIslands2(grid: string[][]): number {
  if (grid.length === 0 || grid[0].length === 0) return 0;

  const m = grid.length;
  const n = grid[0].length;
  let result = 0;

  // 生成队列key
  const generateKey = (i: number, j: number): number =>
    i * n + j; /* j 恒小于 n */

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] !== '1') continue;
      result++;
      grid[i][j] = '0';

      const queue = [generateKey(i, j)];

      while (queue.length) {
        const key = queue.pop()!;
        const row = (key / n) >> 0;
        const col = key % n;
        if (row - 1 >= 0 && grid[row - 1][col] === '1') {
          queue.unshift(generateKey(row - 1, col));
          grid[row - 1][col] = '0';
        }
        if (row + 1 < m && grid[row + 1][col] === '1') {
          queue.unshift(generateKey(row + 1, col));
          grid[row + 1][col] = '0';
        }
        if (col - 1 >= 0 && grid[row][col - 1] === '1') {
          queue.unshift(generateKey(row, col - 1));
          grid[row][col - 1] = '0';
        }
        if (col + 1 < n && grid[row][col + 1] === '1') {
          queue.unshift(generateKey(row, col + 1));
          grid[row][col + 1] = '0';
        }
      }
    }
  }

  return result;
}
```

### 并查集

```typescript
/**
 * 并查集
 * @desc 时间复杂度 O(NM)   空间复杂度 O(NM)
 * @param grid
 * @returns
 */
export function numIslands3(grid: string[][]): number {
  if (grid.length === 0 || grid[0].length === 0) return 0;

  const unionFind = new UnionFind(grid);
  const { m, n } = unionFind;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '1') {
        grid[i][j] = '0';
        if (i - 1 >= 0 && grid[i - 1][j] === '1') {
          unionFind.union(
            unionFind.generateKey(i, j),
            unionFind.generateKey(i - 1, j)
          );
        }
        if (i + 1 < m && grid[i + 1][j] === '1') {
          unionFind.union(
            unionFind.generateKey(i, j),
            unionFind.generateKey(i + 1, j)
          );
        }
        if (j - 1 >= 0 && grid[i][j - 1] === '1') {
          unionFind.union(
            unionFind.generateKey(i, j),
            unionFind.generateKey(i, j - 1)
          );
        }
        if (j + 1 < n && grid[i][j + 1] === '1') {
          unionFind.union(
            unionFind.generateKey(i, j),
            unionFind.generateKey(i, j + 1)
          );
        }
      }
    }
  }

  return unionFind.count;
}

class UnionFind {
  count: number; // 记录item为1的个数
  parent: number[]; // index为每个item的唯一key，value为它们合并后的根位置
  rank: number[]; // 记录每个根位置的合并数量
  m: number;
  n: number;

  constructor(grid: string[][]) {
    // 初始化
    this.count = 0;
    const m = (this.m = grid.length);
    const n = (this.n = grid[0].length);
    this.parent = new Array(m * n).fill(-1);
    this.rank = new Array(m * n).fill(0);

    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        const key = this.generateKey(i, j);
        if (grid[i][j] === '1') {
          this.parent[key] = key;
          this.count++;
        }
      }
    }
  }

  /**
   * 生成唯一keys
   * @param i
   * @param j
   * @returns
   */
  generateKey(i: number, j: number): number {
    return i * this.n + j;
  }

  find(i: number): number {
    if (this.parent[i] !== i) this.parent[i] = this.find(this.parent[i]);
    return this.parent[i];
  }

  /**
   * 合并操作
   * @param x
   * @param y
   */
  union(x: number, y: number) {
    // 找到x,y的根位置
    // 这里可以确保x,y的item都为1
    const xRoot = this.find(x);
    const yRoot = this.find(y);

    // xRoot === yRoot 代表已经合并了
    if (xRoot === yRoot) return;

    // 合并操作
    if (this.rank[xRoot] > this.rank[yRoot]) {
      this.parent[yRoot] = xRoot;
    } else if (this.rank[xRoot] < this.rank[yRoot]) {
      this.parent[xRoot] = yRoot;
    } else {
      this.parent[yRoot] = xRoot;
      this.rank[xRoot] += 1;
    }
    this.count--;
  }
}
```
