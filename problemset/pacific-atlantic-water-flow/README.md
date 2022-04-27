# 太平洋大西洋水流问题

> 难度：中等
>
> https://leetcode-cn.com/problems/pacific-atlantic-water-flow/

## 题目

有一个 `m × n` 的矩形岛屿，与 **太平洋** 和 **大西洋** 相邻。 **“太平洋”** 处于大陆的左边界和上边界，而 **“大西洋”** 处于大陆的右边界和下边界。

这个岛被分割成一个由若干方形单元格组成的网格。给定一个 `m x n` 的整数矩阵 `heights` ， `heights[r][c]` 表示坐标 `(r, c)` 上单元格 **高于海平面的高度** 。

岛上雨水较多，如果相邻单元格的高度 **小于或等于** 当前单元格的高度，雨水可以直接向北、南、东、西流向相邻单元格。水可以从海洋附近的任何单元格流入海洋。

返回 **网格坐标** `result` 的 **2D列表** ，其中 `result[i] = [ri, ci]` 表示雨水可以从单元格 `(ri, ci)` 流向 **太平洋和大西洋** 。


### 示例

#### 示例 1：

![waterflow-grid](https://user-images.githubusercontent.com/54696834/165419273-1eedee3c-480c-4383-8b31-3fa7e2c5b1d6.jpg)

```
输入: heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
输出: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
```

#### 示例 2：

```
输入: heights = [[2,1],[1,2]]
输出: [[0,0],[0,1],[1,0],[1,1]]
```

## 解题

### 深度优先搜索

```ts
/**
 * 深度优先搜索
 * @desc 时间复杂度 O(MN)  空间复杂度 O(MN)
 * @param heights
 * @returns
 */
export function pacificAtlantic(heights: number[][]): number[][] {
  const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]]
  const m = heights.length
  const n = heights[0].length
  const pacific = new Array(m).fill([]).map(() => new Array(n).fill(false))
  const atlantic = new Array(m).fill([]).map(() => new Array(n).fill(false))

  for (let i = 0; i < m; i++)
    dfs(i, 0, pacific)

  for (let i = 1; i < n; i++)
    dfs(0, i, pacific)

  for (let i = 0; i < m; i++)
    dfs(i, n - 1, atlantic)

  for (let i = 0; i < n - 1; i++)
    dfs(m - 1, i, atlantic)

  const result: number[][] = []

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (pacific[i][j] && atlantic[i][j])
        result.push([i, j])
    }
  }

  return result

  function dfs(row: number, col: number, ocean: boolean[][]) {
    if (ocean[row][col]) return

    ocean[row][col] = true
    for (const dir of dirs) {
      const newRow = row + dir[0]
      const newCol = col + dir[1]
      if (
        newRow >= 0
        && newCol >= 0
        && newRow < m
        && newCol < n
        && heights[newRow][newCol] >= heights[row][col]
      )
        dfs(newRow, newCol, ocean)
    }
  }
}
```

### 广度优先搜索

```ts
/**
 * 广度优先搜索
 * @desc 时间复杂度 O(MN)  空间复杂度 O(MN)
 * @param heights
 * @returns
 */
export function pacificAtlantic2(heights: number[][]): number[][] {
  const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]]
  const m = heights.length
  const n = heights[0].length
  const pacific = new Array(m).fill([]).map(() => new Array(n).fill(false))
  const atlantic = new Array(m).fill([]).map(() => new Array(n).fill(false))

  for (let i = 0; i < m; i++)
    bfs(i, 0, pacific)

  for (let i = 1; i < n; i++)
    bfs(0, i, pacific)

  for (let i = 0; i < m; i++)
    bfs(i, n - 1, atlantic)

  for (let i = 0; i < n - 1; i++)
    bfs(m - 1, i, atlantic)

  const result: number[][] = []

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (pacific[i][j] && atlantic[i][j])
        result.push([i, j])
    }
  }

  return result

  function bfs(row: number, col: number, ocean: boolean[][]) {
    if (ocean[row][col]) return

    ocean[row][col] = true

    const queue = [[row, col]]
    while (queue.length) {
      const [r, c] = queue.pop()!
      for (const dir of dirs) {
        const newRow = r + dir[0]
        const newCol = c + dir[1]
        if (
          newRow >= 0
        && newCol >= 0
        && newRow < m
        && newCol < n
        && heights[newRow][newCol] >= heights[r][c]
        && !ocean[newRow][newCol]
        ) {
          ocean[newRow][newCol] = true
          queue.unshift([newRow, newCol])
        }
      }
    }
  }
}
```