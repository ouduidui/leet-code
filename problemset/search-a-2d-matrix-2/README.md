# 搜索二维矩阵 II

> 难度：中等
>
> https://leetcode-cn.com/problems/search-a-2d-matrix-ii/

## 题目

编写一个高效的算法来搜索 `m x n` 矩阵 `matrix` 中的一个目标值 `target` 。该矩阵具有以下特性：

- 每行的元素从左到右升序排列。
- 每列的元素从上到下升序排列。

### 示例

#### 示例 1：

![search-a-2d-matrix-ii-1](https://user-images.githubusercontent.com/54696834/162865858-564cb24c-a1d6-455e-abb2-c40421cfcb60.jpg)

```
输入：matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
输出：true
```

#### 示例 2：

![search-a-2d-matrix-ii-2](https://user-images.githubusercontent.com/54696834/162865865-b6791297-e75a-4395-88ef-dfc83c697325.jpg)

```
输入：matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20
输出：false
```

## 解题

### 二分搜索

```ts
/**
 * 二分搜索
 * @desc 时间复杂度 O(MlogN)  空间复杂度 O(1)
 * @param matrix
 * @param target
 * @returns
 */
export function searchMatrix(matrix: number[][], target: number): boolean {
  for (const row of matrix)
    if (search(row, target) !== -1) return true

  return false

  /**
   * 二分查找
   * @param nums
   * @param target
   * @returns
   */
  function search(nums: number[], target: number): number {
    let low = 0
    let high = nums.length - 1
    while (low <= high) {
      const mid = (low + high) >> 1
      const num = nums[mid]
      if (num === target)
        return mid
      else if (num > target)
        high = mid - 1
      else
        low = mid + 1
    }
    return -1
  }
}
```

### Z字形查找

```ts
/**
 * Z字形查找
 * @desc 时间复杂度 O(M+N)  空间复杂度 O(1)
 * @param matrix
 * @param target
 * @returns
 */
export function searchMatrix2(matrix: number[][], target: number): boolean {
  const m = matrix.length
  const n = matrix[0].length

  let x = 0
  let y = n - 1

  while (x < m && y >= 0) {
    if (matrix[x][y] === target) return true

    if (matrix[x][y] > target) y--
    else x++
  }

  return false
}
```