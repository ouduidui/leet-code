/**
 * 枚举每个字符串
 * @desc 时间复杂度 O(N²) 空间复杂度 O(1)
 * @param strs
 * @returns
 */
export function findLUSlength(strs: string[]): number {
  const len = strs.length
  let ans = -1
  for (let i = 0; i < len; i++) {
    let check = true
    for (let j = 0; j < len; j++) {
      if (i !== j && isSubseq(strs[i], strs[j])) {
        check = false
        break
      }
    }

    if (check)
      ans = Math.max(ans, strs[i].length)
  }

  return ans

  function isSubseq(s: string, t: string) {
    let ptS = 0
    let ptT = 0
    while (ptS < s.length && ptT < t.length) {
      if (s[ptS] === t[ptT]) ptS++

      ptT++
    }
    return ptS === s.length
  }
}
