# 外星文字典

> 难度：困难
>
> https://leetcode.cn/problems/Jf1JuT/

## 题目

现有一种使用英语字母的外星文语言，这门语言的字母顺序与英语顺序不同。

给定一个字符串列表 `words` ，作为这门语言的词典，`words` 中的字符串已经 **按这门新语言的字母顺序进行了排序** 。

请你根据该词典还原出此语言中已知的字母顺序，并 **按字母递增顺序** 排列。若不存在合法字母顺序，返回 "" 。若存在多种可能的合法字母顺序，返回其中 **任意一种** 顺序即可。

字符串 `s` 字典顺序小于字符串 `t` 有两种情况：

- 在第一个不同字母处，如果 `s` 中的字母在这门外星语言的字母顺序中位于 `t` 中字母之前，那么 `s` 的字典顺序小于 `t` 。
- 如果前面 `min(s.length, t.length)` 字母都相同，那么 `s.length < t.length` 时，`s` 的字典顺序也小于 `t` 。
 
### 示例

#### 示例 1：

```
输入：words = ["wrt","wrf","er","ett","rftt"]
输出："wertf"
```

#### 示例 2：

```
输入：words = ["z","x"]
输出："zx"
```

#### 示例 3：

```
输入：words = ["z","x","z"]
输出：""
解释：不存在合法字母顺序，因此返回 "" 。
```

## 解题

### 拓扑排序 + 深度优先搜索

```ts 
/**
 * 拓扑排序 + 深度优先搜索
 * @desc 时间复杂度 O(NL)  空间复杂度 O(L)
 * @param words
 * @returns
 */
export function alienOrder(words: string[]): string {
  enum STATE {
    VISITING,
    VISITED,
  }

  let valid = true
  const edges = new Map<string, string[]>()
  const states = new Map<string, STATE>()
  const len = words.length
  for (const word of words) {
    const wordlen = word.length
    for (let j = 0; j < wordlen; j++) {
      const c = word[j]
      if (!edges.has(c))
        edges.set(c, [])
    }
  }

  for (let i = 1; i < len && valid; i++)
    addEdge(words[i - 1], words[i])

  const order: string[] = []
  let index = edges.size - 1
  const letterSet = edges.keys()
  for (const u of letterSet) {
    if (!states.has(u))
      dfs(u)
  }
  if (!valid) return ''

  return order.join('')

  function addEdge(before: string, after: string) {
    const len1 = before.length
    const len2 = after.length
    const len = Math.min(len1, len2)
    let i = 0
    while (i < len) {
      const c1 = before[i]
      const c2 = after[i]
      if (c1 !== c2) {
        edges.get(c1)?.push(c2)
        break
      }
      i++
    }
    if (i === len && len1 > len2)
      valid = false
  }

  function dfs(u: string) {
    states.set(u, STATE.VISITING)
    const adjacent = edges.get(u)!
    for (const v of adjacent) {
      if (!states.has(v)) {
        dfs(v)
        if (!valid) return
      }
      else if (states.get(v) === STATE.VISITING) {
        valid = false
        return
      }
    }
    states.set(u, STATE.VISITED)
    order[index] = u
    index--
  }
}
```

### 拓扑排序 + 广度优先搜索

```ts 
/**
 * 拓扑排序 + 广度优先搜索
 * @desc 时间复杂度 O(NL)  空间复杂度 O(L)
 * @param words
 * @returns
 */
export function alienOrder2(words: string[]): string {
  let valid = true
  const edges = new Map<string, string[]>()
  const indegrees = new Map<string, number>()
  const len = words.length
  for (const word of words) {
    const wordlen = word.length
    for (let j = 0; j < wordlen; j++) {
      const c = word[j]
      if (!edges.has(c))
        edges.set(c, [])
    }
  }

  for (let i = 1; i < len && valid; i++)
    addEdge(words[i - 1], words[i])

  if (!valid) return ''

  const queue: string[] = []
  const letterSet = edges.keys()
  for (const u of letterSet)
    if (!indegrees.has(u)) queue.push(u)

  const order: string[] = []
  while (queue.length) {
    const u = queue.shift()!
    order.push(u)
    const adjacent = edges.get(u)!
    for (const v of adjacent) {
      indegrees.set(v, indegrees.get(v)! - 1)
      if (indegrees.get(v) === 0) queue.push(v)
    }
  }

  return order.length === edges.size ? order.join('') : ''

  function addEdge(before: string, after: string) {
    const len1 = before.length
    const len2 = after.length
    const len = Math.min(len1, len2)
    let i = 0
    while (i < len) {
      const c1 = before[i]
      const c2 = after[i]
      if (c1 !== c2) {
        indegrees.set(c2, (indegrees.get(c2) || 0) + 1)
        edges.get(c1)?.push(c2)
        break
      }
      i++
    }
    if (i === len && len1 > len2)
      valid = false
  }
}
```