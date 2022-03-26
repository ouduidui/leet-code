/**
 * 暴力解法
 * @desc 时间复杂度 O(N^2)  空间复杂度 O(1)
 * @param s {string}
 * @return {string}
 */
export function longestNiceSubstring(s: string): string {
  const len = s.length
  let maxPosition = 0
  let maxLength = 0
  for (let i = 0; i < len; i++) {
    let lower = 0
    let upper = 0
    for (let j = i; j < len; j++) {
      // 利用26位二进制来表示字母
      // abcdefghijklmnopqrstuvwxyz
      // 00000000000000000000000000
      if (s[j] >= 'a' && s[j] <= 'z') {
        // 小写
        lower |= 1 << (s[j].charCodeAt(0) - 'a'.charCodeAt(0))
      }
      else {
        // 大写
        upper |= 1 << (s[j].charCodeAt(0) - 'A'.charCodeAt(0))
      }

      if (lower === upper && j - i + 1 > maxLength) {
        maxPosition = i
        maxLength = j - i + 1
      }
    }
  }

  return s.slice(maxPosition, maxPosition + maxLength)
}

/**
 * 分治
 * @desc 时间复杂度 O(N⋅∣Σ∣)  ∣Σ∣ 为字符集的大小  空间复杂度 O(∣Σ∣)
 * @param s {string}
 * @return {string}
 */
export function longestNiceSubstring2(s: string): string {
  let maxPosition = 0
  let maxLength = 0
  dfs(0, s.length - 1)
  return s.substring(maxLength, maxPosition + maxPosition)

  function dfs(start: number, end: number): void {
    if (start >= end) return

    let lower = 0
    let upper = 0

    for (let i = start; i <= end; i++) {
      if (s[i] >= 'a' && s[i] <= 'z')
        lower |= 1 << (s[i].charCodeAt(0) - 'a'.charCodeAt(0))
      else
        upper |= 1 << (s[i].charCodeAt(0) - 'A'.charCodeAt(0))
    }

    if (lower <= upper) {
      if (end - start + 1 > maxLength) {
        maxPosition = start
        maxLength = end - start + 1
      }
      return
    }
    const valid = lower & upper
    let pos = start
    while (pos <= end) {
      start = pos
      while (
        pos <= end
        && (valid
          & (1 << (s[pos].toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0))))
          !== 0
      )
        pos++

      dfs(start, pos - 1)
      pos++
    }
  }
}

/**
 * 滑动窗口
 * @desc 时间复杂度 O(N⋅∣Σ∣)  ∣Σ∣ 为字符集的大小  空间复杂度 O(∣Σ∣)
 * @param s {string}
 * @return {string}
 */
export function longestNiceSubstring3(s: string): string {
  let maxPosition = 0
  let maxLength = 0
  let types = 0
  for (let i = 0; i < s.length; ++i)
    types |= 1 << (s[i].toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0))

  types = bitCount(types)
  for (let i = 1; i <= types; i++)
    check(s, i)

  return s.slice(maxPosition, maxPosition + maxLength)

  function bitCount(n: number) {
    let ret = 0
    while (n) {
      n &= n - 1
      ret++
    }
    return ret
  }

  function check(s: string, typeNum: number) {
    const lowerCnt = new Array(26).fill(0)
    const upperCnt = new Array(26).fill(0)
    let cnt = 0
    for (let l = 0, r = 0, total = 0; r < s.length; r++) {
      let idx = s[r].toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0)
      if (s[r] >= 'a' && s[r] <= 'z') {
        lowerCnt[idx]++
        if (lowerCnt[idx] === 1 && upperCnt[idx] > 0)
          cnt++
      }
      else {
        upperCnt[idx]++
        if (upperCnt[idx] === 1 && lowerCnt[idx] > 0)
          cnt++
      }
      total += lowerCnt[idx] + upperCnt[idx] === 1 ? 1 : 0
      while (total > typeNum) {
        idx = s[l].toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0)
        total -= lowerCnt[idx] + upperCnt[idx] === 1 ? 1 : 0
        if (s[l] >= 'a' && s[l] <= 'z') {
          lowerCnt[idx]--
          if (lowerCnt[idx] === 0 && upperCnt[idx] > 0)
            cnt--
        }
        else {
          upperCnt[idx]--
          if (upperCnt[idx] === 0 && lowerCnt[idx] > 0)
            cnt--
        }
        l++
      }
      if (cnt === typeNum && r - l + 1 > maxLength) {
        maxPosition = l
        maxLength = r - l + 1
      }
    }
  }
}
