export class WordDictionary {
  isEnd = false
  root = new Tire()

  addWord(word: string): void {
    this.root.insert(word)
  }

  search(word: string): boolean {
    return this.root.search(word)
  }
}

class Tire {
  isEnd = false
  children = new Array<Tire | null>(26).fill(null)

  insert(word: string) {
    let node: Tire = this
    for (const letter of word) {
      const index = this.getLetterIndex(letter)
      if (!node.children[index]) node.children[index] = new Tire()
      node = node.children[index]!
    }
    node.isEnd = true
  }

  search(word: string): boolean {
    return this.searchPrefix(word, this)
  }

  private searchPrefix(word: string, node: Tire): boolean {
    if (word === '') return node.isEnd

    const letter = word.slice(0, 1)
    const subWord = word.slice(1)
    if (letter === '.') {
      for (const child of node.children) {
        if (child && this.searchPrefix(subWord, child!))
          return true
      }
      return false
    }
    else {
      const index = this.getLetterIndex(letter)
      if (node.children[index])
        return this.searchPrefix(subWord, node.children[index]!)
      else
        return false
    }
  }

  private getLetterIndex(letter: string) {
    return letter.charCodeAt(0) - 'a'.charCodeAt(0)
  }
}
