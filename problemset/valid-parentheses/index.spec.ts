import { isValid } from '.';
import { describe, it, expect } from 'vitest';

describe('有效的括号', () => {
  testCase(isValid);
});

function testCase(fn: (s: string) => boolean) {
  it.each([
    ['()', true],
    ['()[]{}', true],
    ['(]', false],
    ['([)]', false],
    ['{[]}', true]
  ])('示例%#', (s, expected) => {
    expect(fn(s)).toBe(expected);
  });
}
