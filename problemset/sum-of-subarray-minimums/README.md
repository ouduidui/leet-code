# 子数组的最小值之和

> 难度：中等
>
> https://leetcode.cn/problems/sum-of-subarray-minimums/

## 题目

给定一个整数数组 arr，找到 min(b) 的总和，其中 b 的范围为 arr 的每个（连续）子数组。

由于答案可能很大，因此 返回答案模 10^9 + 7 。

### 示例

#### 示例 1：

```
输入：arr = [3,1,2,4]
输出：17
解释：
子数组为 [3]，[1]，[2]，[4]，[3,1]，[1,2]，[2,4]，[3,1,2]，[1,2,4]，[3,1,2,4]。 
最小值为 3，1，2，4，1，1，2，1，1，1，和为 17。
```

#### 示例 2：

```
输入：arr = [11,81,94,43,3]
输出：444
```

## 解题

### 单调栈

```ts 
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
```

### 动态规划

```ts 
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
```