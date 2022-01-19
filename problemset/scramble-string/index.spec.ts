import { isScramble } from './index';

describe('扰乱字符串', () => {
  testCase(isScramble);
});

function testCase(fn: (s1: string, s2: string) => boolean) {
  it('示例一', () => {
    const s1 = 'great';
    const s2 = 'rgeat';
    const expected = true;

    expect(fn(s1, s2)).toBe(expected);
  });

  it('示例二', () => {
    const s1 = 'abcde';
    const s2 = 'caebd';
    const expected = false;

    expect(fn(s1, s2)).toBe(expected);
  });

  it('示例三', () => {
    const s1 = 'a';
    const s2 = 'a';
    const expected = true;

    expect(fn(s1, s2)).toBe(expected);
  });
}
