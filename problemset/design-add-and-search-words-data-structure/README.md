# 添加与搜索单词 - 数据结构设计

> 难度：中等
>
> https://leetcode-cn.com/problems/design-add-and-search-words-data-structure/

## 题目

请你设计一个数据结构，支持 **添加新单词** 和 **查找字符串是否与任何先前添加的字符串匹配** 。

实现词典类 `WordDictionary` ：

- `WordDictionary() `初始化词典对象
- `void addWord(word)` 将 `word` 添加到数据结构中，之后可以对它进行匹配
- `bool search(word)` 如果数据结构中存在字符串与 `word` 匹配，则返回 `true` ；否则，返回  `false` 。`word` 中可能包含一些 `'.'` ，每个 `.` 都可以表示任何一个字母。
 

### 示例：

``` 
输入：
["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
[[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
输出：
[null,null,null,null,false,true,true,true]

解释：
WordDictionary wordDictionary = new WordDictionary();
wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");
wordDictionary.search("pad"); // 返回 False
wordDictionary.search("bad"); // 返回 True
wordDictionary.search(".ad"); // 返回 True
wordDictionary.search("b.."); // 返回 True
```

## 解题

```ts
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
```