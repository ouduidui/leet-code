import { evalRPN } from './index';

describe('逆波兰表达式求值', () => {
  testCase(evalRPN);
});

function testCase(fn: (tokens: string[]) => number) {
  it('示例一', () => {
    const tokens = ['2', '1', '+', '3', '*'];
    const expected = 9;
    expect(fn(tokens)).toBe(expected);
  });

  it('示例二', () => {
    const tokens = ['4', '13', '5', '/', '+'];
    const expected = 6;
    expect(fn(tokens)).toBe(expected);
  });

  it('示例三', () => {
    const tokens = [
      '10',
      '6',
      '9',
      '3',
      '+',
      '-11',
      '*',
      '/',
      '*',
      '17',
      '+',
      '5',
      '+'
    ];
    const expected = 22;
    expect(fn(tokens)).toBe(expected);
  });
}
