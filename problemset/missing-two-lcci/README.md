# 消失的两个数字

> 难度：困难
>
> https://leetcode.cn/problems/missing-two-lcci/

## 题目

给定一个数组，包含从 `1` 到 `N` 所有的整数，但其中缺了两个数字。你能在 `O(N)` 时间内只用 `O(1)` 的空间找到它们吗？

以任意顺序返回这两个数字均可。

### 示例

#### 示例 1:

```
输入: [1]
输出: [2,3]
```

#### 示例 2:

```
输入: [2,3]
输出: [1,4]
```

## 解题

```ts 
/**
 * 位运算
 * @desc 时间复杂度 O(N) 空间复杂度 O(1)
 * @param nums
 * @returns
 */
export function missingTwo(nums: number[]): number[] {
  let xorsum = 0
  const n = nums.length + 2
  for (const num of nums)
    xorsum ^= num

  for (let i = 1; i <= n; i++)
    xorsum ^= i

  let type1 = 0; let type2 = 0
  const lsb = xorsum & (-xorsum)
  for (const num of nums) {
    if (num & lsb)
      type1 ^= num

    else
      type2 ^= num
  }
  for (let i = 1; i <= n; i++) {
    if (i & lsb)
      type1 ^= i

    else
      type2 ^= i
  }
  return [type1, type2]
}
```