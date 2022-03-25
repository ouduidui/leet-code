# 实现 Trie (前缀树)

> 难度：中等
>
> https://leetcode-cn.com/problems/implement-trie-prefix-tree/

## 题目

`Trie`（发音类似 "try"）或者说 **前缀树** 是一种树形数据结构，用于高效地存储和检
索字符串数据集中的键。这一数据结构有相当多的应用情景，例如自动补完和拼写检查。

请你实现 `Trie` 类：

- `Trie()` 初始化前缀树对象。
- `void insert(String word)` 向前缀树中插入字符串 `word` 。
- `boolean search(String word)` 如果字符串 `word` 在前缀树中，返回 `true`（即，
  在检索之前已经插入）；否则，返回 `false` 。
- `boolean startsWith(String prefix)` 如果之前已经插入的字符串  `word` 的前缀之
  一为 `prefix` ，返回 `true` ；否则，返回 `false` 。

### 示例：

```
输入
["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
[[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
输出
[null, null, true, false, true, null, true]

解释
Trie trie = new Trie();
trie.insert("apple");
trie.search("apple");   // 返回 True
trie.search("app");     // 返回 False
trie.startsWith("app"); // 返回 True
trie.insert("app");
trie.search("app");     // 返回 True
```

## 解题

```typescript
export class Trie {
  isEnd = false;
  children: (Trie | null)[] = new Array(26).fill(null);

  insert(word: string): void {
    let node: Trie = this;
    // 构建字典树
    for (let i = 0; i < word.length; i++) {
      const ch = word.charAt(i);
      const index = ch.charCodeAt(0) - 'a'.charCodeAt(0);
      if (node.children[index] === null) {
        node.children[index] = new Trie();
      }
      node = node.children[index]!;
    }
    node.isEnd = true;
  }

  search(word: string): boolean {
    const node = this._searchPrefix(word);
    return node === null ? this.isEnd : node.isEnd;
  }

  startsWith(prefix: string): boolean {
    return this._searchPrefix(prefix) !== null;
  }

  private _searchPrefix(prefix: string): Trie | null {
    let node: Trie = this;
    // 遍历字典树
    for (let i = 0; i < prefix.length; i++) {
      const ch = prefix.charAt(i);
      const index = ch.charCodeAt(0) - 'a'.charCodeAt(0);
      if (node.children[index] === null) {
        return null;
      }
      node = node.children[index]!;
    }
    return node;
  }
}
```
