// 1 - 30 的质数
const PRIMES = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
// nums数组最大数值
const NUM_MAX = 30
// 除数
const MOD = 10 ** 9 + 7

export function numberOfGoodSubsets(nums: number[]): number {
  // 初始化每个数出现频率
  const freq = new Array(NUM_MAX + 1).fill(0)
  for (const num of nums)
    freq[num]++

  const f = new Array(1 << PRIMES.length).fill(0)
  f[0] = 1
  for (let i = 0; i < freq[1]; i++)
    f[0] = (f[0] * 2) % MOD

  // 遍历 2 - 30每个数
  for (let i = 2; i <= NUM_MAX; i++) {
    // 如果没出现过，直接跳过
    if (freq[i] === 0)
      continue

    // 检查 i 的每个质因数是否均不超过 1 个
    let subset = 0
    let check = true
    // 遍历所有质数
    for (let j = 0; j < PRIMES.length; j++) {
      const prime = PRIMES[j]
      if (i % (prime * prime) === 0) {
        check = false
        break
      }
      if (i % prime === 0)
        subset |= 1 << j
    }
    if (!check)
      continue

    // 动态规划
    for (let mask = (1 << PRIMES.length) - 1; mask > 0; mask--) {
      if ((mask & subset) === subset)
        f[mask] = (f[mask] + f[mask ^ subset] * freq[i]) % MOD
    }
  }

  let ans = 0
  for (let mask = 1, maskMax = 1 << PRIMES.length; mask < maskMax; mask++)
    ans = (ans + f[mask]) % MOD

  return ans
}
