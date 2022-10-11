# 仅执行一次字符串交换能否使两个字符串相等

> 难度：简单
>
> https://leetcode.cn/problems/check-if-one-string-swap-can-make-strings-equal/

## 题目

给你长度相等的两个字符串 `s1` 和 `s2` 。一次 **字符串交换** 操作的步骤如下：选出某个字符串中的两个下标（不必不同），并交换这两个下标所对应的字符。

如果对 **其中一个字符串** 执行 **最多一次字符串交换 **就可以使两个字符串相等，返回 `true` ；否则，返回 `false` 。

### 示例

#### 示例 1：

```
输入：s1 = "bank", s2 = "kanb"
输出：true
解释：例如，交换 s2 中的第一个和最后一个字符可以得到 "bank"
```

#### 示例 2：

```
输入：s1 = "attack", s2 = "defend"
输出：false
解释：一次字符串交换无法使两个字符串相等
```

#### 示例 3：

```
输入：s1 = "kelb", s2 = "kelb"
输出：true
解释：两个字符串已经相等，所以不需要进行字符串交换
```

#### 示例 4：

```
输入：s1 = "abcd", s2 = "dcba"
输出：false
```

## 解题

```ts 
/**
 * 计数统计
 * @desc 时间复杂度 O(N)  空间复杂度 O(C)
 * @param s1
 * @param s2
 * @returns
 */
export function areAlmostEqual(s1: string, s2: string): boolean {
  if (s1 === s2) return true
  const len = s1.length
  const diff: number[] = []
  for (let i = 0; i < len; i++) {
    if (s1[i] !== s2[i]) {
      if (diff.length >= 2)
        return false
      diff.push(i)
    }
  }
  if (diff.length === 0)
    return true

  if (diff.length !== 2)
    return false

  return s1[diff[0]] === s2[diff[1]] && s1[diff[1]] === s2[diff[0]]
}
```