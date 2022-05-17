/**
 * 直接遍历
 * @desc 时间复杂度 O(MN)  空间复杂度 O(C)
 * @param words
 * @param order
 * @returns
 */
export function isAlienSorted(words: string[], order: string): boolean {
  const getChIndex = (ch: string): number => ch.charCodeAt(0) - 'a'.charCodeAt(0)

  const index = new Array(26).fill(0)
  for (let i = 0; i < order.length; ++i)
    index[getChIndex(order[i])] = i

  for (let i = 1; i < words.length; i++) {
    let valid = false
    for (let j = 0; j < words[i - 1].length && j < words[i].length; j++) {
      const prev = index[getChIndex(words[i - 1][j])]
      const curr = index[getChIndex(words[i][j])]
      if (prev < curr) {
        valid = true
        break
      }

      if (prev > curr) return false
    }
    // 比较两个字符串的长度
    if (!valid && words[i - 1].length > words[i].length) return false
  }

  return true
}
