import { divide, divide2 } from './index';

describe('两数相除', () => {
  describe('二分法', () => {
    testCase(divide);
  });
  describe('类二分法', () => {
    testCase(divide2);
  });
});

function testCase(fn: (dividend: number, divisor: number) => number) {
  test('示例一', () => {
    const dividend = 10;
    const divisor = 3;
    const expected = 3;

    expect(fn(dividend, divisor)).toBe(expected);
  });

  test('示例二', () => {
    const dividend = 7;
    const divisor = -3;
    const expected = -2;

    expect(fn(dividend, divisor)).toBe(expected);
  });
}
