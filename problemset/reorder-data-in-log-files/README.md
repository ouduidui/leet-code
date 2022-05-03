# 重新排列日志文件

> 难度：简单
>
> https://leetcode-cn.com/problems/reorder-data-in-log-files/

## 题目

给你一个日志数组 `logs`。每条日志都是以空格分隔的字串，其第一个字为字母与数字混合的 **标识符** 。

有两种不同类型的日志：

- **字母日志**：除标识符之外，所有字均由小写字母组成
- **数字日志**：除标识符之外，所有字均由数字组成

请按下述规则将日志重新排序：

- 所有 **字母日志** 都排在 **数字日志** 之前。
- **字母日志** 在内容不同时，忽略标识符后，按内容字母顺序排序；在内容相同时，按标识符排序。
- **数字日志** 应该保留原来的相对顺序。

返回日志的最终顺序。

### 示例

#### 示例 1：

```
输入：logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]
输出：["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]
解释：
字母日志的内容都不同，所以顺序为 "art can", "art zero", "own kit dig" 。
数字日志保留原来的相对顺序 "dig1 8 1 5 1", "dig2 3 6" 。
```

#### 示例 2：

```
输入：logs = ["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"]
输出：["g1 act car","a8 act zoo","ab1 off key dog","a1 9 2 3 1","zo4 4 7"]
```

## 解题

```ts 
/**
 * 自定义排序
 * @desc 时间复杂度 O(NlogN)  空间复杂度 O(N)
 * @param logs
 * @returns
 */
export function reorderLogFiles(logs: string[]): string[] {
  return logs
    .map<[string, number]>((log, i) => [log, i])
    .sort((a, b) => logCompare(a, b))
    .map(item => item[0])

  function logCompare(a: [string, number], b: [string, number]): number {
    const log1 = split(a[0])
    const log2 = split(b[0])
    const isDigit1 = !isNaN(Number(log1[1][0]))
    const isDigit2 = !isNaN(Number(log2[1][0]))
    if (isDigit1 && isDigit2)
      return a[1] - b[1]

    if (!isDigit1 && !isDigit2) {
      const sc = compareTo(log1[1], log2[1])

      if (sc !== 0) return sc
      return compareTo(log1[0], log2[0])
    }

    return isDigit1 ? 1 : -1
  }

  function split(str: string, separator = ' '): string[] {
    const arr = str.split(separator)
    return [arr.shift()!, arr.join(separator)]
  }

  function compareTo(left: string, right: string): -1 | 0 | 1 {
    let diff: number
    for (let i = 0; i < Math.min(left.length, right.length); i++) {
      diff = left[i].charCodeAt(0) - right[i].charCodeAt(0)
      if (diff !== 0)
        return diff < 0 ? -1 : 1
    }

    diff = left.length - right.length
    return diff === 0
      ? 0
      : diff < 0
        ? -1
        : 1
  }
}
```