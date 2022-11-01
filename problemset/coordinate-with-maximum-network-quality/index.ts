/**
 * 枚举
 * @desc 时间复杂度 O(XYN)  空间复杂度 O(1)
 * @param towers
 * @param radius
 * @returns
 */
export function bestCoordinate(towers: number[][], radius: number): number[] {
  let xMax = Number.MIN_VALUE
  let yMax = -Number.MAX_VALUE
  const getSquaredDistance
  = (coordinate: number[], tower: number[]) => (tower[0] - coordinate[0]) * (tower[0] - coordinate[0]) + (tower[1] - coordinate[1]) * (tower[1] - coordinate[1])
  for (const tower of towers) {
    const x = tower[0]; const y = tower[1]
    xMax = Math.max(xMax, x)
    yMax = Math.max(yMax, y)
  }
  let cx = 0
  let cy = 0
  let maxQuality = 0
  for (let x = 0; x <= xMax; x++) {
    for (let y = 0; y <= yMax; y++) {
      const coordinate = [x, y]
      let quality = 0
      for (const tower of towers) {
        const squaredDistance = getSquaredDistance(coordinate, tower)
        if (squaredDistance <= radius * radius) {
          const distance = Math.sqrt(squaredDistance)
          quality += Math.floor(tower[2] / (1 + distance))
        }
      }
      if (quality > maxQuality) {
        cx = x
        cy = y
        maxQuality = quality
      }
    }
  }
  return [cx, cy]
}
