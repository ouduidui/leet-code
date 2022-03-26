import { titleToNumber } from '.';
// need refactor
import { describe, it, expect } from 'vitest';
describe('Excel 表列序号', () => {
  testCase(titleToNumber);
});

function testCase(fn: (columnTitle: string) => number) {
  it('示例一', () => {
    const columnTitle = 'A';
    const expected = 1;
    expect(fn(columnTitle)).toBe(expected);
  });

  it('示例二', () => {
    const columnTitle = 'AB';
    const expected = 28;
    expect(fn(columnTitle)).toBe(expected);
  });

  it('示例三', () => {
    const columnTitle = 'ZY';
    const expected = 701;
    expect(fn(columnTitle)).toBe(expected);
  });
}
