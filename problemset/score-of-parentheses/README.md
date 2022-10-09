# 括号的分数

> 难度：中等
>
> https://leetcode.cn/problems/score-of-parentheses/

## 题目

给定一个平衡括号字符串 `S`，按下述规则计算该字符串的分数：

- `()` 得 `1` 分。
- `AB` 得 `A + B` 分，其中 `A` 和 `B` 是平衡括号字符串。
- `(A)` 得 `2 * A` 分，其中 `A` 是平衡括号字符串。
 
### 示例

#### 示例 1：

```
输入： "()"
输出： 1
```

#### 示例 2：

```
输入： "(())"
输出： 2
```

#### 示例 3：

```
输入： "()()"
输出： 2
```

#### 示例 4：

```
输入： "(()(()))"
输出： 6
```

## 解题

### 分治

```ts 
/**
 * 分治
 * @desc 时间复杂度 O(N²) 空间复杂度 O(N²)
 * @param s
 * @returns
 */
export function scoreOfParentheses(s: string): number {
  if (s.length === 2) return 1

  let bal = 0; const n = s.length; let len = 0
  for (let i = 0; i < n; i++) {
    bal += (s[i] === '(' ? 1 : -1)
    if (bal === 0) {
      len = i + 1
      break
    }
  }
  if (len === n)
    return 2 * scoreOfParentheses(s.slice(1, n - 1))
  else
    return scoreOfParentheses(s.slice(0, len)) + scoreOfParentheses(s.slice(len))
}
```

### 栈

```ts 
/**
 * 栈
 * @desc 时间复杂度 O(N) 空间复杂度 O(N)
 * @param s
 * @returns
 */
export function scoreOfParentheses2(s: string): number {
  const st = [0]
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      st.push(0)
    }
    else {
      const v = st.pop()!
      const top = st.pop()! + Math.max(2 * v, 1)
      st.push(top)
    }
  }
  return st[0]
}
```

### 计算最终分数和

```ts 
/**
 * 计算最终分数和
 * @desc 时间复杂度 O(N) 空间复杂度 O(1)
 * @param s
 * @returns
 */
export function scoreOfParentheses3(s: string): number {
  let bal = 0
  const n = s.length
  let res = 0
  for (let i = 0; i < n; i++) {
    bal += (s[i] === '(' ? 1 : -1)
    if (s[i] === ')' && s[i - 1] === '(')
      res += 1 << bal
  }
  return res
}
```