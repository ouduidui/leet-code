# 删除无效的括号

> 难度：困难
>
> https://leetcode-cn.com/problems/remove-invalid-parentheses/

## 题目

给你一个由若干括号和字母组成的字符串 `s` ，删除最小数量的无效括号，使得输入的字符串有效。

返回所有可能的结果。答案可以按 **任意顺序** 返回。

### 示例 

#### 示例 1：

```
输入：s = "()())()"
输出：["(())()","()()()"]
```

#### 示例 2：

```
输入：s = "(a)())()"
输出：["(a())()","(a)()()"]
```

#### 示例 3：

```
输入：s = ")("
输出：[""]
```

## 解题

### 回溯 + 剪枝

```ts
/**
 * 回溯 + 剪枝
 * @desc 时间复杂度 O(N2^N)  空间复杂度 O(N²)
 * @param s
 * @returns
 */
export function removeInvalidParentheses(s: string): string[] {
  const result: string[] = []

  // 计算出至少要删掉的左括号数量和有括号数量
  let leftRemove = 0
  let rightRemove = 0
  for (const ch of s) {
    if (ch === '(')
      leftRemove++
    else if (ch === ')')
      leftRemove === 0 ? rightRemove++ : leftRemove--
  }

  dfs(s, 0, leftRemove, rightRemove)
  return result

  /**
   * 递归操作
   * @param str
   * @param start 递归起点
   * @param leftRemove 要删除的左括号数量
   * @param rightRemove 要删除的右括号数量
   * @returns
   */
  function dfs(
    str: string,
    start: number,
    leftRemove: number,
    rightRemove: number,
  ) {
    // 如果已经删完所有多余的左右括号后，验证是否有效
    if (leftRemove === 0 && rightRemove === 0) {
      if (isValid(str))
        result.push(str)
      return
    }

    for (let i = start; i < str.length; i++) {
      // 对于连续括号的情况，可以直接跳过，避免重复操作，影响性能
      if (i !== start && str[i] === str[i - 1])
        continue

      // 如果要删除的括号数量超过字符串数量的话，直接跳出函数
      if (leftRemove + rightRemove > str.length - i)
        return

      // 处理左括号
      if (leftRemove > 0 && str[i] === '(')
        dfs(str.substring(0, i) + str.substring(i + 1), i, leftRemove - 1, rightRemove)

      // 处理右括号
      if (rightRemove > 0 && str[i] === ')')
        dfs(str.substring(0, i) + str.substring(i + 1), i, leftRemove, rightRemove - 1)
    }
  }

  function isValid(str: string) {
    let count = 0

    for (let i = 0; i < str.length; i++) {
      if (str[i] === '(') {
        count++
      }
      else if (str[i] === ')') {
        count--
        if (count < 0) return false
      }
    }

    return true
  }
}
```

### 广度优先搜索

```ts
/**
 * 广度优先搜索
 * @desc 时间复杂度 O(N2^N)  空间复杂度 O(N C[N/2 N])
 * @param s
 * @returns
 */
export function removeInvalidParentheses2(s: string): string[] {
  const result: string[] = []
  let curSet = new Set<string>()

  curSet.add(s)
  while (true) {
    for (const str of curSet) {
      if (isValid(str))
        result.push(str)
    }

    if (result.length > 0)
      return result

    const nextSet = new Set<string>()
    for (const str of curSet) {
      for (let i = 0; i < str.length; i++) {
        if (i > 0 && str[i] === str[i - 1])
          continue

        if (str[i] === '(' || str[i] === ')')
          nextSet.add(str.substring(0, i) + str.substring(i + 1))
      }
    }
    curSet = nextSet
  }

  function isValid(str: string) {
    let count = 0
    for (const ch of str) {
      if (ch === '(') {
        count++
      }
      else if (ch === ')') {
        count--
        if (count < 0)
          return false
      }
    }

    return count === 0
  }
}
```