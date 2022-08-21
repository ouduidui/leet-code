/**
 * 双指针
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param sentence
 * @param searchWord
 * @returns
 */
export function isPrefixOfWord(sentence: string, searchWord: string): number {
  const n = sentence.length; let index = 1; let start = 0; let end = 0
  while (start < n) {
    while (end < n && sentence[end] !== ' ')
      end++

    if (isPrefix(start, end))
      return index

    index++
    end++
    start = end
  }
  return -1

  function isPrefix(start: number, end: number): boolean {
    for (let i = 0; i < searchWord.length; i++) {
      if (start + i >= end || sentence[start + i] !== searchWord[i])
        return false
    }
    return true
  }
}
