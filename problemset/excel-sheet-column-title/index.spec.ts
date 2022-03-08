import { convertToTitle, convertToTitle2 } from './index';

describe('Excel表列名称', () => {
  describe('数学', () => {
    testCase(convertToTitle);
  });

  describe('数学 - 优化', () => {
    testCase(convertToTitle2);
  });
});

function testCase(fn: (columnNumber: number) => string) {
  it('示例一', () => {
    const columnNumber = 1;
    const expected = 'A';
    expect(fn(columnNumber)).toBe(expected);
  });

  it('示例二', () => {
    const columnNumber = 28;
    const expected = 'AB';
    expect(fn(columnNumber)).toBe(expected);
  });

  it('示例三', () => {
    const columnNumber = 701;
    const expected = 'ZY';
    expect(fn(columnNumber)).toBe(expected);
  });

  it('示例四', () => {
    const columnNumber = 2147483647;
    const expected = 'FXSHRXW';
    expect(fn(columnNumber)).toBe(expected);
  });
}
