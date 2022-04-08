/**
 * 哈希统计
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param nums
 * @returns
 */
export function majorityElement(nums: number[]): number[] {
  const map = new Map<number, number>()

  const len = nums.length
  for (let i = 0; i < len; i++)
    map.set(nums[i], (map.get(nums[i]) || 0) + 1)

  const result: number[] = []
  map.forEach((value, key) => {
    if (value > len / 3) result.push(key)
  })

  return result
}

/**
 * 摩尔投票
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param nums
 * @returns
 */
export function majorityElement2(nums: number[]): number[] {
  let element1 = 0
  let element2 = 0
  let vote1 = 0
  let vote2 = 0

  for (const num of nums) {
    // 如果该元素为第一个元素，则计数加1
    if (vote1 > 0 && num === element1) {
      vote1++
    }
    // 如果该元素为第二个元素，则计数加1
    else if (vote2 > 0 && num === element2) {
      vote2++
    }
    // 选择第一个元素
    else if (vote1 === 0) {
      element1 = num
      vote1++
    }
    // 选择第二个元素
    else if (vote2 === 0) {
      element2 = num
      vote2++
    }
    // 如果三个元素均不相同，则相互抵消1次
    else {
      vote1--
      vote2--
    }
  }

  let count1 = 0
  let count2 = 0
  for (const num of nums) {
    if (vote1 > 0 && num === element1) count1++
    if (vote2 > 0 && num === element2) count2++
  }

  const result: number[] = []
  if (vote1 > 0 && count1 > nums.length / 3)
    result.push(element1)

  if (vote2 > 0 && count2 > nums.length / 3)
    result.push(element2)

  return result
}
