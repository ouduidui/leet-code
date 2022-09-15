/**
 * 降低搜索空间
 * @desc 时间复杂度 O(1)  空间复杂度 O(1)
 * @param n
 * @param presses
 * @returns
 */
export function flipLights(n: number, presses: number): number {
  const seen = new Set<number>()
  for (let i = 0; i < 1 << 4; i++) {
    const pressArr = new Array(4).fill(0)
    for (let j = 0; j < 4; j++)
      pressArr[j] = (i >> j) & 1

    const sum = pressArr.reduce((acc, cur) => acc + cur, 0)

    if (sum % 2 === presses % 2 && sum <= presses) {
      let status = pressArr[0] ^ pressArr[1] ^ pressArr[3]
      if (n >= 2)
        status |= (pressArr[0] ^ pressArr[1]) << 1

      if (n >= 3)
        status |= (pressArr[0] ^ pressArr[2]) << 2

      if (n >= 4)
        status |= (pressArr[0] ^ pressArr[1] ^ pressArr[3]) << 3

      seen.add(status)
    }
  }
  return seen.size
}
