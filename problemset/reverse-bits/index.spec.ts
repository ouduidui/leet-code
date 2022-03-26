import { reverseBits, reverseBits2 } from '.';
// need refactor
import { describe, it, expect } from 'vitest';
describe('颠倒二进制位', () => {
  describe('逐位颠倒', () => {
    testCase(reverseBits);
  });

  describe('位运算分治', () => {
    testCase(reverseBits2);
  });
});

function testCase(fn: (n: number) => number) {
  it('示例一', () => {
    const n = 0b00000010100101000001111010011100;
    const expected = 0b00111001011110000010100101000000;
    expect(fn(n)).toBe(expected);
  });

  it('示例二', () => {
    const n = 0b11111111111111111111111111111101;
    const expected = 0b10111111111111111111111111111111;
    expect(fn(n)).toBe(expected);
  });
}
