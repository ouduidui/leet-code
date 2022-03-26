/**
 * 回溯
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param s {string}
 * @return {string[]}
 */
export function restoreIpAddresses(s: string): string[] {
  const ans: string[] = []
  dfs([], 0)
  return ans

  function dfs(segments: number[], idx: number) {
    if (segments.length === 4 && idx === s.length) {
      // 如果找到了 4 段 IP 地址并且遍历完了字符串，那么就是一种答案
      ans.push(segments.join('.'))
      return
    }
    else if (segments.length === 4 || idx === s.length) {
      // 如果还没有找到 4 段 IP 地址就已经遍历完了字符串，那么提前回溯
      return
    }

    // 不能有前导零
    if (s[idx] === '0') {
      dfs([...segments, 0], idx + 1)
      return
    }

    // 枚举每一种可能性并递归
    let address = 0
    for (let i = idx; i < s.length; i++) {
      address = address * 10 + Number(s[i])
      if (address > 0 && address <= 255)
        dfs([...segments, address], i + 1)
      else
        break
    }
  }
}
