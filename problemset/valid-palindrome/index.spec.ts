import { isPalindrome } from './index';

describe('验证回文串', () => {
  testCase(isPalindrome);
});

function testCase(fn: (s: string) => boolean) {
  it('示例一', () => {
    const s = 'A man, a plan, a canal: Panama';
    const expected = true;
    expect(fn(s)).toBe(expected);
  });

  it('示例二', () => {
    const s = 'race a car';
    const expected = false;
    expect(fn(s)).toBe(expected);
  });
}
