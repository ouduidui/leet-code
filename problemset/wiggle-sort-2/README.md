# 摆动排序 II

> 难度：中等
>
> https://leetcode-cn.com/problems/wiggle-sort-ii/

## 题目

给你一个整数数组 `nums`，将它重新排列成 `nums[0] < nums[1] > nums[2] < nums[3]...` 的顺序。

你可以假设所有输入数组都可以得到满足题目要求的结果。

### 示例

#### 示例 1：

```
输入：nums = [1,5,1,1,6,4]
输出：[1,6,1,5,1,4]
解释：[1,4,1,5,1,6] 同样是符合题目要求的结果，可以被判题程序接受。
```

#### 示例 2：

```
输入：nums = [1,3,2,2,3,1]
输出：[2,3,1,3,1,2]
```

## 解题

### 排序

```ts
/**
 * 排序
 * @desc 时间复杂度 O(NlogN)  空间复杂度 O(N)
 * @param nums
 */
export function wiggleSort(nums: number[]): void {
  const sorted = nums.sort((a, b) => a - b).slice()
  let i = nums.length - 1
  let j = i >> 1
  let k = 0
  while (k < sorted.length) {
    nums[k] = (k & 1) ? sorted[i--] : sorted[j--]
    k++
  }
}
```

### 快速排序 + 中位数

```ts 
/**
 * 快速排序 + 中位数
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param nums
 */
export function wiggleSort2(nums: number[]): void {
  const len = nums.length
  const mid = getMedian(0, 0, nums) // 中位数
  const leftArr: number[] = []
  const rightArr: number[] = []
  let count = 0 // 记录与中位数相等的数量

  for (const num of nums) {
    if (num > mid)
      rightArr.push(num)
    else if (num < mid)
      leftArr.push(num)
    else
      count++
  }

  // 将mid放入数组中，保证leftArr和rightArr长度相差不超过1
  const diff = leftArr.length - rightArr.length
  if (diff === 0) {
    leftArr.splice(0, 0, ...new Array(Math.ceil(count / 2)).fill(mid))
    rightArr.push(...new Array(count >> 1).fill(mid))
  }
  else if (diff > 0) {
    count -= diff
    leftArr.splice(0, 0, ...new Array(Math.ceil(count / 2)).fill(mid))
    rightArr.push(...new Array((count >> 1) + diff).fill(mid))
  }
  else {
    count += diff
    leftArr.splice(0, 0, ...new Array(Math.ceil(count / 2) - diff).fill(mid))
    rightArr.push(...new Array(count >> 1).fill(mid))
  }

  for (let i = 0; i < len; i++) {
    if (i % 2)
      nums[i] = rightArr.shift()!
    else
      nums[i] = leftArr.shift()!
  }

  /**
   * 使用快排获取中位数
   * @param left
   * @param right
   * @param nums
   * @returns
   */
  function getMedian(left: number, right: number, nums: number[]): number {
    const len = nums.length
    const mid = nums[len >> 1]

    const leftArr: number[] = []
    const rightArr: number[] = []

    // 记录与 mid 相等的数量
    let count = 0
    for (const num of nums) {
      if (num > mid)
        rightArr.push(num)
      else if (num < mid)
        leftArr.push(num)
      else
        count++
    }

    if (Math.abs(left + leftArr.length - right - rightArr.length) <= count)
      return mid
    if (left + leftArr.length > right + rightArr.length)
      return getMedian(left, right + rightArr.length + count, leftArr)
    else
      return getMedian(left + leftArr.length + count, right, rightArr)
  }
}
```