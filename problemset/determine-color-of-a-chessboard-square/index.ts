/**
 * 数学
 * @desc 时间复杂度 O(1) 空间复杂度 O(1)
 * @param coordinates
 * @returns
 */
export function squareIsWhite(coordinates: string): boolean {
  return ((coordinates[0].charCodeAt(0) - 'a'.charCodeAt(0) + 1) + (coordinates[1].charCodeAt(0) - '0'.charCodeAt(0))) % 2 === 1
}
