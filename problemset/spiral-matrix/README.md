# 螺旋矩阵

> 难度：中等
>
> https://leetcode-cn.com/problems/spiral-matrix/

## 题目

给你一个 `m` 行 `n` 列的矩阵 `matrix` ，请按照 **顺时针螺旋顺序** ，返回矩阵中的
所有元素。

### 示例

#### 示例 1

![spiral-matrix-1](https://user-images.githubusercontent.com/88995580/159103332-59c3e856-81fa-4e65-851f-05c9f3a21a77.jpg)

```
输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
输出：[1,2,3,6,9,8,7,4,5]
```

#### 示例 2

![spiral-matrix-2](https://user-images.githubusercontent.com/88995580/159103330-b75f8185-ba30-4ead-b688-c6280a740614.jpg)

```
输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
输出：[1,2,3,4,8,12,11,10,9,5,6,7]
```

## 解法

### 模拟

```typescript
/**
 * 模拟
 * @desc 时间复杂度 O(mn)  空间复杂度 O(mn)
 * @param matrix {number[][]}
 * @return {number[]}
 */
export function spiralOrder(matrix: number[][]): number[] {
  if (!matrix.length || !matrix[0].length) return [];

  const rows = matrix.length;
  const cols = matrix[0].length;
  const total = rows * cols;

  // 已经走过的元素
  const visited: boolean[][] = new Array(rows)
    .fill([])
    .map(() => new Array(cols).fill(false));
  const ans: number[] = [];

  // 方向走位
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
  ];
  let directionIndex = 0,
    row = 0,
    col = 0;

  for (let i = 0; i < total; i++) {
    ans[i] = matrix[row][col];
    visited[row][col] = true;

    // 获取下一个走位
    const nextRow = row + directions[directionIndex][0];
    const nextCol = col + directions[directionIndex][1];

    // 判断是否走到头了
    if (
      !(
        nextRow >= 0 &&
        nextRow < rows &&
        nextCol >= 0 &&
        nextCol < cols &&
        !visited[nextRow][nextCol]
      )
    ) {
      // 当到头了，就需要调换方向
      directionIndex = (directionIndex + 1) % 4 /* 确保小于4 */;
    }

    // 更新下一个走位
    row += directions[directionIndex][0];
    col += directions[directionIndex][1];
  }

  return ans;
}
```

### 按层模拟

```typescript
/**
 * 按层模拟
 * @desc 时间复杂度 O(mn)  空间复杂度 O(1)
 * @param matrix {number[][]}
 * @return {number[]}
 */
export function spiralOrder2(matrix: number[][]): number[] {
  if (!matrix.length || !matrix[0].length) return [];

  const rows = matrix.length;
  const cols = matrix[0].length;
  const ans: number[] = [];

  // 边界
  let left = 0;
  let right = cols - 1;
  let top = 0;
  let bottom = rows - 1;

  while (left <= right && top <= bottom) {
    // 向右走
    for (let col = left; col <= right; col++) {
      ans.push(matrix[top][col]);
    }

    // 向下走
    for (let row = top + 1; row <= bottom; row++) {
      ans.push(matrix[row][right]);
    }

    if (left < right && top < bottom) {
      // 向左走
      for (let col = right - 1; col > left; col--) {
        ans.push(matrix[bottom][col]);
      }

      // 向上走
      for (let row = bottom; row > top; row--) {
        ans.push(matrix[row][left]);
      }
    }

    // 更新边界
    [left, right, top, bottom] = [left + 1, right - 1, top + 1, bottom - 1];
  }

  return ans;
}
```
