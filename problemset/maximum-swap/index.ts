/**
 * 直接遍历
 * @desc 时间复杂度 O(log²N)  空间复杂度 O(logN)
 * @param num
 * @returns
 */
export function maximumSwap(num: number): number {
  const charArray = [...`${num}`]
  const len = charArray.length
  let maxNum = num

  const swap = (i: number, j: number) => ([charArray[i], charArray[j]] = [charArray[j], charArray[i]])

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      swap(i, j)
      maxNum = Math.max(maxNum, parseInt(charArray.join('')))
      swap(i, j)
    }
  }

  return maxNum
}

/**
 * 贪心
 * @desc 时间复杂度 O(log²N)  空间复杂度 O(logN)
 * @param num
 * @returns
 */
export function maximumSwap2(num: number): number {
  const charArray = [...`${num}`]
  const n = charArray.length
  let maxIdx = n - 1
  let idx1 = -1
  let idx2 = -1

  const swap = (i: number, j: number) => ([charArray[i], charArray[j]] = [charArray[j], charArray[i]])

  for (let i = n - 1; i >= 0; i--) {
    if (charArray[i] > charArray[maxIdx]) {
      maxIdx = i
    }
    else if (charArray[i] < charArray[maxIdx]) {
      idx1 = i
      idx2 = maxIdx
    }
  }
  if (idx1 >= 0) {
    swap(idx1, idx2)
    return parseInt(charArray.join(''))
  }
  else {
    return num
  }
}
