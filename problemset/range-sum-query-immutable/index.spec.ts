import { expect, it } from 'vitest'
import { NumArray } from '.'

it('区域和检索 - 数组不可变', () => {
  const numArray = new NumArray([-2, 0, 3, -5, 2, -1])
  expect(numArray.sumRange(0, 2)).toBe(1) // return 1 ((-2) + 0 + 3)
  expect(numArray.sumRange(2, 5)).toBe(-1) // return -1 (3 + (-5) + 2 + (-1))
  expect(numArray.sumRange(0, 5)).toBe(-3) // return -3 ((-2) + 0 + 3 + (-5) + 2 + (-1))
})
