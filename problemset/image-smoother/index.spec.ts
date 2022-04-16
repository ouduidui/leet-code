import { describe, expect, it } from 'vitest'
import { imageSmoother } from '.'

describe('图片平滑器', () => {
  testCase(imageSmoother)
})

function testCase(fn: (img: number[][]) => number[][]) {
  it.each([
    [
      [
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1],
      ],
      [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ],
    ],
    [
      [
        [100, 200, 100],
        [200, 50, 200],
        [100, 200, 100],
      ],
      [
        [137, 141, 137],
        [141, 138, 141],
        [137, 141, 137],
      ],
    ],
  ])('示例%#', (img, expected) => {
    expect(fn(img)).toStrictEqual(expected)
  })
}
