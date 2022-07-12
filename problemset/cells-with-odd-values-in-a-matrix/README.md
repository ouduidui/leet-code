# 奇数值单元格的数目

> 难度：简单
>
> https://leetcode.cn/problems/cells-with-odd-values-in-a-matrix/

## 题目

给你一个 `m x n` 的矩阵，最开始的时候，每个单元格中的值都是 `0`。

另有一个二维索引数组 `indices`，`indices[i] = [ri, ci]` 指向矩阵中的某个位置，其中 `ri` 和 `ci` 分别表示指定的行和列（从 `0` 开始编号）。

对 `indices[i]` 所指向的每个位置，应同时执行下述增量操作：

- `ri` 行上的所有单元格，加 `1` 。
- `ci` 列上的所有单元格，加 `1` 。

给你 `m`、`n` 和 `indices` 。请你在执行完所有 `indices` 指定的增量操作后，返回矩阵中 **奇数值单元格** 的数目。

### 示例

#### 示例 1：

![image](https://user-images.githubusercontent.com/54696834/178393373-68b458b2-f46a-4208-bc52-b96555eadb98.png)

```
输入：m = 2, n = 3, indices = [[0,1],[1,1]]
输出：6
解释：最开始的矩阵是 [[0,0,0],[0,0,0]]。
第一次增量操作后得到 [[1,2,1],[0,1,0]]。
最后的矩阵是 [[1,3,1],[1,3,1]]，里面有 6 个奇数。
```

#### 示例 2：

![image](https://user-images.githubusercontent.com/54696834/178393381-68c8d779-68cf-4164-a043-bcd858a6bcba.png)

```
输入：m = 2, n = 2, indices = [[1,1],[0,0]]
输出：0
解释：最后的矩阵是 [[2,2],[2,2]]，里面没有奇数。
```

## 解题

```ts 
/**
 * 模拟
 * @desc 时间复杂度 O(q + m + n)  空间复杂度 O(m + n)
 * @param m
 * @param n
 * @param indices
 * @returns
 */
export function oddCells(m: number, n: number, indices: number[][]): number {
  const rows = new Array(m).fill(0)
  const cols = new Array(n).fill(0)

  for (const [r, c] of indices) {
    rows[r]++
    cols[c]++
  }

  let oddx = 0
  let oddy = 0

  for (const row of rows)
    if ((row & 1) !== 0) oddx++

  for (const col of cols)
    if ((col & 1) !== 0) oddy++

  return oddx * (n - oddy) + (m - oddx) * oddy
}
```