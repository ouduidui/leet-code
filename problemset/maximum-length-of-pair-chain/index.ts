/**
 * 动态规划
 * @desc 时间复杂度 O(N²) 空间复杂度 O(N)
 * @param pairs
 * @returns
 */
export function findLongestChain(pairs: number[][]): number {
  const n = pairs.length
  pairs.sort((a, b) => a[0] - b[0])
  const dp = new Array(n).fill(1)
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (pairs[i][0] > pairs[j][1])
        dp[i] = Math.max(dp[i], dp[j] + 1)
    }
  }
  return dp[n - 1]
}

/**
 * 最长递增子序列
 * @desc 时间复杂度 O(NlogN) 空间复杂度 O(N)
 * @param pairs
 * @returns
 */
export function findLongestChain2(pairs: number[][]): number {
  pairs.sort((a, b) => a[0] - b[0])
  const arr: number[] = []
  for (const p of pairs) {
    const x = p[0]; const y = p[1]
    if (arr.length === 0 || x > arr[arr.length - 1]) {
      arr.push(y)
    }
    else {
      const idx = binarySearch(arr, x)
      arr[idx] = Math.min(arr[idx], y)
    }
  }
  return arr.length

  function binarySearch(arr: number[], x: number) {
    let low = 0; let high = arr.length - 1
    while (low < high) {
      const mid = low + Math.floor((high - low) / 2)
      if (arr[mid] >= x)
        high = mid
      else
        low = mid + 1
    }
    return low
  }
}

/**
 * 贪心算法
 * @desc 时间复杂度 O(NlogN) 空间复杂度 O(logN)
 * @param pairs
 * @returns
 */
export function findLongestChain3(pairs: number[][]): number {
  let curr = -Number.MAX_VALUE; let res = 0
  pairs.sort((a, b) => a[1] - b[1])
  for (const p of pairs) {
    if (curr < p[0]) {
      curr = p[1]
      res++
    }
  }
  return res
}
