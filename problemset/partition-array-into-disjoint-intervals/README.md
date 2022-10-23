# 分割数组

> 难度：中等
>
> https://leetcode.cn/problems/partition-array-into-disjoint-intervals/

## 题目

给定一个数组 `nums` ，将其划分为两个连续子数组 `left` 和 `right`， 使得：

- `left` 中的每个元素都小于或等于 `right` 中的每个元素。
- `left` 和 `right` 都是非空的。
- `left` 的长度要尽可能小。

在完成这样的分组后返回 `left` 的 **长度** 。

用例可以保证存在这样的划分方法。

### 示例

#### 示例 1：

```
输入：nums = [5,0,3,8,6]
输出：3
解释：left = [5,0,3]，right = [8,6]
```

#### 示例 2：

```
输入：nums = [1,1,1,0,6,12]
输出：4
解释：left = [1,1,1,0]，right = [6,12]
```

## 解题

```ts 
/**
 * 遍历
 * @desc 时间复杂度 O(N) 空间复杂度 O(1)
 * @param nums
 * @returns
 */
export function partitionDisjoint(nums: number[]): number {
  const n = nums.length
  let leftMax = nums[0]
  let leftPos = 0
  let curMax = nums[0]
  for (let i = 1; i < n - 1; i++) {
    curMax = Math.max(curMax, nums[i])
    if (nums[i] < leftMax) {
      leftMax = curMax
      leftPos = i
    }
  }
  return leftPos + 1
}
```