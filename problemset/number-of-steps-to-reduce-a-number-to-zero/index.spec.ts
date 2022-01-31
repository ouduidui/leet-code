import { numberOfSteps } from './index';

describe('将数字变成 0 的操作次数', () => {
  testCase(numberOfSteps);
});

function testCase(fn: (num: number) => number) {
  it('示例一', () => {
    const num = 14;
    const expected = 6;
    expect(fn(num)).toBe(expected);
  });

  it('示例二', () => {
    const num = 8;
    const expected = 4;
    expect(fn(num)).toBe(expected);
  });

  it('示例三', () => {
    const num = 123;
    const expected = 12;
    expect(fn(num)).toBe(expected);
  });
}
