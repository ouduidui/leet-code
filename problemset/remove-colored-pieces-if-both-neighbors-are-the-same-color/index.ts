/**
 * 贪心算法
 * @desc 时间复杂度 O(N)   空间复杂度 O(1)
 * @param colors
 */
export function winnerOfGame(colors: string): boolean {
  let aCount = 0
  let bCount = 0

  for (let i = 1; i < colors.length - 1; i++) {
    if (colors[i] === 'A' && colors[i - 1] === 'A' && colors[i + 1] === 'A')
      aCount++
    else if (
      colors[i] === 'B'
      && colors[i - 1] === 'B'
      && colors[i + 1] === 'B'
    )
      bCount++
  }
  return aCount > bCount
}
