# 相似度为 K 的字符串

> 难度：困难
>
> https://leetcode.cn/problems/k-similar-strings/

## 题目

对于某些非负整数 `k` ，如果交换 `s1` 中两个字母的位置恰好 `k` 次，能够使结果字符串等于 `s2` ，则认为字符串 `s1` 和 `s2` 的 **相似度为** `k` 。

给你两个字母异位词 `s1` 和 `s2` ，返回 `s1` 和 `s2` 的相似度 `k` 的最小值。

### 示例

#### 示例 1：

```
输入：s1 = "ab", s2 = "ba"
输出：1
```

#### 示例 2：

```
输入：s1 = "abc", s2 = "bca"
输出：2
```

## 解题

```ts 
/**
 * 广度优先遍历
 * @param s1
 * @param s2
 * @returns
 */
export function kSimilarity(s1: string, s2: string): number {
  const n = s1.length
  const queue: [string, number][] = []
  const visit = new Set<string>()
  queue.push([s1, 0])
  visit.add(s1)
  let step = 0
  while (queue.length) {
    const sz = queue.length
    for (let i = 0; i < sz; i++) {
      // eslint-disable-next-line prefer-const
      let [cur, pos] = queue.shift()!
      if (cur === s2)
        return step

      while (pos < n && cur[pos] === s2[pos])
        pos++

      for (let j = pos + 1; j < n; j++) {
        if (s2[j] === cur[j])
          continue

        if (s2[pos] === cur[j]) {
          const next = swap(cur, pos, j)
          if (!visit.has(next)) {
            visit.add(next)
            queue.push([next, pos + 1])
          }
        }
      }
    }
    step++
  }
  return step

  function swap(cur: string, i: number, j: number) {
    const arr = [...cur];
    [arr[i], arr[j]] = [arr[j], arr[i]]
    return arr.join('')
  }
}
```