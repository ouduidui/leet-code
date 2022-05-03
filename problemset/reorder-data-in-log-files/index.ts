/**
 * 自定义排序
 * @desc 时间复杂度 O(NlogN)  空间复杂度 O(N)
 * @param logs
 * @returns
 */
export function reorderLogFiles(logs: string[]): string[] {
  return logs
    .map<[string, number]>((log, i) => [log, i])
    .sort((a, b) => logCompare(a, b))
    .map(item => item[0])

  function logCompare(a: [string, number], b: [string, number]): number {
    const log1 = split(a[0])
    const log2 = split(b[0])
    const isDigit1 = !isNaN(Number(log1[1][0]))
    const isDigit2 = !isNaN(Number(log2[1][0]))
    if (isDigit1 && isDigit2)
      return a[1] - b[1]

    if (!isDigit1 && !isDigit2) {
      const sc = compareTo(log1[1], log2[1])

      if (sc !== 0) return sc
      return compareTo(log1[0], log2[0])
    }

    return isDigit1 ? 1 : -1
  }

  function split(str: string, separator = ' '): string[] {
    const arr = str.split(separator)
    return [arr.shift()!, arr.join(separator)]
  }

  function compareTo(left: string, right: string): -1 | 0 | 1 {
    let diff: number
    for (let i = 0; i < Math.min(left.length, right.length); i++) {
      diff = left[i].charCodeAt(0) - right[i].charCodeAt(0)
      if (diff !== 0)
        return diff < 0 ? -1 : 1
    }

    diff = left.length - right.length
    return diff === 0
      ? 0
      : diff < 0
        ? -1
        : 1
  }
}
