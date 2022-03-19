# 矩阵置零

> 难度：中等
>
> https://leetcode-cn.com/problems/set-matrix-zeroes/

## 题目

给定一个 `m x n` 的矩阵，如果一个元素为 `0` ，则将其所在行和列的所有元素都设为
`0` 。请使用 **原地** 算法。

### 示例

#### 示例 1：

![set-matrix-zeroes-1](https://user-images.githubusercontent.com/88995580/159103219-23026ae8-c30e-4737-a174-336cbc0d0288.jpg)

```
输入：matrix = [[1,1,1],[1,0,1],[1,1,1]]
输出：[[1,0,1],[0,0,0],[1,0,1]]
```

#### 示例 2：

![set-matrix-zeroes-2](https://user-images.githubusercontent.com/54696834/159102071-9e272ccd-0635-4993-b56e-1033e80d999c.jpg)

```
输入：matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
输出：[[0,0,0,0],[0,4,5,0],[0,3,1,0]]
```

## 解法

### 标记数组

```typescript
/**
 * 标记数组
 * @desc 时间复杂度 O(MN)   空间复杂度 O(M+N)
 * @param matrix
 */
export function setZeroes(matrix: number[][]): void {
  const m = matrix.length;
  const n = matrix[0].length;
  const rows: boolean[] = new Array(m).fill(false);
  const cols: boolean[] = new Array(n).fill(false);

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        rows[i] = true;
        cols[j] = true;
      }
    }
  }

  for (let i = 0; i < m; i++) {
    if (rows[i]) {
      matrix[i].fill(0);
    } else {
      for (let j = 0; j < n; j++) {
        if (cols[j]) {
          matrix[i][j] = 0;
        }
      }
    }
  }
}
```

### 标记变量

```typescript
/**
 * 标记变量
 * @desc 时间复杂度 O(MN)   空间复杂度 O(1)
 * @param matrix
 */
export function setZeroes2(matrix: number[][]): void {
  const m = matrix.length;
  const n = matrix[0].length;
  let flagCol0 = false;

  for (let i = 0; i < m; i++) {
    if (matrix[i][0] === 0) {
      flagCol0 = true;
    }

    // 映射到第一行和第一列
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = matrix[0][j] = 0;
      }
    }
  }

  // 从最后一行倒序更新
  for (let i = m - 1; i >= 0; i--) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }

    // 更新第一列
    if (flagCol0) matrix[i][0] = 0;
  }
}
```
