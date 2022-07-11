/**
 * 枚举每个字典中的字符串并判断
 * @desc 时间复杂度 O(qnl)  空间复杂度 O(nl)
 * @desc 其中n是dictionary 的长度，l是dictionary中字符串的平均长度，q是函数search(searchWord)的调用次数
 */
export class MagicDictionary {
  words: string[] = []

  buildDict(dictionary: string[]): void {
    this.words = dictionary
  }

  search(searchWord: string): boolean {
    for (const word of this.words) {
      if (word.length !== searchWord.length) continue
      let diff = 0

      for (let i = 0; i < word.length; i++) {
        if (word[i] !== searchWord[i]) {
          diff++
          if (diff > 1) break
        }
      }
      if (diff === 1) return true
    }
    return false
  }
}

/**
 * 使用字典树优化枚举
 * @desc 时间复杂度 O(nl+ql∣Σ∣)  空间复杂度 O(nl)
 * @desc 其中n是dictionary 的长度，l是dictionary中字符串的平均长度，q是函数search(searchWord)的调用次数，Σ 是字符集
 */
export class MagicDictionary2 {
  root = new Trie()

  buildDict(dictionary: string[]): void {
    for (const word of dictionary) {
      let cur: Trie = this.root
      for (let i = 0; i < word.length; i++) {
        const ch = word[i]
        const idx = ch.charCodeAt(0) - 'a'.charCodeAt(0)
        if (!cur.child[idx]) cur!.child[idx] = new Trie()
        cur = cur.child[idx] as Trie
      }
      cur.isFinished = true
    }
  }

  search(searchWord: string): boolean {
    return this._dfs(searchWord)
  }

  private _dfs(searchWord: string, node: Trie = this.root, pos = 0, modified = false): boolean {
    if (pos === searchWord.length) return modified && node.isFinished

    const idx = searchWord[pos].charCodeAt(0) - 'a'.charCodeAt(0)
    if (node.child[idx] && this._dfs(searchWord, node.child[idx]!, pos + 1, modified)) return true

    if (!modified) {
      for (let i = 0; i < 26; i++) {
        if (i !== idx && node.child[i]) {
          if (this._dfs(searchWord, node.child[i]!, pos + 1, true))
            return true
        }
      }
    }

    return false
  }
}

class Trie {
  isFinished = false
  child: (Trie | null)[] = new Array(26).fill(null)
}
