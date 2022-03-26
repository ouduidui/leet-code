/**
 * 广度优先搜索
 * @param beginWord
 * @param endWord
 * @param wordList
 */
export function ladderLength(
  beginWord: string,
  endWord: string,
  wordList: string[],
): number {
  const wordSet = new Set(wordList)
  const queue: [string, number][] = []
  queue.push([beginWord, 1])

  while (queue.length) {
    const [word, level] = queue.shift()! // 当前出列的单词
    if (word === endWord)
      return level

    for (let i = 0; i < word.length; i++) {
      // 遍历当前单词的所有字符
      for (let c = 97; c <= 122; c++) {
        // 对应26个字母
        const newWord
          = word.slice(0, i) + String.fromCharCode(c) + word.slice(i + 1) // 形成新词
        if (wordSet.has(newWord)) {
          // 单词表里有这个新词
          queue.push([newWord, level + 1]) // 作为下一层的词入列
          wordSet.delete(newWord) // 避免该词重复入列
        }
      }
    }
  }
  return 0 // bfs结束，始终没有遇到终点
}
