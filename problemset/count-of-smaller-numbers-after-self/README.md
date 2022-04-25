# 计算右侧小于当前元素的个数

> 难度：困难
>
> https://leetcode-cn.com/problems/count-of-smaller-numbers-after-self/

## 题目

给你一个整数数组 `nums` ，按要求返回一个新数组 `counts` 。数组 `counts` 有该性质： `counts[i]` 的值是  `nums[i]` 右侧小于 `nums[i]` 的元素的数量。

### 示例

#### 示例 1：

```
输入：nums = [5,2,6,1]
输出：[2,1,1,0] 
解释：
5 的右侧有 2 个更小的元素 (2 和 1)
2 的右侧仅有 1 个更小的元素 (1)
6 的右侧有 1 个更小的元素 (1)
1 的右侧有 0 个更小的元素
```

#### 示例 2：

```
输入：nums = [-1]
输出：[0]
```

#### 示例 3：

```
输入：nums = [-1,-1]
输出：[0,0]
```

## 解题

### 离散化树状数组

```ts
/**
 * 离散化树状数组
 * @desc 时间复杂度 O(NlogN)  空间复杂度 O(N)
 * @param nums
 * @returns
 */
export function countSmaller(nums: number[]): number[] {
  // 离散映射表 - 即把原序列的值域映射到一个连续的整数区间，并保证它们的偏序关系不变
  const discretizedMap = new Map<number, number>(
    [...new Set(nums)] // 去重
      .sort((a, b) => a - b) // 排序
      .map((v, i) => [v, i + 1]),
  )

  const res: number[] = []
  const bit = new Bit(discretizedMap.size)
  // 倒序遍历所有数值
  for (let i = nums.length - 1; i >= 0; i--) {
    const val = nums[i]
    const discretizedVal = discretizedMap.get(val)!
    // 将前一位的前缀和加入结果
    res[i] = bit.query(discretizedVal - 1)
    bit.add(discretizedVal, 1)
  }

  return res
}

/**
 * 树状数组 - 可以动态维护序列前缀和的数据结构
 */
class Bit {
  private tree: number[]

  constructor(
    private size: number,
  ) {
    this.tree = new Array(size + 1).fill(0)
  }

  /**
   * 单点更新
   * @param x
   * @param v
   */
  add(x: number, v: number): void {
    // 在序列 x 的位置加上一个值 v
    for (let i = x; i <= this.size; i += this.lowBit(i))
      this.tree[i] += v
  }

  /**
   * 区间查询
   * @param x
   * @returns
   */
  query(x: number): number {
    let res = 0
    for (let i = x; i > 0; i -= this.lowBit(i))
      res += this.tree[i]
    return res
  }

  /**
   * 生成lowbit - 最低位的 1 及其后面的所有的 0
   * @param x
   * @returns
   */
  private lowBit(x: number): number {
    return x & -x
  }
}
```

### 归并排序

```ts
/**
 * 归并排序
 * @desc 时间复杂度 O(NlogN)  空间复杂度 O(N)
 * @param nums
 * @returns
 */
export function countSmaller2(nums: number[]): number[] {
  const len = nums.length
  const index = new Array<number>(len).fill(0).map((_, i) => i)
  const temp: number[] = []
  const tempIndex: number[] = []
  const result = new Array<number>(len).fill(0)

  const left = 0
  const right = len - 1
  mergeSort(nums, left, right)

  return result

  function mergeSort(nums: number[], left: number, right: number) {
    if (left >= right) return

    const mid = (left + right) >> 1
    mergeSort(nums, left, mid)
    mergeSort(nums, mid + 1, right)
    merge(nums, left, mid, right)
  }

  function merge(nums: number[], left: number, mid: number, right: number) {
    let i = left
    let j = mid + 1
    let p = left
    while (i <= mid && j <= right) {
      if (nums[i] <= nums[j]) {
        temp[p] = nums[i]
        tempIndex[p] = index[i]
        result[index[i]] += (j - mid - 1)
        i++
        p++
      }
      else {
        temp[p] = nums[j]
        tempIndex[p] = index[j]
        j++
        p++
      }
    }
    while (i <= mid) {
      temp[p] = nums[i]
      tempIndex[p] = index[i]
      result[index[i]] += (j - mid - 1)
      i++
      p++
    }
    while (j <= right) {
      temp[p] = nums[j]
      tempIndex[p] = index[j]
      j++
      p++
    }
    for (let k = left; k <= right; k++) {
      index[k] = tempIndex[k]
      nums[k] = temp[k]
    }
  }
}
```