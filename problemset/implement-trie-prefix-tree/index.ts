export class Trie {
  isEnd = false
  children: (Trie | null)[] = new Array(26).fill(null)

  insert(word: string): void {
    let node: Trie = this
    // 构建字典树
    for (let i = 0; i < word.length; i++) {
      const ch = word.charAt(i)
      const index = ch.charCodeAt(0) - 'a'.charCodeAt(0)
      if (node.children[index] === null)
        node.children[index] = new Trie()

      node = node.children[index]!
    }
    node.isEnd = true
  }

  search(word: string): boolean {
    const node = this._searchPrefix(word)
    return node === null ? this.isEnd : node.isEnd
  }

  startsWith(prefix: string): boolean {
    return this._searchPrefix(prefix) !== null
  }

  private _searchPrefix(prefix: string): Trie | null {
    let node: Trie = this
    // 遍历字典树
    for (let i = 0; i < prefix.length; i++) {
      const ch = prefix.charAt(i)
      const index = ch.charCodeAt(0) - 'a'.charCodeAt(0)
      if (node.children[index] === null)
        return null

      node = node.children[index]!
    }
    return node
  }
}
