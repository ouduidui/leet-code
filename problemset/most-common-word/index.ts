/**
 * 哈希表 + 计数
 * @desc 时间复杂度 O(M+N)  空间复杂度 O(M)
 * @param paragraph
 * @param banned
 * @returns
 */
export function mostCommonWord(paragraph: string, banned: string[]): string {
  const map = new Map<string, number>()
  const isLetter = (ch: string) => (ch <= 'z' && ch >= 'a') || (ch <= 'Z' && ch >= 'A')
  let i = 0
  const len = paragraph.length
  while (i < len) {
    let word = ''
    while (!isLetter(paragraph[i]) && i < len) i++
    while (isLetter(paragraph[i])) word += paragraph[i++]

    if (word) {
      word = word.toLowerCase()
      map.set(word, (map.get(word) || 0) + 1)
    }
  }

  for (const ban of banned) map.delete(ban)

  let result = ''
  let maxCount = 0
  map.forEach((value, key) => {
    if (value > maxCount) {
      maxCount = value
      result = key
    }
  })

  return result
}
