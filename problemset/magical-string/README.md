# 神奇字符串

> 难度：中等
>
> https://leetcode.cn/problems/magical-string/

## 题目

神奇字符串 `s` 仅由 '1' 和 '2' 组成，并需要遵守下面的规则：

- 神奇字符串 `s` 的神奇之处在于，串联字符串中 '1' 和 '2' 的连续出现次数可以生成该字符串。

`s` 的前几个元素是 `s = "1221121221221121122……"` 。如果将 s 中连续的若干 `1` 和 `2` 进行分组，可以得到 "1 22 11 2 1 22 1 22 11 2 11 22 ......" 。每组中 1 或者 2 的出现次数分别是 "1 2 2 1 1 2 1 2 2 1 2 2 ......" 。上面的出现次数正是 `s` 自身。

给你一个整数 `n` ，返回在神奇字符串` s` 的前 `n` 个数字中 1 的数目。

### 示例

#### 示例 1：

```
输入：n = 6
输出：3
解释：神奇字符串 s 的前 6 个元素是 “122112”，它包含三个 1，因此返回 3 。 
```

#### 示例 2：

```
输入：n = 1
输出：1
```

## 解题

```ts 
/**
 * 双指针
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param n
 * @returns
 */
export function magicalString(n: number): number {
  if (n < 4)
    return 1

  const s = new Array(n).fill(0)
  s[0] = '1'
  s[1] = '2'
  s[2] = '2'
  let res = 1
  let i = 2
  let j = 3
  while (j < n) {
    let size = s[i].charCodeAt(0) - '0'.charCodeAt(0)
    const num = 3 - (s[j - 1].charCodeAt() - '0'.charCodeAt(0))
    while (size > 0 && j < n) {
      s[j] = String.fromCharCode('0'.charCodeAt(0) + num)
      if (num === 1) ++res

      ++j
      --size
    }
    ++i
  }
  return res
}
```