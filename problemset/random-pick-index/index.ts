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
