import { grayCode, grayCode2 } from '.';
// need refactor
import { describe, it, expect } from 'vitest';
describe('格雷编码', () => {
  describe('对称生成', () => {
    testCase(grayCode);
  });

  describe('二进制数转格雷码', () => {
    testCase(grayCode2);
  });
});

function testCase(fn: (n: number) => number[]) {
  it('示例一', () => {
    const n = 2;
    const expected = [0, 1, 3, 2];
    expect(fn(n)).toStrictEqual(expected);
  });

  it('示例二', () => {
    const n = 1;
    const expected = [0, 1];
    expect(fn(n)).toStrictEqual(expected);
  });
}
