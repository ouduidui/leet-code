import { divide, divide2 } from '.';
// need refactor
import { describe, it, expect } from 'vitest';
describe('两数相除', () => {
  describe('二分法', () => {
    testCase(divide);
  });
  describe('类二分法', () => {
    testCase(divide2);
  });
});

function testCase(fn: (dividend: number, divisor: number) => number) {
  it('示例一', () => {
    const dividend = 10;
    const divisor = 3;
    const expected = 3;

    expect(fn(dividend, divisor)).toBe(expected);
  });

  it('示例二', () => {
    const dividend = 7;
    const divisor = -3;
    const expected = -2;

    expect(fn(dividend, divisor)).toBe(expected);
  });
}
