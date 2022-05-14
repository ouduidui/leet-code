/**
 * 记忆化搜索 + 状态压缩
 * @desc 时间复杂度 O(2^M*N*(M+C))  空间复杂度 O(2^M)
 * @param stickers
 * @param target
 * @returns
 */
export function minStickers(stickers: string[], target: string): number {
  const len = target.length
  const memo = new Array(1 << len).fill(-1)
  memo[0] = 0
  const res = dfs(stickers, target, memo, (1 << len) - 1)
  return res <= len ? res : -1

  function dfs(stickers: string[], target: string, memo: number[], mask: number) {
    if (memo[mask] < 0) {
      let res = len + 1
      for (const sticker of stickers) {
        let left = mask
        const cnt = new Array(26).fill(0)
        for (let i = 0; i < sticker.length; i++)
          cnt[getChIndex(sticker[i])]++

        for (let i = 0; i < target.length; i++) {
          const c = target[i]
          if (((mask >> i) & 1) === 1 && cnt[getChIndex(c)] > 0) {
            cnt[getChIndex(c)]--
            left ^= 1 << i
          }
        }

        if (left < mask)
          res = Math.min(res, dfs(stickers, target, memo, left) + 1)
      }
      memo[mask] = res
    }

    return memo[mask]
  }

  function getChIndex(ch: string): number {
    return ch.charCodeAt(0) - 'a'.charCodeAt(0)
  }
}
