# 实现一个魔法字典

> 难度：中等
>
> https://leetcode.cn/problems/implement-magic-dictionary/

## 题目

设计一个使用单词列表进行初始化的数据结构，单词列表中的单词 **互不相同** 。 如果给出一个单词，请判定能否只将这个单词中一个字母换成另一个字母，使得所形成的新单词存在于你构建的字典中。

实现 `MagicDictionary` 类：

- `MagicDictionary()` 初始化对象
- `void buildDict(String[] dictionary)` `使用字符串数组 dictionary` `设定该数据结构，dictionary` 中的字符串互不相同
- `bool search(String searchWord)` 给定一个字符串 `searchWord` ，判定能否只将字符串中 **一个** 字母换成另一个字母，使得所形成的新字符串能够与字典中的任一字符串匹配。如果可以，返回 `true` ；否则，返回 `false` 。
 

### 示例：

```
输入
["MagicDictionary", "buildDict", "search", "search", "search", "search"]
[[], [["hello", "leetcode"]], ["hello"], ["hhllo"], ["hell"], ["leetcoded"]]
输出
[null, null, false, true, false, false]

解释
MagicDictionary magicDictionary = new MagicDictionary();
magicDictionary.buildDict(["hello", "leetcode"]);
magicDictionary.search("hello"); // 返回 False
magicDictionary.search("hhllo"); // 将第二个 'h' 替换为 'e' 可以匹配 "hello" ，所以返回 True
magicDictionary.search("hell"); // 返回 False
magicDictionary.search("leetcoded"); // 返回 False
```

## 解题

### 枚举每个字典中的字符串并判断

```ts
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
```

### 使用字典树优化枚举

```ts
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
```