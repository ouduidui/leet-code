/**
 * 哈希表
 * @desc 时间复杂度 O(N) 字符串长度  空间复杂度 O(N)
 * @param s1 {string}
 * @param s2 {string}
 * @return {string[]}
 */
export function uncommonFromSentences(s1: string, s2: string): string[] {
  // 新建哈希表
  const wordMap = new Map<string, number>()
  // 合并字符串
  const s = `${s1} ${s2}`

  let i = 0
  const len = s.length

  // 遍历字符串，统计单词出现次数
  while (i < len) {
    let word = ''
    while (s[i] === ' ' && i < len)
      i++

    while (s[i] !== ' ' && i < len)
      word += s[i++]

    if (word) {
      const count = wordMap.has(word) ? wordMap.get(word)! : 0
      wordMap.set(word, count + 1)
    }
  }

  // 找出只出现一次的单词
  const res: string[] = []
  wordMap.forEach((value, key) => {
    if (value === 1)
      res.push(key)
  })

  return res
}
