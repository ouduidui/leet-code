/**
 * 双指针
 * @desc 时间复杂度 O(N)   空间复杂度 O(N)
 * @param s
 */
export function reverseOnlyLetters(s: string): string {
  const res = s.split('')

  let left = 0
  let right = s.length - 1

  while (left < right) {
    while (left < right && !/^[a-zA-Z]+$/.test(res[left])) left++
    while (left < right && !/^[a-zA-Z]+$/.test(res[right])) right--
    if (left >= right) break;

    [res[left], res[right]] = [res[right], res[left]]
    left++
    right--
  }

  return res.join('')
}
