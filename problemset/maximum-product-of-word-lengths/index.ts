/**
 * 位运算
 * @desc 时间复杂度 O(L+N²)  空间复杂度 O(N)
 * @param words
 * @returns
 */
export function maxProduct(words: string[]): number {
  const len = words.length

  const masks = new Array<number>(len).fill(0)
  // 生成每个单词的位掩码
  for (let i = 0; i < len; i++) {
    const word = words[i]
    const l = word.length
    for (let j = 0; j < l; j++)
      masks[i] |= 1 << (word[j].charCodeAt(0) - 'a'.charCodeAt(0))
  }

  let maxProd = 0
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if ((masks[i] & masks[j]) === 0)
        maxProd = Math.max(maxProd, words[i].length * words[j].length)
    }
  }
  return maxProd
}
