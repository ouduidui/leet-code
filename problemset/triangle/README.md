# 三角形最小路径和

> 难度：中等
>
> https://leetcode-cn.com/problems/triangle/

## 题目

给定一个三角形 `triangle` ，找出自顶向下的最小路径和。

每一步只能移动到下一行中相邻的结点上。**相邻的结点** 在这里指的是 **下标** 与
**上一层结点下标** 相同或者等于 **上一层结点下标 + 1** 的两个结点。也就是说，如
果正位于当前行的下标 `i` ，那么下一步可以移动到下一行的下标 `i` 或 `i + 1` 。

### 示例

#### 示例 1：

```
输入：triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
输出：11
解释：如下面简图所示：
   2
  3 4
 6 5 7
4 1 8 3
自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。
```

#### 示例 2：

```
输入：triangle = [[-10]]
输出：-10
```

## 解题

### 动态规划

```typescript
/**
 * 动态规划
 * @desc 时间复杂度 O(N^2)   空间复杂度 O(N^2)
 * @param triangle
 */
export function minimumTotal(triangle: number[][]): number {
  const len = triangle.length;
  const dp = new Array(len).fill([]).map(() => new Array(len).fill(0));
  // 初始化第一个元素
  dp[0][0] = triangle[0][0];

  for (let i = 1; i < len; i++) {
    // 最左边和最右边直接累加
    dp[i][0] = dp[i - 1][0] + triangle[i][0];
    dp[i][i] = dp[i - 1][i - 1] + triangle[i][i];

    // 中间的元素选取上面对应两个元素最小值进行累计
    for (let j = 1; j < i; j++) {
      dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j]) + triangle[i][j];
    }
  }

  // 找出最后一层的最小值
  return Math.min(...dp[len - 1]);
}
```

## 动态规划 + 空间优化

```typescript
/**
 * 动态规划 + 空间优化
 * @desc 时间复杂度 O(N^2)   空间复杂度 O(N)
 * @param triangle
 */
export function minimumTotal2(triangle: number[][]): number {
  const len = triangle.length;
  const f = new Array(len).fill(0);
  // 初始化第一个元素
  f[0] = triangle[0][0];

  for (let i = 1; i < len; i++) {
    f[i] = f[i - 1] + triangle[i][i];
    // 中间的元素选取上面对应两个元素最小值进行累计
    for (let j = i - 1; j > 0; j--) {
      f[j] = Math.min(f[j - 1], f[j]) + triangle[i][j];
    }
    f[0] += triangle[i][0];
  }

  // 找出最后一层的最小值
  return Math.min(...f);
}
```
