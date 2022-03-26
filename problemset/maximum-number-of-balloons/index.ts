/**
 * 统计
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param text
 */
export function maxNumberOfBalloons(text: string): number {
  // b a l o n
  const counts = new Array(5).fill(0)

  for (const l of text) {
    switch (l) {
      case 'b':
        counts[0]++
        break
      case 'a':
        counts[1]++
        break
      case 'l':
        counts[2]++
        break
      case 'o':
        counts[3]++
        break
      case 'n':
        counts[4]++
        break
    }
  }

  counts[2] = counts[2] >> 1
  counts[3] = counts[3] >> 1

  return Math.min(...counts)
}
