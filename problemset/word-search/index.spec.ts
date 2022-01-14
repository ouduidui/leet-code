import { exist } from './index';

describe('单词搜索', () => {
  describe('回溯', function () {
    testCase(exist);
  });
});

function testCase(fn: (board: string[][], word: string) => boolean) {
  it('示例一', () => {
    const board = [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E']
    ];
    const word = 'ABCCED';
    const expected = true;

    expect(fn(board, word)).toBe(expected);
  });

  it('示例二', () => {
    const board = [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E']
    ];
    const word = 'SEE';
    const expected = true;

    expect(fn(board, word)).toBe(expected);
  });

  it('示例三', () => {
    const board = [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E']
    ];
    const word = 'ABCB';
    const expected = false;

    expect(fn(board, word)).toBe(expected);
  });
}
