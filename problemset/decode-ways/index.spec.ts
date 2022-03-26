import { numDecodings } from '.';
// need refactor
import { describe, it, expect } from 'vitest';
describe('解码方法', () => {
  testCase(numDecodings);
});

function testCase(fn: (s: string) => number) {
  it('示例一', () => {
    const s = '12';
    const expected = 2;
    expect(fn(s)).toBe(expected);
  });

  it('示例二', () => {
    const s = '226';
    const expected = 3;
    expect(fn(s)).toBe(expected);
  });

  it('示例三', () => {
    const s = '0';
    const expected = 0;
    expect(fn(s)).toBe(expected);
  });

  it('示例四', () => {
    const s = '06';
    const expected = 0;
    expect(fn(s)).toBe(expected);
  });

  it('示例五', () => {
    const s = '2101';
    const expected = 1;
    expect(fn(s)).toBe(expected);
  });
}
