/**
 * 双指针
 * @desc 时间复杂度 O(N) 空间复杂度 O(N)
 * @param word
 * @returns
 */
export function numDifferentIntegers(word: string): number {
  const isDigit = (ch: string) => ch >= '0' && ch <= '9'

  const set = new Set()
  const n = word.length; let p1 = 0; let p2
  while (true) {
    while (p1 < n && !isDigit(word[p1]))
      p1++
    if (p1 === n)
      break

    p2 = p1
    while (p2 < n && isDigit(word[p2]))
      p2++

    while (p2 - p1 > 1 && word[p1] === '0')
      p1++

    set.add(word.slice(p1, p2))
    p1 = p2
  }
  return set.size
}
