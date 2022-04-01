# 存在重复元素 II

> 难度：简单
>
> https://leetcode-cn.com/problems/contains-duplicate-ii/

## 题目

给你一个整数数组 `nums` 和一个整数 `k` ，判断数组中是否存在两个 **不同的索引** `i` 和 `j` ，满足 `nums[i] == nums[j]` 且 `abs(i - j) <= k` 。如果存在，返回 `true` ；否则，返回 `false` 。

 
### 示例

#### 示例 1：

```
输入：nums = [1,2,3,1], k = 3
输出：true
```

#### 示例 2：

```
输入：nums = [1,0,1,1], k = 1
输出：true
```

#### 示例 3：

```
输入：nums = [1,2,3,1,2,3], k = 2
输出：false
```

## 解题

### 哈希表

```ts
/**
 * 哈希表
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param nums
 * @param k
 * @returns
 */
export function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const map = new Map<number, number>()

  for (let i = 0; i < nums.length; i++) {
    const val = nums[i]
    if (map.has(val) && i - map.get(val)! <= k)
      return true
    else
      map.set(val, i)
  }

  return false
}
```


### 滑动窗口

```ts
/**
 * 滑动窗口
 * @desc 时间复杂度 O(N)  空间复杂度 O(K)
 * @param nums
 * @param k
 * @returns
 */
export function containsNearbyDuplicate2(nums: number[], k: number): boolean {
  const set = new Set<number>()
  for (let i = 0; i < nums.length; i++) {
    if (i > k)
      set.delete(nums[i - k - 1])

    if (set.has(nums[i]))
      return true

    set.add(nums[i])
  }
  return false
}
```