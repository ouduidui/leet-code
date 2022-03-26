/**
 * 双指针
 * @desc 时间复杂度 O(N) 空间复杂度 O(1)
 * @param numbers
 * @param target
 */
export function twoSum(numbers: number[], target: number): number[] {
  let left = 0
  let right = numbers.length - 1

  while (left < right) {
    const sum = numbers[left] + numbers[right]
    if (sum < target) left++
    else if (sum > target) right--
    else break
  }

  return [left + 1, right + 1]
}
