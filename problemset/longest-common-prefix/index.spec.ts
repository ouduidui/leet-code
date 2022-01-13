import { longestCommonPrefix } from './index';

describe('最长公共前缀', () => {
  describe('暴力解法', () => {
    testCase(longestCommonPrefix);
  });
});

function testCase(fn: (strs: string[]) => string) {
  test('实例一', () => {
    const strs: string[] = ['flower', 'flow', 'flight'];
    const expected = 'fl';

    expect(fn(strs)).toEqual(expected);
  });

  test('实例二', () => {
    const strs: string[] = ['dog', 'racecar', 'car'];
    const expected = '';

    expect(fn(strs)).toEqual(expected);
  });
}
