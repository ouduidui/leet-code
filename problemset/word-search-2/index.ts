/**
 * 回溯 + 字典树 + 删除被匹配的单词
 * @desc 时间复杂度 O(MN*3^(l-1))   空间复杂度 O(kl)
 * @param board
 * @param words
 * @returns
 */
export function findWords(board: string[][], words: string[]): string[] {
  const trie = new Trie()
  for (const word of words) trie.insert(word)
  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]]

  const ans: string[] = []
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++)
      dfs(board, trie, i, j, ans)
  }

  return ans

  function dfs(board: string[][], trie: Trie, i: number, j: number, ans: string[]) {
    const letter = board[i][j]
    if (letter === '#') return
    const index = Trie.getLetterIndex(letter)
    if (trie.children[index] === null) return

    const next = trie.children[index]!
    if (next.word !== '') {
      ans.push(next.word)
      // 删除被匹配的单词
      next.word = ''
    }

    if (!next.isEmpty) {
      board[i][j] = '#'
      for (const dir of dirs) {
        const i2 = i + dir[0]
        const j2 = j + dir[1]
        if (i2 >= 0 && i2 < board.length && j2 >= 0 && j2 < board[0].length)
          dfs(board, next, i2, j2, ans)
      }
      board[i][j] = letter
    }

    if (next.isEmpty)
      trie.children[index] = null
  }
}

class Trie {
  children = new Array<Trie | null>(26).fill(null)
  word = ''

  insert(word: string) {
    let node: Trie = this

    for (const letter of word) {
      const index = Trie.getLetterIndex(letter)
      if (node.children[index] === null) node.children[index] = new Trie()
      node = node.children[index]!
    }
    node.word = word
  }

  get isEmpty() {
    return this.children.every(i => i === null)
  }

  static getLetterIndex(letter: string): number {
    return letter.charCodeAt(0) - 'a'.charCodeAt(0)
  }
}
