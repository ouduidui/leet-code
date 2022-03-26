/**
 * 回溯 + 记忆化搜索
 * @param s
 * @param wordDict
 */
export function wordBreak(s: string, wordDict: string[]): string[] {
  const wordBreaks = backtrack(
    s,
    s.length,
    new Set(wordDict),
    0,
    new Map<number, string[][]>(),
  )
  return wordBreaks.map(wordBreak => wordBreak.join(' '))

  /**
   * 回溯
   * @param s 字串
   * @param len 字串长度
   * @param wordSet 字典
   * @param index 还未识别的字符开头下标
   * @param map 存储之前识别过的数据，如果遇到相同的index，直接获取之前的数据
   */
  function backtrack(
    s: string,
    len: number,
    wordSet: Set<string>,
    index: number,
    map: Map<number, string[][]>,
  ): string[][] {
    // 如果遇到相同的index，直接获取之前的数据
    if (map.has(index))
      return map.get(index)!

    const wordBreaks: string[][] = []

    if (index === len) {
      // 如果所有字符串已经识别结束了，插入空数组
      wordBreaks.push([])
    }
    else {
      // 从index + 1开始遍历
      for (let i = index + 1; i <= len; i++) {
        // 获取 index -> i 的子串
        const word = s.substring(index, i)
        // 判断该子串是否在字典里
        if (wordSet.has(word)) {
          // 使用回溯继续获取后面的数据
          const nextWordBreaks = backtrack(s, len, wordSet, i, map)
          for (const nextWordBreak of nextWordBreaks)
            wordBreaks.push([word, ...nextWordBreak])
        }
      }
    }

    map.set(index, wordBreaks)
    return wordBreaks
  }
}
