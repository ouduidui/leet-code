import { addDigits, addDigits2 } from './index';

describe('各位相加', () => {
  describe('模拟', () => {
    testCase(addDigits);
  });

  describe('数学', () => {
    testCase(addDigits2);
  });
});

function testCase(fn: (num: number) => number) {
  it('示例一', () => {
    const num = 38;
    const expected = 2;
    expect(fn(num)).toBe(expected);
  });

  it('示例二', () => {
    const num = 0;
    const expected = 0;
    expect(fn(num)).toBe(expected);
  });
}
