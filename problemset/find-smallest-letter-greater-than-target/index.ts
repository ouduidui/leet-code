/**
 * 线性查找
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param letters
 * @param target
 * @returns
 */
export function nextGreatestLetter(letters: string[], target: string): string {
  const len = letters.length
  let next = letters[0]

  for (let i = 0; i < len; i++) {
    if (letters[i] > target) {
      next = letters[i]
      break
    }
  }

  return next
}

/**
 * 二分法
 * @desc 时间复杂度 O(logN)  空间复杂度 O(1)
 * @param letters
 * @param target
 * @returns
 */
export function nextGreatestLetter2(letters: string[], target: string): string {
  if (target >= letters[letters.length - 1]) return letters[0]

  let left = 0
  let right = letters.length - 1
  while (left < right) {
    const mid = (left + right) >> 1
    if (letters[mid] <= target)
      left = mid + 1
    else
      right = mid
  }

  return letters[left]
}
