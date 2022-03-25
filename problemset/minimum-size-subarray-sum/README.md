# 长度最小的子数组

> 难度：中等
>
> https://leetcode-cn.com/problems/minimum-size-subarray-sum/

## 题目

给定一个含有  `n`  个正整数的数组和一个正整数 `target` 。

找出该数组中满足其和 `≥ target` 的长度最小的 **连续子数
组** `[numsl, numsl+1, ..., numsr-1, numsr]` ，并返回其长度。如果不存在符合条件
的子数组，返回 `0` 。

### 示例

#### 示例 1：

```
输入：target = 7, nums = [2,3,1,2,4,3]
输出：2
解释：子数组 [4,3] 是该条件下的长度最小的子数组。
```

#### 示例 2：

```
输入：target = 4, nums = [1,4,4]
输出：1
```

#### 示例 3：

```
输入：target = 11, nums = [1,1,1,1,1,1,1,1]
输出：0
```

## 解题

```typescript
/**
 * 滑动窗口
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param target
 * @param nums
 * @returns
 */
export function minSubArrayLen(target: number, nums: number[]): number {
  let left = 0;
  let right = 0;
  let sum = 0;
  let minLen = Infinity;

  while (right < nums.length) {
    sum += nums[right];
    right++;

    while (sum >= target) {
      minLen = Math.min(minLen, right - left);
      sum -= nums[left];
      left++;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}
```
