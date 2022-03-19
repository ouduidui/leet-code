# 旋转图片

> 难度：中等
>
> https://leetcode-cn.com/problems/rotate-image/

## 题目

给定一个 `n × n` 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 `90` 度。

你必须在 **原地** 旋转图像，这意味着你需要直接修改输入的二维矩阵。**请不要** 使
用另一个矩阵来旋转图像。

### 示例

#### 示例 1

![rotate-image-1](https://user-images.githubusercontent.com/88995580/159103324-bf415263-2ffe-4136-8dd7-f429e9ea811b.jpg)

```
输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
输出：[[7,4,1],[8,5,2],[9,6,3]]
```

#### 示例 2

![rotate-image-2](https://user-images.githubusercontent.com/88995580/159103309-b7bef796-4afc-46cb-a879-6c4a4f64ba22.jpg)

```
输入：matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
输出：[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
```

#### 示例 3：

```
输入：matrix = [[1]]
输出：[[1]]
```

#### 示例 4：

```
输入：matrix = [[1,2],[3,4]]
输出：[[3,1],[4,2]]
```

## 解题

### 使用辅助数组

```typescript
/**
 * 使用辅助数组
 * @desc 时间复杂度 O(N^2)   空间复杂度 O(N^2)
 * @param matrix {number[][]}
 * @return {void}
 */
export function rotate(matrix: number[][]): void {
  const len = matrix.length;
  const newMatrix = new Array(len).fill(0).map(() => new Array(len).fill(0));

  // 先翻转
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      newMatrix[j][len - 1 - i] = matrix[i][j];
    }
  }

  // 替换
  for (let i = 0; i < len; i++) {
    matrix[i] = newMatrix[i];
  }
}
```

### 原地翻转

```typescript
/**
 * 原地旋转
 * @desc 时间复杂度 O(N^2)   空间复杂度 O(1)
 * @param matrix {number[][]}
 * @return {void}
 */
export function rotate2(matrix: number[][]): void {
  const len = matrix.length;
  for (let i = 0; i < len >> 1; i++) {
    for (let j = 0; j < (len + 1) >> 1; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[len - 1 - j][i];
      matrix[len - 1 - j][i] = matrix[len - 1 - i][len - 1 - j];
      matrix[len - 1 - i][len - 1 - j] = matrix[j][len - i - 1];
      matrix[j][len - i - 1] = temp;
    }
  }
}
```

### 用翻转代替旋转

```typescript
/**
 * 用翻转代替旋转
 * @desc 时间复杂度 O(N^2)   空间复杂度 O(1)
 * @param matrix {number[][]}
 * @return {void}
 */
export function rotate3(matrix: number[][]): void {
  const len = matrix.length;
  // 水平翻转
  for (let i = 0; i < len >> 1; i++) {
    for (let j = 0; j < len; j++) {
      [matrix[i][j], matrix[len - 1 - i][j]] = [
        matrix[len - 1 - i][j],
        matrix[i][j]
      ];
    }
  }

  // 主对角线翻转
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < i; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
}
```
