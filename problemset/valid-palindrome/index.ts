/**
 * 双指针
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param s
 */
export function isPalindrome(s: string): boolean {
  let left = 0
  let right = s.length - 1
  const isValid = (s: string): boolean =>
    (s >= 'a' && s <= 'z') || (s >= 'A' && s <= 'Z') || (s >= '0' && s <= '9')

  while (left < right) {
    while (!isValid(s[left]) && left < right) left++
    while (!isValid(s[right]) && left < right) right--

    if (s[left].toLowerCase() !== s[right].toLowerCase()) return false

    left++
    right--
  }

  return true
}
