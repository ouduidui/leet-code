import { highestPeak } from './index';

describe('地图中的最高点', () => {
  testCase(highestPeak);
});

function testCase(fn: (isWater: number[][]) => number[][]) {
  it('示例一', () => {
    const isWater = [
      [0, 1],
      [0, 0]
    ];
    const expected = [
      [1, 0],
      [2, 1]
    ];

    expect(fn(isWater)).toStrictEqual(expected);
  });

  it('示例二', () => {
    const isWater = [
      [0, 0, 1],
      [1, 0, 0],
      [0, 0, 0]
    ];
    const expected = [
      [1, 1, 0],
      [0, 1, 1],
      [1, 2, 2]
    ];

    expect(fn(isWater)).toStrictEqual(expected);
  });
}
