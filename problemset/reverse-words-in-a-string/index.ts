/**
 * 语言特性
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param s
 */
export function reverseWords(s: string): string {
  return s.trim().split(/\s+/).reverse().join(' ')
}

/**
 * 双指针
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param s
 */
export function reverseWords2(s: string): string {
  const len = s.length
  let slow = len - 1
  let fast = len - 1
  let result = ''

  while (fast >= 0) {
    while (!s.charAt(fast).trim() && fast >= 0) {
      fast--
      slow--
    }

    while (s.charAt(fast).trim() && fast >= 0)
      fast--

    if (fast !== slow) {
      const word = s.substring(fast + 1, slow + 1)
      result = result ? `${result} ${word}` : word
      slow = fast
    }
  }

  return result
}
