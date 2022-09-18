# 最大人工岛

> 难度：困难
>
> https://leetcode.cn/problems/making-a-large-island/

## 题目

给你一个大小为 `n x n` 二进制矩阵 `grid` 。**最多** 只能将一格 `0` 变成 `1` 。

返回执行此操作后，`grid` 中最大的岛屿面积是多少？

岛屿 由一组上、下、左、右四个方向相连的 `1` 形成。

### 示例

#### 示例 1:

```
输入: grid = [[1, 0], [0, 1]]
输出: 3
解释: 将一格0变成1，最终连通两个小岛得到面积为 3 的岛屿。
```

#### 示例 2:

```
输入: grid = [[1, 1], [1, 0]]
输出: 4
解释: 将一格0变成1，岛屿的面积扩大为 4。
```

#### 示例 3:

```
输入: grid = [[1, 1], [1, 1]]
输出: 4
解释: 没有0可以让我们变成1，面积依然为 4。
```

## 解题

```ts 
/**
 * 标记岛屿 + 合并
 * @desc 时间复杂度 O(N²)  空间复杂度 O(N²)
 * @param grid
 * @returns
 */
export function largestIsland(grid: number[][]): number {
  const valid = (n: number, x: number, y: number) => x >= 0 && x < n && y >= 0 && y < n

  const d = [0, -1, 0, 1, 0]
  const n = grid.length
  let res = 0
  const tag: number[][] = new Array(n).fill(0).map(() => new Array(n).fill(0))
  const area = new Map<number, number>()
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1 && tag[i][j] === 0) {
        const t = i * n + j + 1
        area.set(t, dfs(grid, i, j, tag, t))
        res = Math.max(res, area.get(t)!)
      }
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 0) {
        let z = 1
        const connected = new Set()
        for (let k = 0; k < 4; k++) {
          const x = i + d[k]; const y = j + d[k + 1]
          if (!valid(n, x, y) || tag[x][y] === 0 || connected.has(tag[x][y]))
            continue

          z += area.get(tag[x][y])!
          connected.add(tag[x][y])
        }
        res = Math.max(res, z)
      }
    }
  }
  return res

  function dfs(grid: number[][], x: number, y: number, tag: number[][], t: number) {
    const n = grid.length; let res = 1
    tag[x][y] = t
    for (let i = 0; i < 4; i++) {
      const x1 = x + d[i]; const y1 = y + d[i + 1]
      if (valid(n, x1, y1) && grid[x1][y1] === 1 && tag[x1][y1] === 0)
        res += dfs(grid, x1, y1, tag, t)
    }
    return res
  }
}
```