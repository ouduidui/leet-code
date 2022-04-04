import { describe, expect, it } from 'vitest'
import { NumArray, NumArray2, NumArray3, NumArray4 } from '.'

describe(' 区域和检索 - 数组可修改', () => {
  describe('暴力解法', () => {
    testCase(NumArray)
  })

  describe('分块处理', () => {
    testCase(NumArray2)
  })

  describe('线段树', () => {
    testCase(NumArray3)
  })

  describe('树状数组', () => {
    testCase(NumArray4)
  })
})

interface NumArrayCtor {
  update: (index: number, val: number) => void
  sumRange: (left: number, right: number) => number
}

function testCase(Ctor: (new (nums: number[]) => NumArrayCtor)) {
  it('示例', () => {
    const numArray = new Ctor([1, 3, 5])
    expect(numArray.sumRange(0, 2)).toBe(9) // 返回 1 + 3 + 5 = 9
    numArray.update(1, 2)
    expect(numArray.sumRange(0, 2)).toBe(8) // 返回 1 + 2 + 5 = 8
  })
}
