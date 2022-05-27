/**
 * 一次遍历
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param words
 * @param word1
 * @param word2
 * @returns
 */
export function findClosest(words: string[], word1: string, word2: string): number {
  const len = words.length
  let ans = len
  let index1 = -1
  let index2 = -1
  for (let i = 0; i < len; i++) {
    const word = words[i]
    if (word === word1)
      index1 = i
    else if (word === word2)
      index2 = i

    if (index1 >= 0 && index2 >= 0)
      ans = Math.min(ans, Math.abs(index1 - index2))
  }
  return ans
}
