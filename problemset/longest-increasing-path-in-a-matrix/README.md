# 矩阵中的最长递增路径

> 难度：困难
>
> https://leetcode-cn.com/problems/longest-increasing-path-in-a-matrix/

## 题目

给定一个 `m x n` 整数矩阵 `matrix` ，找出其中 **最长递增路径** 的长度。

对于每个单元格，你可以往上，下，左，右四个方向移动。 你 **不能** 在 **对角线** 方向上移动或移动到 **边界外**（即不允许环绕）。

### 示例 1：

#### 示例 1：

![grid1](https://user-images.githubusercontent.com/54696834/166129320-8d428294-94fe-49da-84cb-49b774cd2494.jpg)

```
输入：matrix = [[9,9,4],[6,6,8],[2,1,1]]
输出：4 
解释：最长递增路径为 [1, 2, 6, 9]。
```

#### 示例 2：

![tmp-grid](https://user-images.githubusercontent.com/54696834/166129321-10568f75-d507-4786-9094-e23d259ecbe0.jpg)

```
输入：matrix = [[3,4,5],[3,2,6],[2,2,1]]
输出：4 
解释：最长递增路径是 [3, 4, 5, 6]。注意不允许在对角线方向上移动。
```

#### 示例 3：

```
输入：matrix = [[1]]
输出：1
```

## 解题

### 记忆化深度优先搜索

```ts 
/**
 * 记忆化深度优先搜索
 * @desc 时间复杂度 O(MN)  空间复杂度 O(MN)
 * @param matrix
 * @returns
 */
export function longestIncreasingPath(matrix: number[][]): number {
  if (matrix.length === 0 || matrix[0].length === 0) return 0

  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]]
  const m = matrix.length
  const n = matrix[0].length
  const memo = new Array(m).fill([]).map(() => new Array(n).fill(0))
  let ans = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++)
      ans = Math.max(ans, dfs(matrix, i, j, m, n, memo))
  }
  return ans

  function dfs(
    matrix: number[][],
    row: number,
    col: number,
    m: number,
    n: number,
    memo: number[][],
  ): number {
    if (memo[row][col] === 0) {
      memo[row][col]++

      for (const dir of dirs) {
        const newRow = row + dir[0]
        const newCol = col + dir[1]
        if (
          newRow >= 0
        && newRow < m
         && newCol >= 0
         && newCol < n
         && matrix[newRow][newCol] > matrix[row][col]
        ) {
          // 保存到达该位置的最长递增路径长度
          memo[row][col] = Math.max(
            memo[row][col],
            dfs(matrix, newRow, newCol, m, n, memo) + 1,
          )
        }
      }
    }

    return memo[row][col]
  }
}
```

### 拓扑排序

```ts 
/**
 * 拓扑排序
 * @desc 时间复杂度 O(MN)  空间复杂度 O(MN)
 * @param matrix
 * @returns
 */
export function longestIncreasingPath2(matrix: number[][]): number {
  if (matrix.length === 0 || matrix[0].length === 0) return 0

  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]]
  const m = matrix.length
  const n = matrix[0].length
  // 记录每个单元格周围有几个比自己大的单元格
  const outdegrees = new Array(m).fill([]).map(() => new Array(n).fill(0))
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      for (const dir of dirs) {
        const newRow = i + dir[0]
        const newCol = j + dir[1]
        if (
          newRow >= 0
          && newRow < m
          && newCol >= 0
          && newCol < n
          && matrix[newRow][newCol] > matrix[i][j]
        )
          outdegrees[i][j]++
      }
    }
  }

  // 将出度为0的单元格放入队列中
  const queue: [number, number][] = []
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (outdegrees[i][j] === 0)
        queue.unshift([i, j])
    }
  }

  let ans = 0
  while (queue.length) {
    ans++

    const size = queue.length
    for (let i = 0; i < size; i++) {
      const [row, col] = queue.pop()!

      for (const dir of dirs) {
        const newRow = row + dir[0]
        const newCol = col + dir[1]
        if (
          newRow >= 0
          && newRow < m
          && newCol >= 0
          && newCol < n
          && matrix[newRow][newCol] < matrix[row][col]
        ) {
          outdegrees[newRow][newCol]--
          if (outdegrees[newRow][newCol] === 0)
            queue.unshift([newRow, newCol])
        }
      }
    }
  }

  return ans
}
```