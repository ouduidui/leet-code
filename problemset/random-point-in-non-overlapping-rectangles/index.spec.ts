import { expect, it } from 'vitest'
import { Solution } from '.'

const rects = [[-2, -2, 1, 1], [2, 2, 4, 6]]

const checkPointInRects = ([px, py]: number[]): boolean =>
  rects.some(([a, b, x, y]) => px >= a && px <= x && py >= b && py <= y)

it('非重叠矩形中的随机点', () => {
  const solution = new Solution(rects)
  expect(checkPointInRects(solution.pick())).toBeTruthy()
  expect(checkPointInRects(solution.pick())).toBeTruthy()
  expect(checkPointInRects(solution.pick())).toBeTruthy()
  expect(checkPointInRects(solution.pick())).toBeTruthy()
  expect(checkPointInRects(solution.pick())).toBeTruthy()
})
