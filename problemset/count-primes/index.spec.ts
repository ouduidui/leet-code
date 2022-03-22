import { countPrimes, countPrimes2 } from '.';

describe('计数质数', () => {
  describe('枚举', () => {
    testCase(countPrimes);
  });

  describe('埃氏筛', () => {
    testCase(countPrimes2);
  });
});

function testCase(fn: (n: number) => number) {
  it('示例一', () => {
    const n = 10;
    const expected = 4;
    expect(fn(n)).toBe(expected);
  });

  it('示例二', () => {
    const n = 0;
    const expected = 0;
    expect(fn(n)).toBe(expected);
  });

  it('示例三', () => {
    const n = 1;
    const expected = 0;
    expect(fn(n)).toBe(expected);
  });
}
