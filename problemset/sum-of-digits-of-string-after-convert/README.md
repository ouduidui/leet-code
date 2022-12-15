# 字符串转化后的各位数字之和

> 难度：简单
>
> https://leetcode.cn/problems/sum-of-digits-of-string-after-convert/

## 题目给你一个由小写字母组成的字符串 s ，以及一个整数 k 。

首先，用字母在字母表中的位置替换该字母，将 `s` 转化 为一个整数（也就是，'a' 用 1 替换，'b' 用 2 替换，... 'z' 用 26 替换）。接着，将整数 转换 为其 各位数字之和 。共重复 **转换** 操作 `k` 次 。

例如，如果 `s = "zbax"` 且 `k = 2` ，那么执行下述步骤后得到的结果是整数 `8` ：

- 转化：`"zbax" ➝ "(26)(2)(1)(24)" ➝ "262124" ➝ 262124`
- 转换 `#1：262124 ➝ 2 + 6 + 2 + 1 + 2 + 4 ➝ 17`
- 转换 `#2：17 ➝ 1 + 7 ➝ 8`

返回执行上述操作后得到的结果整数。

### 示例

#### 示例 1：

```
输入：s = "iiii", k = 1
输出：36
解释：操作如下：
- 转化："iiii" ➝ "(9)(9)(9)(9)" ➝ "9999" ➝ 9999
- 转换 #1：9999 ➝ 9 + 9 + 9 + 9 ➝ 36
因此，结果整数为 36 。
```

#### 示例 2：

```
输入：s = "leetcode", k = 2
输出：6
解释：操作如下：
- 转化："leetcode" ➝ "(12)(5)(5)(20)(3)(15)(4)(5)" ➝ "12552031545" ➝ 12552031545
- 转换 #1：12552031545 ➝ 1 + 2 + 5 + 5 + 2 + 0 + 3 + 1 + 5 + 4 + 5 ➝ 33
- 转换 #2：33 ➝ 3 + 3 ➝ 6
因此，结果整数为 6 。
```

## 解题

```ts 
/**
 * 模拟
 * @desc 时间复杂度 O(N) 空间复杂度 O(N)
 * @param s
 * @param k
 * @returns
 */
export function getLucky(s: string, k: number): number {
  let sb = ''
  for (let i = 0; i < s.length; ++i) {
    const ch = s[i]
    sb += `${ch.charCodeAt(0) - 'a'.charCodeAt(0) + 1}`
  }
  let digits = sb.toString()
  for (let i = 1; i <= k && digits.length > 1; ++i) {
    let sum = 0
    for (let j = 0; j < digits.length; ++j) {
      const ch = digits[j]
      sum += ch.charCodeAt(0) - '0'.charCodeAt(0)
    }
    digits = `${sum}`
  }

  return Number(digits)
}
```