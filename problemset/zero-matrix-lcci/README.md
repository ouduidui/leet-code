# 零矩阵

> 难度：中等
>
> https://leetcode.cn/problems/zero-matrix-lcci/

## 题目

编写一种算法，若`M × N`矩阵中某个元素为0，则将其所在的行与列清零。


#### 示例 1：

```
输入：
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
输出：
[
  [1,0,1],
  [0,0,0],
  [1,0,1]
]
```

#### 示例 2：

```
输入：
[
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]
输出：
[
  [0,0,0,0],
  [0,4,5,0],
  [0,3,1,0]
]
```

## 解题

### 使用标记数组

```ts 
/**
 * 使用标记数组
 * @desc 时间复杂度 O(NM)  空间复杂度 O(M+N)
 * @param matrix
 */
export function setZeroes(matrix: number[][]): void {
  const m = matrix.length
  const n = matrix[0].length
  const row = new Array<boolean>(m).fill(false)
  const col = new Array<boolean>(n).fill(false)
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0)
        row[i] = col[j] = true
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (row[i] || col[j])
        matrix[i][j] = 0
    }
  }
}
```

### 使用两个标记变量

```ts 
/**
 * 使用两个标记变量
 * @desc 时间复杂度 O(NM)  空间复杂度 O(1)
 * @param matrix
 */
export function setZeroes2(matrix: number[][]): void {
  const m = matrix.length
  const n = matrix[0].length
  let flagCol0 = false
  let flagRow0 = false
  for (let i = 0; i < m; i++) {
    if (matrix[i][0] === 0)
      flagCol0 = true
  }
  for (let j = 0; j < n; j++) {
    if (matrix[0][j] === 0)
      flagRow0 = true
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] === 0)
        matrix[i][0] = matrix[0][j] = 0
    }
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0)
        matrix[i][j] = 0
    }
  }
  if (flagCol0) {
    for (let i = 0; i < m; i++)
      matrix[i][0] = 0
  }
  if (flagRow0) {
    for (let j = 0; j < n; j++)
      matrix[0][j] = 0
  }
}
```

### 使用一个标记变量

```ts 
/**
 * 使用一个标记变量
 * @desc 时间复杂度 O(NM)  空间复杂度 O(1)
 * @param matrix
 */
export function setZeroes3(matrix: number[][]): void {
  const m = matrix.length
  const n = matrix[0].length
  let flagCol0 = false
  for (let i = 0; i < m; i++) {
    if (matrix[i][0] === 0)
      flagCol0 = true

    for (let j = 1; j < n; j++) {
      if (matrix[i][j] === 0)
        matrix[i][0] = matrix[0][j] = 0
    }
  }
  for (let i = m - 1; i >= 0; i--) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0)
        matrix[i][j] = 0
    }
    if (flagCol0)
      matrix[i][0] = 0
  }
}
```