/**
 * 哈希集合
 * @desc 时间复杂度 O(N + M)  空间复杂度 O(M + M)
 * @param dictionary
 * @param sentence
 * @returns
 */
export function replaceWords(dictionary: string[], sentence: string): string {
  const set = new Set<string>()
  for (const root of dictionary) set.add(root)

  const words = sentence.split(' ')
  for (let i = 0; i < words.length; i++) {
    const word = words[i]
    for (let j = 0; j < words.length; j++) {
      if (set.has(word.substring(0, 1 + j))) {
        words[i] = word.substring(0, 1 + j)
        break
      }
    }
  }

  return words.join(' ')
}
