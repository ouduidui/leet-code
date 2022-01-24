import { isInterleave, isInterleave2 } from './index';

describe('交错字符串', () => {
  describe('动态规划', function () {
    testCase(isInterleave);
  });

  describe('动态规划 - 滚动数组', function () {
    testCase(isInterleave2);
  });
});

function testCase(fn: (s1: string, s2: string, s3: string) => boolean) {
  it('示例一', () => {
    const s1 = 'aabcc';
    const s2 = 'dbbca';
    const s3 = 'aadbbcbcac';
    const expected = true;

    expect(fn(s1, s2, s3)).toBe(expected);
  });

  it('示例二', () => {
    const s1 = 'aabcc';
    const s2 = 'dbbca';
    const s3 = 'aadbbbaccc';
    const expected = false;

    expect(fn(s1, s2, s3)).toBe(expected);
  });

  it('示例三', () => {
    const s1 = '';
    const s2 = '';
    const s3 = '';
    const expected = true;

    expect(fn(s1, s2, s3)).toBe(expected);
  });
}
