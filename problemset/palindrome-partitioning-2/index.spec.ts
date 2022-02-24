import { minCut } from './index';

describe('分割回文串 II', () => {
  testCase(minCut);
});

function testCase(fn: (s: string) => number) {
  it('示例一', () => {
    const s = 'aab';
    const expected = 1;
    expect(fn(s)).toBe(expected);
  });

  it('示例二', () => {
    const s = 'a';
    const expected = 0;
    expect(fn(s)).toBe(expected);
  });

  it('示例三', () => {
    const s = 'ab';
    const expected = 1;
    expect(fn(s)).toBe(expected);
  });
}
