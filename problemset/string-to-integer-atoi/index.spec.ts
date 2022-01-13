import { myAtoi, myAtoi2 } from './index';

describe('字符串转换整数(atoi)', () => {
  describe('暴力解法', () => {
    testCase(myAtoi);
  });

  describe('自动机', () => {
    testCase(myAtoi2);
  });
});

function testCase(fn: (s: string) => number) {
  test('示例一', () => {
    const s = '42';
    const expected = 42;

    expect(fn(s)).toBe(expected);
  });

  test('示例二', () => {
    const s = '   -42';
    const expected = -42;

    expect(fn(s)).toBe(expected);
  });

  test('示例三', () => {
    const s = '4193 with words';
    const expected = 4193;

    expect(fn(s)).toBe(expected);
  });

  test('示例四', () => {
    const s = 'words and 987';
    const expected = 0;

    expect(fn(s)).toBe(expected);
  });

  test('示例五', () => {
    const s = '-91283472332';
    const expected = -2147483648;

    expect(fn(s)).toBe(expected);
  });

  test('示例六', () => {
    const s = '   +0 123';
    const expected = 0;

    expect(fn(s)).toBe(expected);
  });
}
