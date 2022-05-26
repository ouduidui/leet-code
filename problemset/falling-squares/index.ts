/**
 * 暴力枚举
 * @desc 时间复杂度 O(N²)  空间复杂度 O(N)
 * @param positions
 * @returns
 */
export function fallingSquares(positions: number[][]): number[] {
  const len = positions.length
  const heights: number[] = []

  for (let i = 0; i < len; i++) {
    const left = positions[i][0]
    const right = positions[i][0] + positions[i][1] - 1
    let height = positions[i][1]
    for (let j = 0; j < i; j++) {
      const prevLeft = positions[j][0]
      const prevRight = positions[j][0] + positions[j][1] - 1
      if (right >= prevLeft && prevRight >= left)
        height = Math.max(height, heights[j] + positions[i][1])
    }
    heights.push(height)
  }

  for (let i = 1; i < len; i++)
    heights[i] = Math.max(heights[i], heights[i - 1])

  return heights
}
