import { isNumber, isNumber2 } from '.';
import { describe, it, expect } from 'vitest';

describe('有效数字', () => {
  describe('正则表达式', () => {
    testCase(isNumber);
  });

  describe('确定有限状态自动机', () => {
    testCase(isNumber2);
  });
});

function testCase(fn: (s: string) => boolean) {
  it.each([
    ['0', true],
    ['e', false],
    ['.', false],
    ['.1', true]
  ])('示例%#', (s, expected) => {
    expect(fn(s)).toBe(expected);
  });
}
