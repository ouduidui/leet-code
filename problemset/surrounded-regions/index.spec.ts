import { solve, solve2 } from './index';

describe('被围绕的区域', () => {
  describe('深度优先搜索', () => {
    testCase(solve);
  });
  describe('广度优先搜索', () => {
    testCase(solve2);
  });
});

function testCase(fn: (board: string[][]) => void) {
  it('示例一', () => {
    const board = [
      ['X', 'X', 'X', 'X'],
      ['X', 'O', 'O', 'X'],
      ['X', 'X', 'O', 'X'],
      ['X', 'O', 'X', 'X']
    ];
    const expected = [
      ['X', 'X', 'X', 'X'],
      ['X', 'X', 'X', 'X'],
      ['X', 'X', 'X', 'X'],
      ['X', 'O', 'X', 'X']
    ];
    fn(board);
    expect(board).toStrictEqual(expected);
  });

  it('示例二', () => {
    const board = [['X']];
    const expected = [['X']];
    fn(board);
    expect(board).toStrictEqual(expected);
  });

  it('示例三', () => {
    const board = [
      ['X', 'O', 'X', 'O', 'X', 'O'],
      ['O', 'X', 'O', 'X', 'O', 'X'],
      ['X', 'O', 'X', 'O', 'X', 'O'],
      ['O', 'X', 'O', 'X', 'O', 'X']
    ];
    const expected = [
      ['X', 'O', 'X', 'O', 'X', 'O'],
      ['O', 'X', 'X', 'X', 'X', 'X'],
      ['X', 'X', 'X', 'X', 'X', 'O'],
      ['O', 'X', 'O', 'X', 'O', 'X']
    ];
    fn(board);
    expect(board).toStrictEqual(expected);
  });

  it('示例四', () => {
    const board = [
      ['O', 'X', 'X', 'O', 'X'],
      ['X', 'O', 'O', 'X', 'O'],
      ['X', 'O', 'X', 'O', 'X'],
      ['O', 'X', 'O', 'O', 'O'],
      ['X', 'X', 'O', 'X', 'O']
    ];
    const expected = [
      ['O', 'X', 'X', 'O', 'X'],
      ['X', 'X', 'X', 'X', 'O'],
      ['X', 'X', 'X', 'O', 'X'],
      ['O', 'X', 'O', 'O', 'O'],
      ['X', 'X', 'O', 'X', 'O']
    ];
    fn(board);
    expect(board).toStrictEqual(expected);
  });

  it('示例五', () => {
    const board = [
      ['X', 'O', 'X', 'O', 'O', 'O', 'O'],
      ['X', 'O', 'O', 'O', 'O', 'O', 'O'],
      ['X', 'O', 'O', 'O', 'O', 'X', 'O'],
      ['O', 'O', 'O', 'O', 'X', 'O', 'X'],
      ['O', 'X', 'O', 'O', 'O', 'O', 'O'],
      ['O', 'O', 'O', 'O', 'O', 'O', 'O'],
      ['O', 'X', 'O', 'O', 'O', 'O', 'O']
    ];
    const expected = [
      ['X', 'O', 'X', 'O', 'O', 'O', 'O'],
      ['X', 'O', 'O', 'O', 'O', 'O', 'O'],
      ['X', 'O', 'O', 'O', 'O', 'X', 'O'],
      ['O', 'O', 'O', 'O', 'X', 'O', 'X'],
      ['O', 'X', 'O', 'O', 'O', 'O', 'O'],
      ['O', 'O', 'O', 'O', 'O', 'O', 'O'],
      ['O', 'X', 'O', 'O', 'O', 'O', 'O']
    ];
    fn(board);
    expect(board).toStrictEqual(expected);
  });
}
