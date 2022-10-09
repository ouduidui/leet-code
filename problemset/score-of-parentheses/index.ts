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
