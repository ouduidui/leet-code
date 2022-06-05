import { describe, expect, it } from 'vitest'
import { Solution, Solution2 } from '.'

describe('在圆内随机生成点', () => {
  describe('拒绝采样', () => {
    testCase(Solution)
  })

  describe('计算分布函数', () => {
    testCase(Solution2)
  })
})

type CtorType = new (radius: number, x_center: number, y_center: number) => { randPoint: () => number[] }

const checkPointIsInCircle = (
  [x, y]: number[],
  radius: number,
  x_center: number,
  y_center: number,
): boolean => (x - x_center) ** 2 - (y - y_center) ** 2 <= radius ** 2

function testCase(Ctor: CtorType) {
  it.each([
    [
      1.0, 0.0, 0.0,
    ],
  ])('示例%#', (radius, x_center, y_center) => {
    const solution = new Ctor(radius, x_center, y_center)
    expect(
      checkPointIsInCircle(solution.randPoint(), radius, x_center, y_center),
    ).toBe(true)
  })
}
