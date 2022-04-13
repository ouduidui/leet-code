# 丢失的数字

> 难度：简单
>
> https://leetcode-cn.com/problems/missing-number/

## 题目

给定一个包含 `[0, n]` 中 `n` 个数的数组 `nums` ，找出 `[0, n]` 这个范围内没有出现在数组中的那个数。

### 示例  

#### 示例 1：

```
输入：nums = [3,0,1]
输出：2
解释：n = 3，因为有 3 个数字，所以所有的数字都在范围 [0,3] 内。2 是丢失的数字，因为它没有出现在 nums 中。
```

#### 示例 2：

```
输入：nums = [0,1]
输出：2
解释：n = 2，因为有 2 个数字，所以所有的数字都在范围 [0,2] 内。2 是丢失的数字，因为它没有出现在 nums 中。
```

#### 示例 3：

```
输入：nums = [9,6,4,2,3,5,7,0,1]
输出：8
解释：n = 9，因为有 9 个数字，所以所有的数字都在范围 [0,9] 内。8 是丢失的数字，因为它没有出现在 nums 中。
```

#### 示例 4：

```
输入：nums = [0]
输出：1
解释：n = 1，因为有 1 个数字，所以所有的数字都在范围 [0,1] 内。1 是丢失的数字，因为它没有出现在 nums 中。
```

## 解题

### 排序

```ts
/**
 * 排序
 * @desc 时间复杂度 O(NlogN)  空间复杂度 O(logN)
 * @param nums
 * @returns
 */
export function missingNumber(nums: number[]): number {
  nums.sort((a, b) => a - b)
  const len = nums.length
  for (let i = 0; i < len; i++)
    if (nums[i] !== i) return i
  return len
}
```

### 哈希集合

```ts
/**
 * 哈希集合
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param nums
 * @returns
 */
export function missingNumber2(nums: number[]): number {
  const set = new Set<number>()
  const len = nums.length
  for (let i = 0; i < len; i++)
    set.add(nums[i])

  let missing = -1
  for (let i = 0; i <= len; i++) {
    if (!set.has(i)) {
      missing = i
      break
    }
  }
  return missing
}
```

### 位运算

```ts
/**
 * 位运算
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param nums
 * @returns
 */
export function missingNumber3(nums: number[]): number {
  let xor = 0
  const len = nums.length
  for (let i = 0; i < nums.length; i++)
    xor ^= nums[i]

  for (let i = 0; i <= len; i++)
    xor ^= i

  return xor
}
```

### 数学

```ts
/**
 * 数学
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param nums
 * @returns
 */
export function missingNumber4(nums: number[]): number {
  const len = nums.length
  const total = len * (len + 1) >> 1
  let arrSum = 0
  for (let i = 0; i < len; i++)
    arrSum += nums[i]

  return total - arrSum
}
```