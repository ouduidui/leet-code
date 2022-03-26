/**
 * 回溯
 * @desc 时间复杂度 O(N!)  空间复杂度 O(1)
 * @param n {number}
 * @param k {number}
 * @return {string}
 */
export function getPermutation(n: number, k: number): string {
  let idx = 1
  return backtrack('') || ''

  function backtrack(str: string): string | undefined {
    if (str.length === n && idx === k) {
      return str
    }
    else if (str.length === n) {
      idx++
    }
    else {
      for (let i = 1; i <= n; i++) {
        if (str.split('').includes(`${i}`)) continue

        const res = backtrack(str + i)
        if (res)
          return res
      }
    }
  }
}

/**
 * 逆康托展开
 * @desc 时间复杂度 O(N^2)   空间复杂度 O(N)
 * @param n {number}
 * @param k {number}
 * @return {string}
 */
export function getPermutation2(n: number, k: number): string {
  // 阶乘数组 - [1, 1, 4, 24]
  const factorial = [1]
  for (let i = 1; i < n; i++)
    factorial[i] = factorial[i - 1] * i

  // 记录已使用过的数字 - 下标代表数字
  const valid: boolean[] = new Array(n + 1).fill(false)

  let ans = ''
  k--

  for (let i = 1; i <= n; i++) {
    // a = ⌊(k - 1) / (n - 1)!⌋ + 1 算出第nth个排列
    let a = Math.floor(k / factorial[n - i]) + 1

    // 找出该排列的数组（重点在于去重）
    for (let j = 1; j <= n; j++) {
      // 判断数值是否使用过
      if (valid[j]) continue
      // 计数
      a--
      // 找到对应数值
      if (a === 0) {
        ans += j
        valid[j] = true
        break
      }
    }

    // 取余更新k
    k %= factorial[n - i]
  }

  return ans
}
