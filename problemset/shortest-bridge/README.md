# 最短的桥

> 难度：中等
>
> https://leetcode.cn/problems/shortest-bridge/

## 题目

给你一个大小为 `n x n` 的二元矩阵 `grid` ，其中 `1` 表示陆地，`0` 表示水域。

**岛** 是由四面相连的 `1` 形成的一个最大组，即不会与非组内的任何其他 `1` 相连。`grid` 中 **恰好存在两座岛** 。

你可以将任意数量的 `0` 变为 `1` ，以使两座岛连接起来，变成 **一座岛** 。

返回必须翻转的 `0` 的最小数目。

### 示例

#### 示例 1：

```
输入：grid = [[0,1],[1,0]]
输出：1
```

#### 示例 2：

```
输入：grid = [[0,1,0],[0,0,0],[0,0,1]]
输出：2
```

#### 示例 3：
 
```
输入：grid = [[1,1,1,1,1],[1,0,0,0,1],[1,0,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]
输出：1
```

## 解题

```ts 
/**
 * 广度优先搜索
 * @desc 时间复杂度 O(N^2) 空间复杂度 O(N^2)
 * @param grid
 * @returns
 */
export function shortestBridge(grid: number[][]): number {
  const n = grid.length
  const dirs = [[-1, 0], [1, 0], [0, 1], [0, -1]]
  const island = []
  const queue: [number, number][] = []

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        queue.push([i, j])
        grid[i][j] = -1
        while (queue.length !== 0) {
          const cell = queue.shift()!
          const [x, y] = cell
          island.push(cell)
          for (let k = 0; k < 4; k++) {
            const nx = x + dirs[k][0]
            const ny = y + dirs[k][1]
            if (nx >= 0 && ny >= 0 && nx < n && ny < n && grid[nx][ny] === 1) {
              queue.push([nx, ny])
              grid[nx][ny] = -1
            }
          }
        }
        for (const cell of island)
          queue.push(cell)

        let step = 0
        while (queue.length !== 0) {
          const sz = queue.length
          for (let k = 0; k < sz; k++) {
            const cell = queue.shift()!
            const [x, y] = cell
            for (let d = 0; d < 4; d++) {
              const nx = x + dirs[d][0]
              const ny = y + dirs[d][1]
              if (nx >= 0 && ny >= 0 && nx < n && ny < n) {
                if (grid[nx][ny] === 0) {
                  queue.push([nx, ny])
                  grid[nx][ny] = -1
                }
                else if (grid[nx][ny] === 1) {
                  return step
                }
              }
            }
          }
          step++
        }
      }
    }
  }
  return 0
}
```