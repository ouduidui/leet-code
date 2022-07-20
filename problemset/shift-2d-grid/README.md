# 二维网格迁移

> 难度：简单
>
> https://leetcode.cn/problems/shift-2d-grid/

## 题目

给你一个 `m` 行 `n` 列的二维网格 `grid` 和一个整数 `k`。你需要将 `grid` 迁移 `k` 次。

每次「迁移」操作将会引发下述活动：

- 位于 `grid[i][j]` 的元素将会移动到 `grid[i][j + 1]`。
- 位于 `grid[i][n - 1]` 的元素将会移动到 `grid[i + 1][0]`。
- 位于 `grid[m - 1][n - 1]` 的元素将会移动到 `grid[0][0]`。

请你返回 `k` 次迁移操作后最终得到的 **二维网格**。

### 示例

#### 示例 1：

![image](https://user-images.githubusercontent.com/54696834/179881221-3f16a1cc-cc9e-44e1-9d0a-ec18d862506b.png)

```
输入：grid = [[1,2,3],[4,5,6],[7,8,9]], k = 1
输出：[[9,1,2],[3,4,5],[6,7,8]]
```

#### 示例 2：

![image](https://user-images.githubusercontent.com/54696834/179881230-52e09b32-7c29-4b16-9c55-f1d4306d52b4.png)

```
输入：grid = [[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]], k = 4
输出：[[12,0,21,13],[3,8,1,9],[19,7,2,5],[4,6,11,10]]
```

#### 示例 3：
```
输入：grid = [[1,2,3],[4,5,6],[7,8,9]], k = 9
输出：[[1,2,3],[4,5,6],[7,8,9]]
```

## 解题

```ts 
/**
 * 一维展开
 * @desc 时间复杂度 O(MN)  空间复杂度 O(1)
 * @param grid
 * @param k
 * @returns
 */
export function shiftGrid(grid: number[][], k: number): number[][] {
  const m = grid.length
  const n = grid[0].length
  const ret: number[][] = new Array(m).fill([]).map(() => new Array(n).fill(0))

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const idx = (i * n + j + k) % (m * n)
      ret[(idx / n) >> 0].splice(idx % n, 1, grid[i][j])
    }
  }

  return ret
}
```