/**
 * 暴力解法
 * @desc 时间复杂度 O(N*M)  空间复杂度 O(1)
 * @param haystack {string}
 * @param needle {string}
 * @return {number}
 */
export function strStr(haystack: string, needle: string): number {
  if (!needle) return 0

  let ans = -1
  const len1: number = haystack.length
  const len2: number = needle.length

  if (!haystack || len2 > len1) return ans

  for (let i = 0; i + len2 <= len1; i++) {
    ans = i

    for (let j = 0; j < len2; j++) {
      if (haystack[i + j] !== needle[j]) {
        ans = -1
        break
      }
    }

    if (ans !== -1) return ans
  }

  return ans
}

/**
 * KMP解法
 * @desc 时间复杂度 O(N+M)  空间复杂度 O(M)
 * @param haystack {string}
 * @param needle {string}
 * @return {number}
 */
export function strStr2(haystack: string, needle: string): number {
  if (!needle) return 0

  const n: number = haystack.length
  const m: number = needle.length

  const pi: number[] = new Array(m).fill(0)

  // 算出needle的前缀函数
  for (let i = 1, j = 0; i < m; i++) {
    while (j > 0 && needle[i] !== needle[j])
      j = pi[j - 1]

    if (needle[i] === needle[j]) j++

    pi[i] = j
  }

  for (let i = 0, j = 0; i < n; i++) {
    while (j > 0 && haystack[i] !== needle[j])
      j = pi[j - 1]

    if (haystack[i] === needle[j]) j++

    if (j === m) return i - m + 1
  }

  return -1
}
