/**
 * 二分查找
 * @param s
 * @param words
 * @returns
 */
export function numMatchingSubseq(s: string, words: string[]): number {
  const binarySearch = (list: number[], target: number) => {
    let left = 0; let right = list.length - 1
    while (left < right) {
      const mid = left + Math.floor((right - left) / 2)
      if (list[mid] > target)
        right = mid

      else
        left = mid + 1
    }
    return list[left]
  }

  const pos: number[][] = new Array(26).fill(0).map(() => [])
  for (let i = 0; i < s.length; ++i)
    pos[s[i].charCodeAt(0) - 'a'.charCodeAt(0)].push(i)

  let res = words.length
  for (const w of words) {
    if (w.length > s.length) {
      --res
      continue
    }
    let p = -1
    for (let i = 0; i < w.length; ++i) {
      const c = w[i]
      if (pos[c.charCodeAt(0) - 'a'.charCodeAt(0)].length === 0 || pos[c.charCodeAt(0) - 'a'.charCodeAt(0)][pos[c.charCodeAt(0) - 'a'.charCodeAt(0)].length - 1] <= p) {
        --res
        break
      }
      p = binarySearch(pos[c.charCodeAt(0) - 'a'.charCodeAt(0)], p)
    }
  }
  return res
}

/**
 * 二分查找
 * @param s
 * @param words
 * @returns
 */
export function numMatchingSubseq2(s: string, words: string[]): number {
  const p: [number, number][][] = new Array(26).fill(0).map(() => [])
  for (let i = 0; i < words.length; ++i)
    p[words[i][0].charCodeAt(0) - 'a'.charCodeAt(0)].push([i, 0])

  let res = 0
  for (let i = 0; i < s.length; ++i) {
    const c = s[i]
    let len = p[c.charCodeAt(0) - 'a'.charCodeAt(0)].length
    while (len > 0) {
      const t = p[c.charCodeAt(0) - 'a'.charCodeAt(0)].shift()!
      if (t[1] === words[t[0]].length - 1) {
        ++res
      }
      else {
        ++t[1]
        p[words[t[0]][t[1]].charCodeAt(0) - 'a'.charCodeAt(0)].push(t)
      }
      --len
    }
  }
  return res
}
