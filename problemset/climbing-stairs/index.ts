/**
 * 动态规划 - 滑动数组
 * @desc 时间复杂度 O(N)   空间复杂度 O(1)
 * @param n {number}
 * @return {number}
 */
export function climbStairs(n: number): number {
  let p = 0
  let q = 0
  let r = 1

  for (let i = 1; i <= n; i++) {
    [p, q] = [q, r]
    // f(x) = f(x - 1) + f(x - 2)
    r = p + q
  }

  return r
}

/**
 * 矩阵快速幂
 * @desc 时间复杂度 O(logN)   空间复杂度 O(1)
 * @param n {number}
 * @return {number}
 */
export function climbStairs2(n: number): number {
  type Matrix = [[number, number], [number, number]]

  const q: Matrix = [
    [1, 1],
    [1, 0],
  ]
  const res = power(q, n)
  return res[0][0]

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
      [0, 1],
    ]
    while (n > 0) {
      // n 为奇数
      if ((n & 1) === 1)
        ret = multiply(ret, a)

      n >>= 1 // 除以2（向下取整）
      a = multiply(a, a)
    }
    return ret
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
      [0, 0],
    ]
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 2; j++)
        c[i][j] = a[i][0] * b[0][j] + a[i][1] * b[1][j]
    }

    return c
  }
}
