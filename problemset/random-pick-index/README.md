# 随机数索引

> 难度：中等
>
> https://leetcode-cn.com/problems/random-pick-index/

## 题目

给定一个可能含有重复元素的整数数组，要求随机输出给定的数字的索引。 您可以假设给定的数字一定存在于数组中。

注意：数组大小可能非常大。 使用太多额外空间的解决方案将不会通过测试。

### 示例:

```
int[] nums = new int[] {1,2,3,3,3};
Solution solution = new Solution(nums);

// pick(3) 应该返回索引 2,3 或者 4。每个索引的返回概率应该相等。
solution.pick(3);

// pick(1) 应该返回 0。因为只有nums[0]等于1。
solution.pick(1);
```

## 解题

### 哈希表

```ts
/**
 * 哈希表
 */
export class Solution {
  indexMap = new Map<number, number[]>()

  /**
   * @desc 时间复杂度 O(N)  空间复杂度 O(N)
   * @param nums
   */
  constructor(nums: number[]) {
    for (let i = 0; i < nums.length; i++) {
      const num = nums[i]
      if (this.indexMap.has(num))
        this.indexMap.get(num)!.push(i)
      else
        this.indexMap.set(num, [i])
    }
  }

  /**
   * @desc 时间复杂度 O(1)  空间复杂度 O(N)
   * @param nums
   */
  pick(target: number): number {
    const idxs = this.indexMap.get(target)
    if (!idxs) return -1
    if (idxs.length === 1) return idxs[0]

    return idxs[(Math.random() * idxs.length) >> 0]
  }
}
```

### 水塘抽样

```ts
/**
 * 水塘抽样
 */
export class Solution2 {
  /**
   * @desc 时间复杂度 O(1)  空间复杂度 O(1)
   * @param nums
   */
  constructor(public nums: number[]) {}

  /**
   * @desc 时间复杂度 O(N)  空间复杂度 O(1)
   * @param nums
   */
  pick(target: number): number {
    let ans = 0
    for (let i = 0, cnt = 0; i < this.nums.length; i++) {
      if (this.nums[i] === target) {
        // 记录target的次数
        cnt++
        if ((Math.random() * cnt) >> 0 === 0) ans = i
      }
    }

    return ans
  }
}
```