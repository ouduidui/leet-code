# 螺旋矩阵 II

> 难度：中等
>
> https://leetcode-cn.com/problems/spiral-matrix-ii/

## 题目

给你一个正整数 `n` ，生成一个包含 `1` 到 `n^2` 所有元素，且元素按顺时针顺序螺旋
排列的 `n x n` 正方形矩阵 `matrix` 。

### 示例

#### 示例 1：

![spiral-matrix-II-1](https://user-images.githubusercontent.com/88995580/159103248-e7642a83-bda7-4a9a-94cd-9a349bb17925.jpg)

```
输入：n = 3
输出：[[1,2,3],[8,9,4],[7,6,5]]
```

#### 示例 2：

```
输入：n = 1
输出：[[1]]
```

## 解题

```typescript
/**
 * 按层模拟
 * @desc 时间复杂度 O(mn)  空间复杂度 O(1)
 * @param n {number}
 * @return {number[][]}
 */
export function generateMatrix(n: number): number[][] {
  const matrix: number[][] = [];

  let [top, bottom, left, right] = [0, n - 1, 0, n - 1];

  let i = 1;
  while (left <= right && top <= bottom) {
    // 向右走
    for (let col = left; col <= right; col++) {
      !matrix[top] && (matrix[top] = []);
      matrix[top][col] = i++;
    }

    // 向下走
    for (let row = top + 1; row < bottom; row++) {
      !matrix[row] && (matrix[row] = []);
      matrix[row][right] = i++;
    }

    // 向左走
    for (let col = right; col > left; col--) {
      !matrix[bottom] && (matrix[bottom] = []);
      matrix[bottom][col] = i++;
    }

    // 向上走
    for (let row = bottom; row > top; row--) {
      !matrix[row] && (matrix[row] = []);
      matrix[row][left] = i++;
    }

    [left, right, top, bottom] = [left + 1, right - 1, top + 1, bottom - 1];
  }

  return matrix;
}
```
