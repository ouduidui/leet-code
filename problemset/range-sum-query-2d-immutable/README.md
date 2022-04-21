# 二维区域和检索 - 矩阵不可变

> 难度：中等
>
> https://leetcode-cn.com/problems/range-sum-query-2d-immutable/

## 题目

给定一个二维矩阵 `matrix`，以下类型的多个请求：

- 计算其子矩形范围内元素的总和，该子矩阵的 **左上角** 为 `(row1, col1)` ，**右下角** 为 `(row2, col2)` 。

实现 `NumMatrix` 类：

- `NumMatrix(int[][] matrix)` 给定整数矩阵 `matrix` 进行初始化
- `int sumRegion(int row1, int col1, int row2, int col2)` 返回 **左上角** `(row1, col1)` 、**右下角** `(row2, col2)` 所描述的子矩阵的元素 **总和** 。

### 示例

![1626332422-wUpUHT-image](https://user-images.githubusercontent.com/54696834/164358657-c8524c86-a521-4ad2-9893-7389566a9bdb.png)

```
输入: 
["NumMatrix","sumRegion","sumRegion","sumRegion"]
[[[[3,0,1,4,2],[5,6,3,2,1],[1,2,0,1,5],[4,1,0,1,7],[1,0,3,0,5]]],[2,1,4,3],[1,1,2,2],[1,2,2,4]]
输出: 
[null, 8, 11, 12]

解释:
NumMatrix numMatrix = new NumMatrix([[3,0,1,4,2],[5,6,3,2,1],[1,2,0,1,5],[4,1,0,1,7],[1,0,3,0,5]]);
numMatrix.sumRegion(2, 1, 4, 3); // return 8 (红色矩形框的元素总和)
numMatrix.sumRegion(1, 1, 2, 2); // return 11 (绿色矩形框的元素总和)
numMatrix.sumRegion(1, 2, 2, 4); // return 12 (蓝色矩形框的元素总和)
```

## 解题

### 一维前缀和

```ts
/**
 * 一维前缀和
 */
export class NumMatrix {
  sums: number[][] = []

  /**
   * @desc 时间复杂度 O(MN)  空间复杂度 O(MN)
   * @param matrix
   */
  constructor(matrix: number[][]) {
    const m = matrix.length
    if (m > 0) {
      const n = matrix[0].length
      this.sums = new Array<number[]>(m).fill([]).map(() => new Array(n + 1).fill(0))
      for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++)
          this.sums[i][j + 1] = this.sums[i][j] + matrix[i][j]
      }
    }
  }

  /**
   * @desc 时间复杂度 O(N)  空间复杂度 O(1)
   * @param row1
   * @param col1
   * @param row2
   * @param col2
   * @returns
   */
  sumRegion(row1: number, col1: number, row2: number, col2: number): number {
    let sum = 0
    for (let i = row1; i <= row2; i++)
      sum += this.sums[i][col2 + 1] - this.sums[i][col1]

    return sum
  }
}
```

### 二维前缀和

```ts
/**
 * 二维前缀和
 */
export class NumMatrix2 {
  sums: number[][] = []

  /**
   * @desc 时间复杂度 O(MN)  空间复杂度 O(MN)
   * @param matrix
   */
  constructor(matrix: number[][]) {
    const m = matrix.length
    if (m > 0) {
      const n = matrix[0].length
      this.sums = new Array<number[]>(m + 1).fill([]).map(() => new Array(n + 1).fill(0))
      for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
          this.sums[i + 1][j + 1]
          = this.sums[i][j + 1]
          + this.sums[i + 1][j]
          - this.sums[i][j]
          + matrix[i][j]
        }
      }
    }
  }

  /**
   * @desc 时间复杂度 O(N)  空间复杂度 O(1)
   * @param row1
   * @param col1
   * @param row2
   * @param col2
   * @returns
   */
  sumRegion(row1: number, col1: number, row2: number, col2: number): number {
    return this.sums[row2 + 1][col2 + 1]
    - this.sums[row1][col2 + 1]
    - this.sums[row2 + 1][col1]
    + this.sums[row1][col1]
  }
}
```