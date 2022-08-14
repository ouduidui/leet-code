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
