import { trailingZeroes, trailingZeroes2, trailingZeroes3 } from '.';
// need refactor
import { describe, it, expect } from 'vitest';
describe('阶乘后的零', () => {
  describe('计算阶乘', () => {
    testCase(trailingZeroes);
  });

  describe('计算因子5', () => {
    testCase(trailingZeroes2);
  });

  describe('高效的计算因子5', () => {
    testCase(trailingZeroes3);
  });
});

function testCase(fn: (n: number) => number) {
  it('示例一', () => {
    const n = 3;
    const expected = 0;
    expect(fn(n)).toBe(expected);
  });

  it('示例二', () => {
    const n = 5;
    const expected = 1;
    expect(fn(n)).toBe(expected);
  });

  it('示例三', () => {
    const n = 0;
    const expected = 0;
    expect(fn(n)).toBe(expected);
  });
}
