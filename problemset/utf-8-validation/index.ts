/**
 * 遍历 + 位运算
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param data
 */
export function validUtf8(data: number[]): boolean {
  const MASK = 1 << 7 // 1000 0000

  const len = data.length
  let index = 0
  const isValid = (num: number) =>
    (num & ((1 << 7) + (1 << 6))) /* 1100 0000 */ === MASK

  while (index < len) {
    // 获取头字节
    const n = getBytes(data[index])
    if (n < 0 || index + n > len) return false

    // 判断后续 n 个字节都否都为10开头
    for (let i = 1; i < n; i++)
      if (!isValid(data[index + i])) return false

    index += n
  }

  return true

  // 计算头字节
  function getBytes(num: number): number {
    // 最高位为0
    // 则当前字符由 11 个字节组成，只有头字节，没有其余字节
    if ((num & MASK) === 0) return 1

    // 计算头字节从最高位开始的连续 11 的个数
    let n = 0
    let mask = MASK
    while ((num & mask) !== 0) {
      n++
      // 头字节不符合 UTF-8 编码的规则
      if (n > 4) return -1
      mask >>= 1
    }

    return n >= 2 ? n : -1
  }
}
