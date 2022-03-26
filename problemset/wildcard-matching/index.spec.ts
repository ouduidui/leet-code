import { isMatch } from '.';
import { describe, it, expect } from 'vitest';

describe('通配符匹配', () => {
  describe('动态规划', () => {
    testCase(isMatch);
  });
});

function testCase(fn: (s: string, p: string) => boolean) {
  it.each([
    ['aa', 'a', false],
    ['aa', '*', true],
    ['cb', '?a', false],
    ['adceb', '*a*b', true],
    ['acdcb', 'a*c?b', false]
  ])('示例%#', (s, p, expected) => {
    expect(fn(s, p)).toBe(expected);
  });
}
