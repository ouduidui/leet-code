import { hammingWeight, hammingWeight2 } from '.';

describe('位1的个数', () => {
  describe('循环检查二进制位', () => {
    testCase(hammingWeight);
  });

  describe('位运算优化', () => {
    testCase(hammingWeight2);
  });
});

function testCase(fn: (n: number) => number) {
  it('示例一', () => {
    const n = 0b00000000000000000000000000001011;
    const expected = 3;
    expect(fn(n)).toBe(expected);
  });

  it('示例二', () => {
    const n = 0b00000000000000000000000010000000;
    const expected = 1;
    expect(fn(n)).toBe(expected);
  });

  it('示例三', () => {
    const n = 0b11111111111111111111111111111101;
    const expected = 31;
    expect(fn(n)).toBe(expected);
  });
}
