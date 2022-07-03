# 下一个更大元素 III

> 难度：中等
>
> https://leetcode.cn/problems/next-greater-element-iii/

## 题目

给你一个正整数 `n` ，请你找出符合条件的最小整数，其由重新排列 `n` 中存在的每位数字组成，并且其值大于 `n` 。如果不存在这样的正整数，则返回 `-1` 。

注意 ，返回的整数应当是一个 `32` 位整数 ，如果存在满足题意的答案，但不是 `32` 位整数 ，同样返回 `-1` 。

### 示例

#### 示例 1：

```
输入：n = 12
输出：21
```

#### 示例 2：
```
输入：n = 21
输出：-1
```

## 解题

```ts
/**
 * 下一个排列
 * @desc 时间复杂度 O(logN)  空间复杂度 O(logN)
 * @param n
 * @returns
 */
export function nextGreaterElement(n: number): number {
  const MAX = 2 ** 31 - 1

  const nums = [...(`${n}`)]
  let i = nums.length - 2
  while (i >= 0 && nums[i] >= nums[i + 1]) i--

  if (i < 0) return -1

  let j = nums.length - 1
  while (j >= 0 && nums[i] >= nums[j]) j--;

  [nums[i], nums[j]] = [nums[j], nums[i]]
  reverse(nums, i + 1)
  const ans = Number(nums.join(''))
  return ans > MAX ? -1 : ans

  function reverse(nums: string[], begin: number) {
    let i = begin
    let j = nums.length - 1
    while (i < j) {
      [nums[i], nums[j]] = [nums[j], nums[i]]
      i++
      j--
    }
  }
}
```