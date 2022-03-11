import { countHighestScoreNodes } from '.';

describe('统计最高分的节点数目', () => {
  testCase(countHighestScoreNodes);
});

function testCase(fn: (parents: number[]) => number) {
  it('示例一', () => {
    const parents = [-1, 2, 0, 2, 0];
    const expected = 3;
    expect(fn(parents)).toBe(expected);
  });

  it('示例二', () => {
    const parents = [-1, 2, 0];
    const expected = 2;
    expect(fn(parents)).toBe(expected);
  });
}
