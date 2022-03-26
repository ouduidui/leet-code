import { calPoints } from '.';
import { describe, it, expect } from 'vitest';

describe('棒球比赛', () => {
  testCase(calPoints);
});

function testCase(fn: (ops: string[]) => number) {
  it.each([
    [['5', '2', 'C', 'D', '+'], 30],
    [['5', '-2', '4', 'C', 'D', '9', '+', '+'], 27],
    [['1'], 1]
  ])('示例%#', (ops, expected) => {
    expect(fn(ops)).toBe(expected);
  });
}
