/**
 * 直接遍历
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param widths
 * @param s
 * @returns
 */
export function numberOfLines(widths: number[], s: string): number[] {
  const getWidth = (ch: string) => widths[ch.charCodeAt(0) - 'a'.charCodeAt(0)]

  let count = 0
  let row = 1
  for (let i = 0; i < s.length; i++) {
    const width = getWidth(s[i])
    if (count + width > 100) {
      row++
      count = 0
    }
    count += width
  }

  return [row, count]
}
