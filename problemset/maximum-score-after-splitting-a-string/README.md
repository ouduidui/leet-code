# 分割字符串的最大得分

> 难度：简单
>
> https://leetcode.cn/problems/maximum-score-after-splitting-a-string/

## 题目

给你一个由若干 `0` 和 `1` 组成的字符串 `s` ，请你计算并返回将该字符串分割成两个 **非空** 子字符串（即 **左** 子字符串和 **右** 子字符串）所能获得的最大得分。

「分割字符串的得分」为 **左** 子字符串中 `0` 的数量加上 **右** 子字符串中 `1` 的数量。

### 示例

#### 示例 1：

```
输入：s = "011101"
输出：5 
解释：
将字符串 s 划分为两个非空子字符串的可行方案有：
左子字符串 = "0" 且 右子字符串 = "11101"，得分 = 1 + 4 = 5 
左子字符串 = "01" 且 右子字符串 = "1101"，得分 = 1 + 3 = 4 
左子字符串 = "011" 且 右子字符串 = "101"，得分 = 1 + 2 = 3 
左子字符串 = "0111" 且 右子字符串 = "01"，得分 = 1 + 1 = 2 
左子字符串 = "01110" 且 右子字符串 = "1"，得分 = 2 + 1 = 3
```

#### 示例 2：

```
输入：s = "00111"
输出：5
解释：当 左子字符串 = "00" 且 右子字符串 = "111" 时，我们得到最大得分 = 2 + 3 = 5
```

#### 示例 3：

```
输入：s = "1111"
输出：3
```

## 解题

### 枚举每个分割点

```ts 
/**
 * 枚举每个分割点
 * @desc 时间复杂度 O(N²) 空间复杂度 O(1)
 * @param s
 * @returns
 */
export function maxScore(s: string): number {
  let ans = 0
  const n = s.length
  for (let i = 1; i < n; i++) {
    let score = 0
    for (let j = 0; j < i; j++) {
      if (s[j] === '0')
        score++
    }
    for (let j = i; j < n; j++) {
      if (s[j] === '1')
        score++
    }
    ans = Math.max(ans, score)
  }
  return ans
}
```

### 两次遍历

```ts 
/**
 * 两次遍历
 * @desc 时间复杂度 O(N) 空间复杂度 O(1)
 * @param s
 * @returns
 */
export function maxScore2(s: string): number {
  let score = 0
  const n = s.length
  if (s[0] === '0')
    score++

  for (let i = 1; i < n; i++) {
    if (s[i] === '1')
      score++
  }
  let ans = score
  for (let i = 1; i < n - 1; i++) {
    if (s[i] === '0')
      score++

    else
      score--

    ans = Math.max(ans, score)
  }
  return ans
}
```