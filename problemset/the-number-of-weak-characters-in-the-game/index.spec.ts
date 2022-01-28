import { numberOfWeakCharacters, numberOfWeakCharacters2 } from './index';

describe('游戏中弱角色的数量', () => {
  describe('暴力解法', () => {
    testCase(numberOfWeakCharacters);
  });

  describe('排序', () => {
    testCase(numberOfWeakCharacters2);
  });
});

function testCase(fn: (properties: number[][]) => number) {
  it('示例一', () => {
    const properties = [
      [5, 5],
      [6, 3],
      [3, 6]
    ];
    const expected = 0;
    expect(fn(properties)).toBe(expected);
  });

  it('示例二', () => {
    const properties = [
      [2, 2],
      [3, 3]
    ];
    const expected = 1;
    expect(fn(properties)).toBe(expected);
  });

  it('示例三', () => {
    const properties = [
      [1, 5],
      [10, 4],
      [4, 3]
    ];
    const expected = 1;
    expect(fn(properties)).toBe(expected);
  });

  it('示例四', () => {
    const properties = [
      [7, 7],
      [1, 2],
      [9, 7],
      [7, 3],
      [3, 10],
      [9, 8],
      [8, 10],
      [4, 3],
      [1, 5],
      [1, 5]
    ];
    const expected = 6;
    expect(fn(properties)).toBe(expected);
  });
}
