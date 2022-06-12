/**
 * 双指针
 * @desc 时间复杂度 O(N) 空间复杂度 O(1)
 * @param s
 */
export function reverseString(s: string[]): void {
  let left = 0
  let right = s.length - 1

  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]]
    left++
    right--
  }
}
