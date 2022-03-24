import { imageSmoother } from '.';

describe('图片平滑器', () => {
  testCase(imageSmoother);
});

function testCase(fn: (img: number[][]) => number[][]) {
  it('示例一', () => {
    const img = [
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1]
    ];
    const expected = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ];
    expect(fn(img)).toStrictEqual(expected);
  });

  it('示例二', () => {
    const img = [
      [100, 200, 100],
      [200, 50, 200],
      [100, 200, 100]
    ];
    const expected = [
      [137, 141, 137],
      [141, 138, 141],
      [137, 141, 137]
    ];
    expect(fn(img)).toStrictEqual(expected);
  });
}
