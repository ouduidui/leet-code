import { convert } from '.';
import { describe, it, expect } from 'vitest';

describe('Z字形变换', () => {
  describe('按行排序', () => {
    testCase(convert);
  });
});

function testCase(fn: (s: string, numRows: number) => string) {
  it.each([
    ['PAYPALISHIRING', 3, 'PAHNAPLSIIGYIR'],
    ['PAYPALISHIRING', 4, 'PINALSIGYAHRPI'],
    ['A', 1, 'A']
  ])('示例%#', (s, numRows, expected) => {
    expect(fn(s, numRows)).toBe(expected);
  });
}
