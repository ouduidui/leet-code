/**
 * 暴力解法
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param n
 * @returns
 */
export function binaryGap(n: number): number {
  const binary = n.toString(2)
  let i = 0
  let res = 0
  while (i < binary.length) {
    while (binary[i] !== '1' && i < binary.length) i++
    const left = i++
    while (binary[i] !== '1' && i < binary.length) i++
    if (binary[i] === '1')
      res = Math.max(res, i - left)
  }

  return res
}

/**
 * 位运算
 * @desc 时间复杂度 O(logN)  空间复杂度 O(1)
 * @param n
 * @returns
 */
export function binaryGap2(n: number): number {
  let last = -1
  let res = 0
  for (let i = 0; n !== 0; i++) {
    if ((n & 1) === 1) {
      res = last !== -1 ? Math.max(res, i - last) : 0
      last = i
    }
    n >>= 1
  }
  return res
}
