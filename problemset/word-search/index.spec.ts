import { exist } from '.';
import { describe, it, expect } from 'vitest';

describe('单词搜索', () => {
  describe('回溯', function () {
    testCase(exist);
  });
});

function testCase(fn: (board: string[][], word: string) => boolean) {
  it.each([
    [
      [
        ['A', 'B', 'C', 'E'],
        ['S', 'F', 'C', 'S'],
        ['A', 'D', 'E', 'E']
      ],
      'ABCCED',
      true
    ],
    [
      [
        ['A', 'B', 'C', 'E'],
        ['S', 'F', 'C', 'S'],
        ['A', 'D', 'E', 'E']
      ],
      'SEE',
      true
    ],
    [
      [
        ['A', 'B', 'C', 'E'],
        ['S', 'F', 'C', 'S'],
        ['A', 'D', 'E', 'E']
      ],
      'ABCB',
      false
    ]
  ])('示例%#', (board, word, expected) => {
    expect(fn(board, word)).toBe(expected);
  });
}
