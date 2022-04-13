# 只出现一次的数字 III

> 难度：中等
>
> https://leetcode-cn.com/problems/single-number-iii/

## 题目

给定一个整数数组 `nums`，其中恰好有两个元素只出现一次，其余所有元素均出现两次。 找出只出现一次的那两个元素。你可以按 **任意顺序** 返回答案。

**进阶**：你的算法应该具有线性时间复杂度。你能否仅使用常数空间复杂度来实现？

### 示例

#### 示例 1：

```
输入：nums = [1,2,1,3,2,5]
输出：[3,5]
解释：[5, 3] 也是有效的答案。
```

#### 示例 2：

```
输入：nums = [-1,0]
输出：[-1,0]
```

#### 示例 3：

```
输入：nums = [0,1]
输出：[1,0]
```

## 解题

### 哈希表

```ts
/**
 * 哈希表
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param nums
 * @returns
 */
export function singleNumber(nums: number[]): number[] {
  if (nums.length <= 2) return nums

  const freq = new Map()
  for (const num of nums)
    freq.set(num, (freq.get(num) || 0) + 1)

  const ans: number[] = []
  for (const [num, occ] of freq.entries())
    if (occ === 1) ans.push(num)

  return ans
}
```

### 位运算

```ts
/**
 * 位运算
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param nums
 * @returns
 */
export function singleNumber2(nums: number[]): number[] {
  let xorsum = 0

  for (const num of nums)
    xorsum ^= num

  let type1 = 0
  let type2 = 0
  // a⊕b⊕a = b⊕a⊕a = b⊕(a⊕a) = b⊕0 = b
  const lsb = xorsum & (-xorsum)
  for (const num of nums) {
    if (num & lsb) type1 ^= num
    else type2 ^= num
  }
  return [type1, type2]
}
```