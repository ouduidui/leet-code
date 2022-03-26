/**
 * 暴力解法
 * @desc 时间复杂度 O(NlogN)  空间复杂度 O(1)
 * @param height {number}
 * @return {number}
 */
export function maxArea(height: number[]): number {
  let maxArea = 0

  for (let i = 0; i < height.length - 1; i++) {
    for (let j: number = i + 1; j < height.length; j++) {
      const area: number = Math.min(height[i], height[j]) * (j - i)
      maxArea = maxArea < area ? area : maxArea
    }
  }

  return maxArea
}

/**
 * 双指针
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param height {number}
 * @return {number}
 */
export function maxArea2(height: number[]): number {
  let maxArea = 0
  let leftIdx = 0
  let rightIdx: number = height.length - 1

  while (leftIdx < rightIdx) {
    const leftHeight: number = height[leftIdx]
    const rightHeight: number = height[rightIdx]
    const area: number
      = Math.min(leftHeight, rightHeight) * (rightIdx - leftIdx)
    maxArea = maxArea < area ? area : maxArea

    leftHeight <= rightHeight ? leftIdx++ : rightIdx--
  }

  return maxArea
}
