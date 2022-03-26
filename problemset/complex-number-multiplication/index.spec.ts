import { complexNumberMultiply } from '.';
import { describe, it, expect } from 'vitest';

describe('复数乘法', () => {
  testCase(complexNumberMultiply);
});

function testCase(fn: (num1: string, num2: string) => string) {
  it.each([
    ['1+1i', '1+1i', '0+2i'],
    ['1+-1i', '1+-1i', '0+-2i']
  ])('示例%#', (num1, num2, expected) => {
    expect(fn(num1, num2)).toBe(expected);
  });
}
