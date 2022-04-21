import { expect, it } from 'vitest'
import { NumMatrix, NumMatrix2 } from '.'

it.each([
  ['一维前缀和', NumMatrix],
  ['二维前缀和', NumMatrix2],
])('二维区域和检索 - 矩阵不可变：%s', (_, Ctor) => {
  const numMatrix = new Ctor([[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]])
  expect(numMatrix.sumRegion(2, 1, 4, 3)).toBe(8) // return 8 (红色矩形框的元素总和)
  expect(numMatrix.sumRegion(1, 1, 2, 2)).toBe(11) // return 11 (绿色矩形框的元素总和)
  expect(numMatrix.sumRegion(1, 2, 2, 4)).toBe(12) // return 12 (蓝色矩形框的元素总和)
})
