# 爬楼梯

> 难度：简单
>
> https://leetcode-cn.com/problems/climbing-stairs/

## 题目

假设你正在爬楼梯。需要 `n` 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

注意：给定 n 是一个正整数。

### 示例

#### 示例 1：

```
输入： 2
输出： 2
解释： 有两种方法可以爬到楼顶。
1. 1 阶 + 1 阶
2. 2 阶
```

#### 示例 2：

```
输入： 3
输出： 3
解释： 有三种方法可以爬到楼顶。
1.  1 阶 + 1 阶 + 1 阶
2.  1 阶 + 2 阶
3.  2 阶 + 1 阶
```

## 解法

### 动态规划 - 滑动数组

```typescript
/**
 * 动态规划 - 滑动数组
 * @desc 时间复杂度 O(N)   空间复杂度 O(1)
 * @param n {number}
 * @return {number}
 */
export function climbStairs(n: number): number {
  let p = 0,
    q = 0,
    r = 1;

  for (let i = 1; i <= n; i++) {
    [p, q] = [q, r];
    // f(x) = f(x - 1) + f(x - 2)
    r = p + q;
  }

  return r;
}
```

### 矩阵快速幂

在前面我们可以得知`f(x) = f(x - 1) + f(x - 2)`，因此我们可以构建一个递推关系：

 <img style="background: #fff;padding: 10px" src="http://latex.codecogs.com/svg.latex?\begin{bmatrix}1&1\\1&0\end{bmatrix}\begin{bmatrix}f(n)\\f(n-1)\end{bmatrix}=\begin{bmatrix}f(n)+f(n-1)\\f(n)\end{bmatrix}=\begin{bmatrix}f(n+1)\\f(n)\end{bmatrix}" />

因此：

 <img style="background: #fff;padding: 10px" src="http://latex.codecogs.com/svg.latex?\begin{bmatrix}f(n+1)\\f(n)\end{bmatrix}=\begin{bmatrix}1&1\\1&0\end{bmatrix}^n\begin{bmatrix}f(1)\\f(0)\end{bmatrix}" />

令：

 <img style="background: #fff;padding: 10px" src="http://latex.codecogs.com/svg.latex?M=\begin{bmatrix}1&1\\1&0\end{bmatrix}" />

因此我们只要能快速计算出`M`的`n`次幂，就可以得到`f(n)`的值。如果直接求`M^n`的话
，时间复杂度是`O(n)`，我们可以定义矩阵乘法，然后用快速幂算法来加速这里`M^n`的求
取。

```typescript
/**
 * 矩阵快速幂
 * @desc 时间复杂度 O(logN)   空间复杂度 O(1)
 * @param n {number}
 * @return {number}
 */
export function climbStairs2(n: number): number {
  type Matrix = [[number, number], [number, number]];

  const q: Matrix = [
    [1, 1],
    [1, 0]
  ];
  const res = power(q, n);
  return res[0][0];

  /**
   * 二阶矩阵幂
   * @param a {Matrix}
   * @param n {number}
   * @return {Matrix}
   */
  function power(a: Matrix, n: number): Matrix {
    // [[1, 0], [0, 1]]乘以任何二阶矩阵都等于二阶矩阵本身
    let ret: Matrix = [
      [1, 0],
      [0, 1]
    ];
    while (n > 0) {
      // n 为奇数
      if ((n & 1) === 1) {
        ret = multiply(ret, a);
      }
      n >>= 1; // 除以2（向下取整）
      a = multiply(a, a);
    }
    return ret;
  }

  /**
   * 二阶矩阵相乘
   * @desc  [[a1,a2],[a3,a4]] * [[b1,b2],[b3,b4]]
   *      = [[a1*b1+a2*b3, a1*b2+a2*b4], [a3*b1+a4*b3, a3*b2+a4*b4]]
   * @param a {Matrix}
   * @param b {Matrix}
   * @return {Matrix}
   */
  function multiply(a: Matrix, b: Matrix): Matrix {
    const c: Matrix = [
      [0, 0],
      [0, 0]
    ];
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 2; j++) {
        c[i][j] = a[i][0] * b[0][j] + a[i][1] * b[1][j];
      }
    }

    return c;
  }
}
```
