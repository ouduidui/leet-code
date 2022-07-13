import { describe, expect, it } from 'vitest'
import { asteroidCollision } from '.'

describe('行星碰撞', () => {
  testCase(asteroidCollision)
})

function testCase(fn: (asteroids: number[]) => number[]) {
  it.each([
    [
      [5, 10, -5],
      [5, 10],
    ],
    [
      [8, -8],
      [],
    ],
    [
      [10, 2, -5],
      [10],
    ],
  ])('示例%#', (asteroids, expected) => {
    expect(fn(asteroids)).toStrictEqual(expected)
  })
}
