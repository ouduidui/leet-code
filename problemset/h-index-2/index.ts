/**
 * 二分法
 * @param citations
 * @returns
 */
export function hIndex(citations: number[]): number {
  const len = citations.length
  let low = 0
  let high = len - 1
  while (low <= high) {
    const mid = (low + high) >> 1
    if (len - mid > citations[mid])
      low = mid + 1
    else
      high = mid - 1
  }
  return len - low
}
