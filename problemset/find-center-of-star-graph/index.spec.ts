import { findCenter } from './index';

describe('找出星型图的中心节点', () => {
  testCase(findCenter);
});

function testCase(fn: (edges: number[][]) => number) {
  it('示例一', () => {
    const edges = [
      [1, 2],
      [2, 3],
      [4, 2]
    ];
    const expected = 2;
    expect(fn(edges)).toBe(expected);
  });

  it('示例二', () => {
    const edges = [
      [1, 2],
      [5, 1],
      [1, 3],
      [1, 4]
    ];
    const expected = 1;
    expect(fn(edges)).toBe(expected);
  });
}
