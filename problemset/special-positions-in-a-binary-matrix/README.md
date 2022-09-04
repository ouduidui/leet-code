# 二进制矩阵中的特殊位置

> 难度：简单
>
> https://leetcode.cn/problems/special-positions-in-a-binary-matrix/

## 题目

给你一个大小为 `rows x cols` 的矩阵 `mat`，其中 `mat[i][j]` 是 `0` 或 `1`，请返回 **矩阵 `mat` 中特殊位置的数目** 。

**特殊位置** 定义：如果` mat[i][j] == 1` 并且第 `i` 行和第 `j` 列中的所有其他元素均为 `0`（行和列的下标均 **从 0 开始** ），则位置 `(i, j)` 被称为特殊位置。

 

#### 示例 1：

```
输入：mat = [[1,0,0],
            [0,0,1],
            [1,0,0]]
输出：1
解释：(1,2) 是一个特殊位置，因为 mat[1][2] == 1 且所处的行和列上所有其他元素都是 0
```

#### 示例 2：

```
输入：mat = [[1,0,0],
            [0,1,0],
            [0,0,1]]
输出：3
解释：(0,0), (1,1) 和 (2,2) 都是特殊位置
```

#### 示例 3：

```
输入：mat = [[0,0,0,1],
            [1,0,0,0],
            [0,1,1,0],
            [0,0,0,0]]
输出：2
```

#### 示例 4：

```
输入：mat = [[0,0,0,0,0],
            [1,0,0,0,0],
            [0,1,0,0,0],
            [0,0,1,0,0],
            [0,0,0,1,1]]
输出：3
```

## 解题

### 模拟

```ts 
/**
 * 模拟
 * @desc 时间复杂度 O(NM)  空间复杂度 O(N+M)
 * @param mat
 * @returns
 */
export function numSpecial(mat: number[][]): number {
  const m = mat.length
  const n = mat[0].length
  const rowsSum = new Array(m).fill(0)
  const colsSum = new Array(n).fill(0)
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      rowsSum[i] += mat[i][j]
      colsSum[j] += mat[i][j]
    }
  }
  let res = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 1 && rowsSum[i] === 1 && colsSum[j] === 1)
        res++
    }
  }
  return res
}
```

### 列的标记值

```ts 
/**
 * 列的标记值
 * @desc 时间复杂度 O(NM)  空间复杂度 O(1)
 * @param mat
 * @returns
 */
export function numSpecial2(mat: number[][]): number {
  const m = mat.length; const n = mat[0].length
  for (let i = 0; i < m; i++) {
    let cnt1 = 0
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 1)
        cnt1++
    }
    if (i === 0)
      cnt1--

    if (cnt1 > 0) {
      for (let j = 0; j < n; j++) {
        if (mat[i][j] === 1)
          mat[0][j] += cnt1
      }
    }
  }
  let sum = 0
  for (const num of mat[0]) {
    if (num === 1)
      sum++
  }
  return sum
}
```