/**
 * 双指针
 * @desc 时间复杂度 O(M+N)  空间复杂度 O(1)
 * @param word1
 * @param word2
 * @returns
 */
export function mergeAlternately(word1: string, word2: string): string {
  const m = word1.length
  const n = word2.length
  let i = 0
  let j = 0

  const ans = []
  while (i < m || j < n) {
    if (i < m) {
      ans.push(word1[i])
      ++i
    }
    if (j < n) {
      ans.push(word2[j])
      ++j
    }
  }
  return ans.join('')
}
