import { isPalindrome, isPalindrome1 } from './index';

describe('回文数', () => {
  describe('暴力解法', () => {
    testCase(isPalindrome);
  });

  describe('反转一半数字', () => {
    testCase(isPalindrome1);
  });
});

function testCase(fn: (x: number) => boolean) {
  test('示例一', () => {
    const x = 121;
    const expected = true;

    expect(fn(x)).toBe(expected);
  });

  test('示例二', () => {
    const x = -121;
    const expected = false;

    expect(fn(x)).toBe(expected);
  });

  test('示例三', () => {
    const x = 10;
    const expected = false;

    expect(fn(x)).toBe(expected);
  });

  test('示例四', () => {
    const x = -101;
    const expected = false;

    expect(fn(x)).toBe(expected);
  });
}
