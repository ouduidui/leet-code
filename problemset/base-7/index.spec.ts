import { convertToBase7 } from './index';

describe('七进制数', () => {
  testCase(convertToBase7);
});

function testCase(fn: (num: number) => string) {
  it('示例一', () => {
    const num = 100;
    const expected = '202';
    expect(fn(num)).toBe(expected);
  });

  it('示例二', () => {
    const num = -7;
    const expected = '-10';
    expect(fn(num)).toBe(expected);
  });
}
