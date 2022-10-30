/**
 * 双指针
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param n
 * @returns
 */
export function magicalString(n: number): number {
  if (n < 4)
    return 1

  const s = new Array(n).fill(0)
  s[0] = '1'
  s[1] = '2'
  s[2] = '2'
  let res = 1
  let i = 2
  let j = 3
  while (j < n) {
    let size = s[i].charCodeAt(0) - '0'.charCodeAt(0)
    const num = 3 - (s[j - 1].charCodeAt() - '0'.charCodeAt(0))
    while (size > 0 && j < n) {
      s[j] = String.fromCharCode('0'.charCodeAt(0) + num)
      if (num === 1) ++res

      ++j
      --size
    }
    ++i
  }
  return res
}
