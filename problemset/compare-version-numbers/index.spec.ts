import { compareVersion, compareVersion2 } from '.';
import { describe, it, expect } from 'vitest';

describe('比较版本号', () => {
  describe('字符串分割', () => {
    testCase(compareVersion);
  });
  describe('双指针', () => {
    testCase(compareVersion2);
  });
});

function testCase(fn: (version1: string, version2: string) => number) {
  it.each([
    ['1.01', '1.001', 0],
    ['1.0', '1.0.0', 0],
    ['0.1', '1.1', -1]
  ])('示例%#', (version1, version2, expected) => {
    expect(fn(version1, version2)).toBe(expected);
  });
}
