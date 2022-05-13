/**
 * 按情况分析
 * @desc 时间复杂度 O(M+N)  空间复杂度 O(1)
 * @param first
 * @param second
 * @returns
 */
export function oneEditAway(first: string, second: string): boolean {
  if (first === second) return true

  const m = first.length
  const n = second.length
  if (m - n === 1) {
    return oneInsert(second, first)
  }
  else if (n - m === 1) {
    return oneInsert(first, second)
  }
  else if (m === n) {
    let foundDifference = false
    for (let i = 0; i < m; i++) {
      if (first[i] !== second[i]) {
        if (!foundDifference)
          foundDifference = true
        else
          return false
      }
    }
    return true
  }
  else {
    return false
  }

  function oneInsert(shorter: string, longer: string): boolean {
    const length1 = shorter.length
    const length2 = longer.length
    let index1 = 0
    let index2 = 0
    while (index1 < length1 && index2 < length2) {
      if (shorter[index1] === longer[index2]) index1++
      index2++
      if (index2 - index1 > 1) return false
    }
    return true
  }
}
