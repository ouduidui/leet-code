/**
 * 将 1 的数量三等分
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param arr
 * @returns
 */
export function threeEqualParts(arr: number[]): number[] {
  const sum = arr.reduce((a, b) => a + b, 0)
  if (sum % 3 !== 0)
    return [-1, -1]

  if (sum === 0)
    return [0, 2]

  const partial = (sum / 3) >> 0
  let first = 0
  let second = 0
  let third = 0
  let cur = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      if (cur === 0) first = i
      else if (cur === partial) second = i
      else if (cur === 2 * partial) third = i

      cur++
    }
  }

  const len = arr.length - third
  if (first + len <= second && second + len <= third) {
    let i = 0
    while (third + i < arr.length) {
      if (arr[first + i] !== arr[second + i] || arr[first + i] !== arr[third + i])
        return [-1, -1]

      i++
    }
    return [first + len - 1, second + len]
  }
  return [-1, -1]
}
