import { isHappy, isHappy2 } from '.';
// need refactor
import { describe, it, expect } from 'vitest';
describe('快乐数', () => {
  describe('用哈希集合检测循环', () => {
    testCase(isHappy);
  });

  describe('快慢指针法', () => {
    testCase(isHappy2);
  });
});

function testCase(fn: (n: number) => boolean) {
  it('示例一', () => {
    const n = 19;
    const expected = true;
    expect(fn(n)).toBe(expected);
  });

  it('示例一', () => {
    const n = 2;
    const expected = false;
    expect(fn(n)).toBe(expected);
  });
}
