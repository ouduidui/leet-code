# 字符串中不同整数的数目

> 难度：简单
>
> https://leetcode.cn/problems/number-of-different-integers-in-a-string/

## 题目

给你一个字符串 `word` ，该字符串由数字和小写英文字母组成。

请你用空格替换每个不是数字的字符。例如，"a123bc34d8ef34" 将会变成 " 123  34 8  34" 。注意，剩下的这些整数为（相邻彼此至少有一个空格隔开）："123"、"34"、"8" 和 "34" 。

返回对 `word` 完成替换后形成的 **不同** 整数的数目。

只有当两个整数的 **不含前导零** 的十进制表示不同， 才认为这两个整数也不同。

### 示例

#### 示例 1：

```
输入：word = "a123bc34d8ef34"
输出：3
解释：不同的整数有 "123"、"34" 和 "8" 。注意，"34" 只计数一次。
```

#### 示例 2：

```
输入：word = "leet1234code234"
输出：2
```

#### 示例 3：

```
输入：word = "a1b01c001"
输出：1
解释："1"、"01" 和 "001" 视为同一个整数的十进制表示，因为在比较十进制值时会忽略前导零的存在。
```

## 解题

```ts 
/**
 * 双指针
 * @desc 时间复杂度 O(N) 空间复杂度 O(N)
 * @param word
 * @returns
 */
export function numDifferentIntegers(word: string): number {
  const isDigit = (ch: string) => ch >= '0' && ch <= '9'

  const set = new Set()
  const n = word.length; let p1 = 0; let p2
  while (true) {
    while (p1 < n && !isDigit(word[p1]))
      p1++
    if (p1 === n)
      break

    p2 = p1
    while (p2 < n && isDigit(word[p2]))
      p2++

    while (p2 - p1 > 1 && word[p1] === '0')
      p1++

    set.add(word.slice(p1, p2))
    p1 = p2
  }
  return set.size
}
```