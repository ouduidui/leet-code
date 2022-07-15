/**
 * 暴力解法
 * @param words
 * @returns
 */
export function palindromePairs(words: string[]): number[][] {
  const len = words.length
  const result: number[][] = []
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      isPalindrome(words[i] + words[j]) && result.push([i, j])
      isPalindrome(words[j] + words[i]) && result.push([j, i])
    }
  }

  return result

  function isPalindrome(str: string): boolean {
    let start = 0
    let end = str.length - 1
    while (start < end) {
      if (str[start++] !== str[end--])
        return false
    }

    return true
  }
}

/**
 * 枚举前缀和后缀 + 哈希表
 * @desc 时间复杂度 O(NM²)  时间复杂度 O(NM)
 * @param words
 * @returns
 */
export function palindromePairs2(words: string[]): number[][] {
  const len = words.length
  const wordsRev = words.map(word => word.split('').reverse().join(''))
  const indices = new Map<string, number>()
  for (let i = 0; i < len; i++)
    indices.set(wordsRev[i], i)

  const res: number[][] = []

  for (let i = 0; i < len; i++) {
    const word = words[i]
    const m = word.length
    if (m === 0) continue

    for (let j = 0; j <= m; j++) {
      if (isPalindrome(word, j, m - 1)) {
        const leftId = findWord(word, 0, j - 1)
        if (leftId !== -1 && leftId !== i)
          res.push([i, leftId])
      }

      if (j !== 0 && isPalindrome(word, 0, j - 1)) {
        const rightId = findWord(word, j, m - 1)
        if (rightId !== -1 && rightId !== i)
          res.push([rightId, i])
      }
    }
  }

  return res

  function isPalindrome(str: string, left: number, right: number): boolean {
    const len = right - left + 1
    for (let i = 0; i < len >> 1; i++)
      if (str[left + i] !== str[right - i]) return false

    return true
  }

  function findWord(str: string, left: number, right: number): number {
    const key = str.substring(left, right + 1)
    return indices.has(key) ? indices.get(key)! : -1
  }
}
