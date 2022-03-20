import { rangeBitwiseAnd, rangeBitwiseAnd2 } from '.';

describe('数字范围按位与', () => {
  describe('位移', () => {
    testCase(rangeBitwiseAnd);
  });

  describe('Brian Kernighan 算法', () => {
    testCase(rangeBitwiseAnd2);
  });
});

function testCase(fn: (left: number, right: number) => number) {
  it('示例一', () => {
    const left = 5;
    const right = 7;
    const expected = 4;
    expect(fn(left, right)).toBe(expected);
  });

  it('示例二', () => {
    const left = 0;
    const right = 0;
    const expected = 0;
    expect(fn(left, right)).toBe(expected);
  });

  it('示例三', () => {
    const left = 1;
    const right = 2147483647;
    const expected = 0;
    expect(fn(left, right)).toBe(expected);
  });
}
