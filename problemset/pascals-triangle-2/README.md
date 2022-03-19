# 杨辉三角 II

> 难度：简单
>
> https://leetcode-cn.com/problems/pascals-triangle-ii/

## 题目

给定一个非负索引 `rowIndex`，返回「杨辉三角」的第 `rowIndex` 行。

在「杨辉三角」中，每个数是它左上方和右上方的数的和。

![pascals-triangle](https://user-images.githubusercontent.com/54696834/159101960-bec92029-645a-4a46-b869-f7e7791a806d.gif)

### 示例

#### 示例 1：

```
输入: rowIndex = 3
输出: [1,3,3,1]
```

#### 示例 2：

```
输入: rowIndex = 0
输出: [1]
```

#### 示例 3：

```
输入: rowIndex = 1
输出: [1,1]
```

## 解题

### 递推

```typescript
/**
 * 递推
 * @desc 时间复杂度 O(N^2)  空间复杂度 O(1)
 * @param rowIndex
 */
export function getRow(rowIndex: number): number[] {
  const row = new Array(rowIndex + 1).fill(0);
  row[0] = 1;
  for (let i = 1; i <= rowIndex; ++i) {
    for (let j = i; j > 0; --j) {
      row[j] += row[j - 1];
    }
  }
  return row;
}
```

### 线性递推

由于组合数公式
<img style="background: #fff;padding: 10px" src="https://latex.codecogs.com/svg.latex?C^m_n=\frac{n!}{m!(n%20-%20m)!}" />，
可以得到同一行的相邻组合数的关系：
<img style="background: #fff;padding: 10px" src="https://latex.codecogs.com/svg.latex?C^m_n=%20C^{m-1}_n\times\frac{n%20-%20m%20+%201}{m}" />

```typescript
/**
 * 线性递推
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param rowIndex
 */
export function getRow2(rowIndex: number): number[] {
  const row = new Array(rowIndex + 1).fill(0);
  row[0] = 1;
  for (let i = 1; i <= rowIndex; i++) {
    row[i] = (row[i - 1] * (rowIndex - i + 1)) / i;
  }

  return row;
}
```
