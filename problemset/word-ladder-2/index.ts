/**
 * 广度优先搜索
 * @param beginWord
 * @param endWord
 * @param wordList
 */
export function findLadders(
  beginWord: string,
  endWord: string,
  wordList: string[],
): string[][] {
  const wordSet = new Set<string>(wordList)
  // 如果没有终点词，直接返回
  if (!wordSet.has(endWord)) return []

  // 增加起点词
  wordSet.add(beginWord)

  // 存放图中的单词所在的层
  // beginWord的level为0，以此叠加
  const levelMap = new Map<string, number>()
  // 存放图中的单词的邻接单词
  const wordMap = new Map<string, string[]>()
  // 记录访问过的节点
  const visited = new Set<string>()
  visited.add(beginWord)

  // 维护一个队列，初始放入起点词
  const queue = [beginWord]

  // 是否存在变化到终点词的路径
  let finished = false
  // 起始词的level为0
  let level = 0
  levelMap.set(beginWord, 0)

  while (queue.length && !finished) {
    // 当前level的单词长度
    const levelSize = queue.length
    // 遍历当前层的单词，level+1
    level++

    // 遍历单词的所有字符
    for (let i = 0; i < levelSize; i++) {
      const word = queue.shift()!

      // 遍历26个字母字符
      for (let j = 0; j < word.length; j++) {
        for (let k = 97; k <= 122; k++) {
          // 拼接单词
          const newWord
            = word.slice(0, j) + String.fromCharCode(k) + word.slice(j + 1)
          // 不是单词表中的单词就忽略
          if (!wordSet.has(newWord)) continue

          // 存入 wordMap
          if (wordMap.has(newWord)) wordMap.get(newWord)!.push(word)
          else wordMap.set(newWord, [word])

          // 该新单词已经访问过就忽略
          if (visited.has(newWord)) continue
          // 遇到了终点词
          if (newWord === endWord) finished = true

          // 记录这个单词的level
          levelMap.set(newWord, level)
          // 该新单词是下一层的，入列
          queue.push(newWord)
          // 入列即访问，记录一下
          visited.add(newWord)
        }
      }
    }
  }

  // 无法到达终点词，返回[]
  if (!finished) return []

  const res: string[][] = []
  dfs([], beginWord, endWord)
  return res

  /**
   * 回溯 从结束词往前查找开始词
   * @param path
   * @param beginWord
   * @param word
   */
  function dfs(path: string[], beginWord: string, word: string) {
    // 当前遍历的word，和起始词相同
    if (word === beginWord) {
      // 将当前路径推入res数组，加上起始词
      res.push([beginWord, ...path])
      return
    }

    // 将当前单词加入到path数组的开头
    path.unshift(word)
    // 当前单词有对应的“父单词”们
    if (wordMap.has(word)) {
      // 遍历“父单词”们
      for (const parent of wordMap.get(word)!) {
        if (levelMap.get(parent)! + 1 === levelMap.get(word)) {
          // 满足要求的递归dfs
          dfs(path, beginWord, parent)
        }
      }
    }
    // 回溯，撤销选择，将path数组开头的单词弹出
    path.shift()
  }
}
