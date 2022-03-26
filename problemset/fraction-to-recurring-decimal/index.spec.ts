import { fractionToDecimal } from '.';
// need refactor
import { describe, it, expect } from 'vitest';
describe('分数到小数', () => {
  testCase(fractionToDecimal);
});

function testCase(fn: (numerator: number, denominator: number) => string) {
  it('示例一', () => {
    const numerator = 1;
    const denominator = 2;
    const expected = '0.5';
    expect(fn(numerator, denominator)).toBe(expected);
  });

  it('示例二', () => {
    const numerator = 2;
    const denominator = 1;
    const expected = '2';
    expect(fn(numerator, denominator)).toBe(expected);
  });

  it('示例三', () => {
    const numerator = 2;
    const denominator = 3;
    const expected = '0.(6)';
    expect(fn(numerator, denominator)).toBe(expected);
  });

  it('示例四', () => {
    const numerator = 4;
    const denominator = 333;
    const expected = '0.(012)';
    expect(fn(numerator, denominator)).toBe(expected);
  });

  it('示例五', () => {
    const numerator = 1;
    const denominator = 5;
    const expected = '0.2';
    expect(fn(numerator, denominator)).toBe(expected);
  });

  it('示例六', () => {
    const numerator = -2147483648;
    const denominator = -1;
    const expected = '2147483648';
    expect(fn(numerator, denominator)).toBe(expected);
  });
}
