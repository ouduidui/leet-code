# 单词搜索 II

> 难度：困难
>
> https://leetcode-cn.com/problems/word-search-ii/

## 题目

给定一个 `m x n` 二维字符网格 `board` 和一个单词（字符串）列表 `words`， 返回所有二维网格上的单词 。

单词必须按照字母顺序，通过 **相邻的单元格** 内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母在一个单词中不允许被重复使用。


### 示例

#### 示例 1：

![word-search-ii-1](https://user-images.githubusercontent.com/54696834/160314865-20599dcc-4a5d-4ba9-ad06-ea57668ae14d.jpg)

```
输入：board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]
输出：["eat","oath"]
```

#### 示例 2：

![word-search-ii-2](https://user-images.githubusercontent.com/54696834/160314899-a0ff941f-83d8-427e-8658-65cd7772f4f2.jpg)

```
输入：board = [["a","b"],["c","d"]], words = ["abcb"]
输出：[]
```

## 解题

```ts
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
```