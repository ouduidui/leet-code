/**
 * 排序
 * @desc 时间复杂度 O(NlogN)  空间复杂度 O(logN)
 * @param citations
 * @returns
 */
export function hIndex(citations: number[]): number {
  citations.sort((a, b) => a - b)
  let h = 0
  let i = citations.length - 1
  while (i >= 0 && citations[i] > h) {
    h++
    i--
  }
  return h
}

/**
 * 计数排序
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param citations
 * @returns
 */
export function hIndex2(citations: number[]): number {
  const len = citations.length
  const counter = new Array(len + 1).fill(0)
  // 统计次数，大于等于len统一以len处理
  for (let i = 0; i < len; i++)
    citations[i] >= len ? counter[len]++ : counter[citations[i]]++

  let tot = 0
  for (let i = len; i >= 0; i--) {
    tot += counter[i]
    if (tot >= i)
      return i
  }

  return 0
}
