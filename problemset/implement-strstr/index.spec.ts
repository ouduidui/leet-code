import { strStr, strStr2 } from './index';

describe('实现strStr()', () => {
  describe('暴力解法', () => {
    testCase(strStr);
  });

  describe('KMP解法', () => {
    testCase(strStr2);
  });
});

function testCase(fn: (haystack: string, needle: string) => number) {
  test('示例一', () => {
    const haystack = 'hello';
    const needle = 'll';
    const expected = 2;

    expect(fn(haystack, needle)).toBe(expected);
  });

  test('示例二', () => {
    const haystack = 'aaaaa';
    const needle = 'bba';
    const expected = -1;

    expect(fn(haystack, needle)).toBe(expected);
  });

  test('示例三', () => {
    const haystack = '';
    const needle = '';
    const expected = 0;

    expect(fn(haystack, needle)).toBe(expected);
  });
}
