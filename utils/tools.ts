import { expect } from 'vitest'

const arrEqual = (
  a: string[] | number[],
  b: string[] | number[],
  sort = false,
): boolean => {
  if (a.length !== b.length) {
    return false
  }
  else {
    if (sort) {
      a.sort()
      b.sort()
    }
    for (let i = 0; i < a.length; i++)
      if (a[i] !== b[i]) return false
  }

  return true
}

/**
 * 测试两个二维数组是否相等
 * @param ans {number[][] | string[][]}
 * @param expected {number[][] | string[][]}
 * @param sort {boolean}
 */
export const twoDimensionalArrayEqual = (
  ans: number[][] | string[][],
  expected: number[][] | string[][],
  sort = false,
) => {
  expect(ans.length).toBe(expected.length)

  const cache: number[] = []

  expected.forEach((e) => {
    const idx = ans.findIndex(a => arrEqual(a, e, sort))
    expect(!cache.includes(idx) && idx !== -1).toBe(true)
    idx !== -1 && cache.push(idx)
  })
}
