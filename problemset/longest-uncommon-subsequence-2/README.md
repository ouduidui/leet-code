# 最长特殊序列 II

> 难度：中等
>
> https://leetcode.cn/problems/longest-uncommon-subsequence-ii/

## 题目

给定字符串列表 `strs` ，返回其中 最长的特殊序列 。如果最长特殊序列不存在，返回` -1` 。

**特殊序列** 定义如下：该序列为某字符串** 独有的子序列（即不能是其他字符串的子序列）**。

 `s` 的 子序列可以通过删去字符串 `s` 中的某些字符实现。

- 例如，`"abc"` 是 `"aebdc"` 的子序列，因为您可以删除`"aebdc"`中的下划线字符来得到 `"abc" `。`"aebdc"`的子序列还包括`"aebdc"`、 `"aeb"` 和 `""` (空字符串)。
 
### 示例

#### 示例 1：

```
输入: strs = ["aba","cdc","eae"]
输出: 3
```

#### 示例 2:
```
输入: strs = ["aaa","aaa","aa"]
输出: -1
```

## 解题

```ts 
/**
 * 枚举每个字符串
 * @desc 时间复杂度 O(N²) 空间复杂度 O(1)
 * @param strs
 * @returns
 */
export function findLUSlength(strs: string[]): number {
  const len = strs.length
  let ans = -1
  for (let i = 0; i < len; i++) {
    let check = true
    for (let j = 0; j < len; j++) {
      if (i !== j && isSubseq(strs[i], strs[j])) {
        check = false
        break
      }
    }

    if (check)
      ans = Math.max(ans, strs[i].length)
  }

  return ans

  function isSubseq(s: string, t: string) {
    let ptS = 0
    let ptT = 0
    while (ptS < s.length && ptT < t.length) {
      if (s[ptS] === t[ptT]) ptS++

      ptT++
    }
    return ptS === s.length
  }
}
```