# 验证外星语词典

> 难度：简单
>
> https://leetcode.cn/problems/verifying-an-alien-dictionary/

## 题目

某种外星语也使用英文小写字母，但可能顺序 `order` 不同。字母表的顺序（`order`）是一些小写字母的排列。

给定一组用外星语书写的单词 `words`，以及其字母表的顺序 `order`，只有当给定的单词在这种外星语中按字典序排列时，返回 `true`；否则，返回 `false`。

### 示例

#### 示例 1：

```
输入：words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
输出：true
解释：在该语言的字母表中，'h' 位于 'l' 之前，所以单词序列是按字典序排列的。
```

#### 示例 2：

```
输入：words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
输出：false
解释：在该语言的字母表中，'d' 位于 'l' 之后，那么 words[0] > words[1]，因此单词序列不是按字典序排列的。
```

#### 示例 3：

```
输入：words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
输出：false
解释：当前三个字符 "app" 匹配时，第二个字符串相对短一些，然后根据词典编纂规则 "apple" > "app"，因为 'l' > '∅'，其中 '∅' 是空白字符，定义为比任何其他字符都小。
```

（[更多信息](https://baike.baidu.com/item/%E5%AD%97%E5%85%B8%E5%BA%8F)）

## 解题

```ts 
/**
 * 直接遍历
 * @desc 时间复杂度 O(MN)  空间复杂度 O(C)
 * @param words
 * @param order
 * @returns
 */
export function isAlienSorted(words: string[], order: string): boolean {
  const getChIndex = (ch: string): number => ch.charCodeAt(0) - 'a'.charCodeAt(0)

  const index = new Array(26).fill(0)
  for (let i = 0; i < order.length; ++i)
    index[getChIndex(order[i])] = i

  for (let i = 1; i < words.length; i++) {
    let valid = false
    for (let j = 0; j < words[i - 1].length && j < words[i].length; j++) {
      const prev = index[getChIndex(words[i - 1][j])]
      const curr = index[getChIndex(words[i][j])]
      if (prev < curr) {
        valid = true
        break
      }

      if (prev > curr) return false
    }
    // 比较两个字符串的长度
    if (!valid && words[i - 1].length > words[i].length) return false
  }

  return true
}
```