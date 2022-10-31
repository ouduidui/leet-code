/**
 * 遍历
 * @desc 时间复杂度 O(M+N)  空间复杂度 O(1)
 * @param word1
 * @param word2
 * @returns
 */
export function arrayStringsAreEqual(word1: string[], word2: string[]): boolean {
  let p1 = 0
  let p2 = 0
  let i = 0
  let j = 0
  while (p1 < word1.length && p2 < word2.length) {
    if (word1[p1][i] !== word2[p2][j])
      return false

    i++
    if (i === word1[p1].length) {
      p1++
      i = 0
    }
    j++
    if (j === word2[p2].length) {
      p2++
      j = 0
    }
  }
  return p1 === word1.length && p2 === word2.length
}
