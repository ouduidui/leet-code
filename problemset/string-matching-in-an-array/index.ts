/**
 * 暴力枚举
 * @desc 时间复杂度 O(N²)  空间复杂度 O(1)
 * @param words
 * @returns
 */
export function stringMatching(words: string[]): string[] {
  const ret = []
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (i !== j && words[j].search(words[i]) !== -1) {
        ret.push(words[i])
        break
      }
    }
  }
  return ret
}
