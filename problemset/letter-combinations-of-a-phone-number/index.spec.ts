import { letterCombinations, letterCombinations2 } from './index';

describe('电话号码的字母组合', () => {
  describe('暴力解法', () => {
    testCase(letterCombinations);
  });

  describe('回溯', () => {
    testCase(letterCombinations2);
  });
});

function testCase(fn: (digits: string) => string[]) {
  test('示例一', () => {
    const digits = '23';
    const expected: string[] = ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'];

    checkExpected(fn(digits), expected);
  });

  test('示例二', () => {
    const digits = '';
    const expected: string[] = [];

    checkExpected(fn(digits), expected);
  });

  test('示例三', () => {
    const digits = '2';
    const expected: string[] = ['a', 'b', 'c'];

    checkExpected(fn(digits), expected);
  });
}

function checkExpected(ans: string[], expected: string[]) {
  expect(ans.length).toBe(expected.length);
  expect(ans.every((str) => expected.includes(str))).toBe(true);
}
