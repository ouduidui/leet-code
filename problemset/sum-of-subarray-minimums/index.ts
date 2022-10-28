/**
 * 单调栈
 * @desc 时间复杂度 O(N) 空间复杂度 O(N)
 * @param arr
 * @returns
 */
export function sumSubarrayMins(arr: number[]): number {
  const n = arr.length
  let monoStack: number[] = []
  const left = new Array<number>(n).fill(0)
  const right = new Array<number>(n).fill(0)
  for (let i = 0; i < n; i++) {
    while (monoStack.length !== 0 && arr[i] <= arr[monoStack[monoStack.length - 1]])
      monoStack.pop()

    left[i] = i - (monoStack.length === 0 ? -1 : monoStack[monoStack.length - 1])
    monoStack.push(i)
  }
  monoStack = []
  for (let i = n - 1; i >= 0; i--) {
    while (monoStack.length !== 0 && arr[i] < arr[monoStack[monoStack.length - 1]])
      monoStack.pop()

    right[i] = (monoStack.length === 0 ? n : monoStack[monoStack.length - 1]) - i
    monoStack.push(i)
  }
  let ans = 0
  const MOD = 1000000007
  for (let i = 0; i < n; i++)
    ans = (ans + left[i] * right[i] * arr[i]) % MOD

  return ans
}

/**
 * 动态规划
 * @desc 时间复杂度 O(N) 空间复杂度 O(N)
 * @param arr
 * @returns
 */
export function sumSubarrayMins2(arr: number[]): number {
  const n = arr.length
  let ans = 0
  const MOD = 1000000007
  const monoStack: number[] = []
  const dp = new Array(n).fill(0)
  for (let i = 0; i < n; i++) {
    while (monoStack.length !== 0 && arr[monoStack[monoStack.length - 1]] > arr[i])
      monoStack.pop()

    const k = monoStack.length === 0 ? (i + 1) : (i - monoStack[monoStack.length - 1])
    dp[i] = k * arr[i] + (monoStack.length === 0 ? 0 : dp[i - k])
    ans = (ans + dp[i]) % MOD
    monoStack.push(i)
  }
  return ans
}
