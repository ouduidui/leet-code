# 矩阵中的幸运数

> 难度：简单
>
> https://leetcode-cn.com/problems/lucky-numbers-in-a-matrix/

## 题目

给你一个 `m * n` 的矩阵，矩阵中的数字 各不相同 。请你按 **任意** 顺序返回矩阵中
的所有幸运数。

幸运数是指矩阵中满足同时下列两个条件的元素：

- 在同一行的所有元素中最小
- 在同一列的所有元素中最大

### 示例

#### 示例 1：

```
输入：matrix = [[3,7,8],[9,11,13],[15,16,17]]
输出：[15]
解释：15 是唯一的幸运数，因为它是其所在行中的最小值，也是所在列中的最大值。
```

#### 示例 2：

```
输入：matrix = [[1,10,4,2],[9,3,8,7],[15,16,17,12]]
输出：[12]
解释：12 是唯一的幸运数，因为它是其所在行中的最小值，也是所在列中的最大值。
```

#### 示例 3：

```
输入：matrix = [[7,8],[1,2]]
输出：[7]
```

## 解题

```typescript
/**
 * 哈希表
 * @desc 时间复杂度 O(NM)  空间复杂度 O(N)
 * @param matrix
 */
export function luckyNumbers(matrix: number[][]): number[] {
  const mins: number[] = [];
  const ans: number[] = [];
  for (const row of matrix) {
    mins.push(Math.min(...row));
  }

  const len = matrix[0].length;
  for (let i = 0; i < len; i++) {
    let maxNum = Number.MIN_VALUE;
    for (const row of matrix) {
      maxNum = Math.max(maxNum, row[i]);
    }
    if (mins.includes(maxNum)) ans.push(maxNum);
  }

  return ans;
}
```
