import { complexNumberMultiply } from './index';

describe('复数乘法', () => {
  testCase(complexNumberMultiply);
});

function testCase(fn: (num1: string, num2: string) => string) {
  it('示例一', () => {
    const num1 = '1+1i';
    const num2 = '1+1i';
    const expected = '0+2i';

    expect(fn(num1, num2)).toBe(expected);
  });

  it('示例二', () => {
    const num1 = '1+-1i';
    const num2 = '1+-1i';
    const expected = '0+-2i';

    expect(fn(num1, num2)).toBe(expected);
  });
}
