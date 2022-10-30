/**
 * 广度优先搜索
 * @desc 时间复杂度 O(n*2^n) 空间复杂度 O(n*2^n)
 * @param s
 * @returns
 */
export function letterCasePermutation(s: string): string[] {
  const ans: string[] = []
  const q = ['']
  const swapCase = (ch: string) => {
    if (ch >= 'a' && ch <= 'z')
      return ch.toUpperCase()

    if (ch >= 'A' && ch <= 'Z')
      return ch.toLowerCase()
  }

  const isLetter = (ch: string) => ((ch >= 'a') && (ch <= 'z')) || ((ch >= 'A') && (ch <= 'Z'))

  while (q.length !== 0) {
    const cur = q[0]
    const pos = cur.length
    if (pos === s.length) {
      ans.push(cur)
      q.shift()
    }
    else {
      if (isLetter(s[pos]))
        q.push(cur + swapCase(s[pos]))

      q[0] += s[pos]
    }
  }

  return ans
}

/**
 * 回溯
 * @desc 时间复杂度 O(n*2^n) 空间复杂度 O(n*2^n)
 * @param s
 * @returns
 */
export function letterCasePermutation2(s: string): string[] {
  const ans: string[] = []
  const isDigit = (ch: string) => parseFloat(ch).toString() !== 'NaN'

  const dfs = (arr: string[], pos: number, res: string[]) => {
    while (pos < arr.length && isDigit(arr[pos]))
      pos++

    if (pos === arr.length) {
      res.push(arr.join(''))
      return
    }
    arr[pos] = String.fromCharCode(arr[pos].charCodeAt(0) ^ 32)
    dfs(arr, pos + 1, res)
    arr[pos] = String.fromCharCode(arr[pos].charCodeAt(0) ^ 32)
    dfs(arr, pos + 1, res)
  }
  dfs([...s], 0, ans)
  return ans
}

/**
 * 二进制位图
 * @desc 时间复杂度 O(n*2^n) 空间复杂度 O(1)
 * @param s
 * @returns
 */
export function letterCasePermutation3(s: string): string[] {
  const isLetter = (ch: string) => ((ch >= 'a') && (ch <= 'z')) || ((ch >= 'A') && (ch <= 'Z'))
  const n = s.length
  let m = 0
  for (let i = 0; i < n; i++) {
    if (isLetter(s[i]))
      m++
  }
  const ans = []
  for (let mask = 0; mask < (1 << m); mask++) {
    let sb = ''
    for (let j = 0, k = 0; j < n; j++) {
      if (isLetter(s[j]) && (mask & (1 << k++)) !== 0)
        sb += s[j].toUpperCase()

      else
        sb += s[j].toLowerCase()
    }
    ans.push(sb)
  }
  return ans
}
