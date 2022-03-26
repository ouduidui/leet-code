/**
 * 枚举
 * @desc 时间复杂度 O(N√N)  空间复杂度 O(1)
 * @param n
 */
export function countPrimes(n: number): number {
  let ans = 0
  for (let i = 2; i < n; i++) isPrimes(i) && ans++
  return ans

  function isPrimes(x: number): boolean {
    for (let i = 2; i * i <= x; i++)
      if (x % i === 0) return false

    return true
  }
}

/**
 * 埃氏筛
 * @desc 时间复杂度 O(Nlog(logN))  空间复杂度 O(N)
 * @param n
 */
export function countPrimes2(n: number): number {
  const isPrime = new Array(n).fill(true)

  let ans = 0
  for (let i = 2; i < n; i++) {
    if (isPrime[i]) {
      ans += 1
      for (let j = i * i; j < n; j += i)
        isPrime[j] = false
    }
  }

  return ans
}
