# 不同路径

> 难度：中等
>
> https://leetcode-cn.com/problems/unique-paths/

## 题目

一个机器人位于一个 `m x n` 网格的左上角 （起始点在下图中标记为 “Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为
“Finish” ）。

问总共有多少条不同的路径？

### 示例

#### 示例 1

![unique-paths](https://user-images.githubusercontent.com/88995580/159103257-b0e2a5a5-68a2-4ac8-8d6d-59778acb848a.png)

```
输入：m = 3, n = 7
输出：28
```

#### 示例 2

```
输入：m = 3, n = 2
输出：3
解释：
从左上角开始，总共有 3 条路径可以到达右下角。
1. 向右 -> 向下 -> 向下
2. 向下 -> 向下 -> 向右
3. 向下 -> 向右 -> 向下
```

#### 示例 3

```
输入：m = 7, n = 3
输出：28
```

#### 示例 4

```
输入：m = 3, n = 3
输出：6
```

## 解法

### 组合数学

从左上角到右下角的过程，我们需要往右移动 `m - 1` 步，往下移动 `n - 1` 步，共移动
`m + n - 2`步，所以我们只需求出其排列组合即可。

 <img style="background: #fff;padding: 10px" src="http://latex.codecogs.com/svg.latex?C^{m-1}_{m+n-2}=\frac{(m+n-2)(m+n-3)...n}{(m-1)!}" />

```typescript
/**
 * 组合数学
 * @desc 时间复杂度 O(m) 空间复杂度 O(1)
 * @param m {number}
 * @param n {number}
 * @return number
 */
export function uniquePaths(m: number, n: number): number {
  let ans = 1;
  for (let x = n, y = 1; y < m; x++, y++) {
    ans = Math.floor((ans * x) / y);
  }

  return ans;
}
```

### 动态规划

```typescript
/**
 * 动态规划
 * @desc 时间复杂度 O(mn) 空间复杂度 O(mn)
 * @param m {number}
 * @param n {number}
 * @return number
 */
export function uniquePaths2(m: number, n: number): number {
  // 初始化
  const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    dp[i][0] = 1;
  }
  for (let j = 0; j < n; j++) {
    dp[0][j] = 1;
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[m - 1][n - 1];
}
```
