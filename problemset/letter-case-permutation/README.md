# 字母大小写全排列

> 难度：中等
>
> https://leetcode.cn/problems/letter-case-permutation/

## 题目

给定一个字符串 `s` ，通过将字符串 `s` 中的每个字母转变大小写，我们可以获得一个新的字符串。

**返回** 所有可能得到的字符串集合 。以 **任意顺序** 返回输出。

### 示例

#### 示例 1：

```
输入：s = "a1b2"
输出：["a1b2", "a1B2", "A1b2", "A1B2"]
```

#### 示例 2:

```
输入: s = "3z4"
输出: ["3z4","3Z4"]
```

## 解题

### 广度优先搜索

```ts 
/**
 * 广度优先搜索
 * @desc 时间复杂度 O(n*2^n) 空间复杂度 O(n*2^n)
 * @param s
 * @returns
 */
export function letterCasePermutation(s: string): string[] {
  const ans: string[] = []
  const q = ['']
  const swapCase = (ch: string) => {
    if (ch >= 'a' && ch <= 'z')
      return ch.toUpperCase()

    if (ch >= 'A' && ch <= 'Z')
      return ch.toLowerCase()
  }

  const isLetter = (ch: string) => ((ch >= 'a') && (ch <= 'z')) || ((ch >= 'A') && (ch <= 'Z'))

  while (q.length !== 0) {
    const cur = q[0]
    const pos = cur.length
    if (pos === s.length) {
      ans.push(cur)
      q.shift()
    }
    else {
      if (isLetter(s[pos]))
        q.push(cur + swapCase(s[pos]))

      q[0] += s[pos]
    }
  }

  return ans
}
```

### 回溯

```ts 
/**
 * 回溯
 * @desc 时间复杂度 O(n*2^n) 空间复杂度 O(n*2^n)
 * @param s
 * @returns
 */
export function letterCasePermutation2(s: string): string[] {
  const ans: string[] = []
  const isDigit = (ch: string) => parseFloat(ch).toString() !== 'NaN'

  const dfs = (arr: string[], pos: number, res: string[]) => {
    while (pos < arr.length && isDigit(arr[pos]))
      pos++

    if (pos === arr.length) {
      res.push(arr.join(''))
      return
    }
    arr[pos] = String.fromCharCode(arr[pos].charCodeAt(0) ^ 32)
    dfs(arr, pos + 1, res)
    arr[pos] = String.fromCharCode(arr[pos].charCodeAt(0) ^ 32)
    dfs(arr, pos + 1, res)
  }
  dfs([...s], 0, ans)
  return ans
}
```

### 二进制位图

```ts 
/**
 * 二进制位图
 * @desc 时间复杂度 O(n*2^n) 空间复杂度 O(1)
 * @param s
 * @returns
 */
export function letterCasePermutation3(s: string): string[] {
  const isLetter = (ch: string) => ((ch >= 'a') && (ch <= 'z')) || ((ch >= 'A') && (ch <= 'Z'))
  const n = s.length
  let m = 0
  for (let i = 0; i < n; i++) {
    if (isLetter(s[i]))
      m++
  }
  const ans = []
  for (let mask = 0; mask < (1 << m); mask++) {
    let sb = ''
    for (let j = 0, k = 0; j < n; j++) {
      if (isLetter(s[j]) && (mask & (1 << k++)) !== 0)
        sb += s[j].toUpperCase()

      else
        sb += s[j].toLowerCase()
    }
    ans.push(sb)
  }
  return ans
}
```