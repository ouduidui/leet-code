import { describe, expect, it } from 'vitest'
import { canMouseWin } from '.'

describe('猫和老鼠 II', () => {
  testCase(canMouseWin)
})

function testCase(fn: (grid: string[], catJump: number, mouseJump: number) => boolean) {
  it.each([
    [['####F', '#C...', 'M....'], 1, 2, true],
    [['M.C...F'], 1, 4, true],
    [['M.C...F'], 1, 3, false],
    [['C...#', '...#F', '....#', 'M....'], 2, 5, false],
    [['.M...', '..#..', '#..#.', 'C#.#.', '...#F'], 3, 1, true],
  ])('示例%#', (grid, catJump, mouseJump, expected) => {
    expect(fn(grid, catJump, mouseJump)).toBe(expected)
  })
}
