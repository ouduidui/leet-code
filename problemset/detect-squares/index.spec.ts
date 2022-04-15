import { expect, it } from 'vitest'
import { DetectSquares } from '.'

it('检测正方形', () => {
  const detectSquares = new DetectSquares()
  detectSquares.add([3, 10])
  detectSquares.add([11, 2])
  detectSquares.add([3, 2])
  expect(detectSquares.count([11, 10])).toBe(1)
  expect(detectSquares.count([14, 8])).toBe(0)
  detectSquares.add([11, 2])
  expect(detectSquares.count([11, 10])).toBe(2)
})
