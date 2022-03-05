import { compareVersion, compareVersion2 } from './index';

describe('比较版本号', () => {
  describe('字符串分割', () => {
    testCase(compareVersion);
  });
  describe('双指针', () => {
    testCase(compareVersion2);
  });
});

function testCase(fn: (version1: string, version2: string) => number) {
  it('示例一', () => {
    const version1 = '1.01';
    const version2 = '1.001';
    const expected = 0;
    expect(fn(version1, version2)).toBe(expected);
  });

  it('示例二', () => {
    const version1 = '1.0';
    const version2 = '1.0.0';
    const expected = 0;
    expect(fn(version1, version2)).toBe(expected);
  });

  it('示例三', () => {
    const version1 = '0.1';
    const version2 = '1.1';
    const expected = -1;
    expect(fn(version1, version2)).toBe(expected);
  });
}
