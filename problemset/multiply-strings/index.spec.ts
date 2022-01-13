import { multiply } from './index';

describe('字符串相乘', () => {
  describe('做乘法', () => {
    testCase(multiply);
  });
});

function testCase(fn: (num1: string, num2: string) => string) {
  it('示例一', () => {
    const num1 = '2';
    const num2 = '3';
    const expected = '6';

    expect(fn(num1, num2)).toBe(expected);
  });

  it('示例二', () => {
    const num1 = '123';
    const num2 = '456';
    const expected = '56088';

    expect(fn(num1, num2)).toBe(expected);
  });
}
