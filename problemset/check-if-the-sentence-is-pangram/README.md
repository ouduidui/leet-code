# 判断句子是否为全字母句

> 难度：简单
>
> https://leetcode-cn.com/problems/check-if-the-sentence-is-pangram/

## 题目

**全字母句** 指包含英语字母表中每个字母至少一次的句子。

给你一个仅由小写英文字母组成的字符串 `sentence` `，请你判断 sentence` 是否为 **全字母句** 。

如果是，返回 `true` ；否则，返回 `false` 。

### 示例  

#### 示例 1：

```
输入：sentence = "thequickbrownfoxjumpsoverthelazydog"
输出：true
解释：sentence 包含英语字母表中每个字母至少一次。
```

#### 示例 2：

```
输入：sentence = "leetcode"
输出：false
```

## 解题

```ts
/**
 * 哈希表
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param sentence
 * @returns
 */
export function checkIfPangram(sentence: string): boolean {
  return new Set<string>(sentence.split('')).size === 26
}
```