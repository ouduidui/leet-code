# 杨辉三角

> 难度：简单
>
> https://leetcode-cn.com/problems/pascals-triangle/

## 题目

给定一个非负整数 `numRows`，生成「杨辉三角」的前 `numRows` 行。

在「杨辉三角」中，每个数是它左上方和右上方的数的和。

![pascals-triangle](https://user-images.githubusercontent.com/54696834/159101960-bec92029-645a-4a46-b869-f7e7791a806d.gif)

### 示例

#### 示例 1：

```
输入: numRows = 5
输出: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
```

#### 示例 2：

```
输入: numRows = 1
输出: [[1]]
```

## 解题

```typescript
/**
 * 数学
 * @desc 时间复杂度 O(N^2)   空间复杂度 O(1)
 * @param numRows
 */
export function generate(numRows: number): number[][] {
  const ret: number[][] = [];
  for (let i = 0; i < numRows; i++) {
    const row = new Array(i + 1).fill(1);
    for (let j = 1; j < i; j++) {
      row[j] = ret[i - 1][j - 1] + ret[i - 1][j];
    }
    ret.push(row);
  }
  return ret;
}
```
