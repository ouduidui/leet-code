/**
 * KMS
 * @desc 时间复杂度 O(N) 空间复杂度 O(N)
 * @param s
 * @returns
 */
export function shortestPalindrome(s: string): string {
  const len = s.length
  // 用于映射后续与倒序s匹配是，如果匹配不上的话需要回到的对应七点
  const fail = new Array(len).fill(-1)
  for (let i = 1; i < len; i++) {
    let j = fail[i - 1]
    while (j !== -1 && s.charAt(j + 1) !== s.charAt(i))
      j = fail[j]

    if (s.charAt(j + 1) === s.charAt(i))
      fail[i] = j + 1
  }

  let best = -1
  for (let i = len - 1; i >= 0; i--) {
    while (best !== -1 && s.charAt(best + 1) !== s.charAt(i))
      best = fail[best]

    if (s.charAt(best + 1) === s.charAt(i))
      best++
  }

  // 如果 best === len — 1，则说明 s 就是回文子串
  const add = best === len - 1
    ? ''
    // 截取best之后的子串并倒序
    : s.substring(best + 1).split('').reverse().join('')

  return add + s
}
