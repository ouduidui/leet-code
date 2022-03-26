import { describe, expect, it } from 'vitest'
import { getRow, getRow2 } from '.'
// need refactor
describe('杨辉三角 II', () => {
  describe('递推', () => {
    testCase(getRow)
  })

  describe('线性递推', () => {
    testCase(getRow2)
  })
})

function testCase(fn: (rowIndex: number) => number[]) {
  it('示例一', () => {
    const rowIndex = 3
    const expected = [1, 3, 3, 1]
    expect(fn(rowIndex)).toStrictEqual(expected)
  })

  it('示例二', () => {
    const rowIndex = 0
    const expected = [1]
    expect(fn(rowIndex)).toStrictEqual(expected)
  })

  it('示例三', () => {
    const rowIndex = 1
    const expected = [1, 1]
    expect(fn(rowIndex)).toStrictEqual(expected)
  })
}
