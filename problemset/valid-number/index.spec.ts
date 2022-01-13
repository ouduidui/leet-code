import { isNumber, isNumber2 } from './index';

describe('有效数字', () => {
  describe('正则表达式', () => {
    testCase(isNumber);
  });

  describe('确定有限状态自动机', () => {
    testCase(isNumber2);
  });
});

function testCase(fn: (s: string) => boolean) {
  it('示例一', () => {
    const s = '0';
    expect(fn(s)).toBe(true);
  });

  it('示例二', () => {
    const s = 'e';
    expect(fn(s)).toBe(false);
  });

  it('示例三', () => {
    const s = '.';
    expect(fn(s)).toBe(false);
  });

  it('示例四', () => {
    const s = '.1';
    expect(fn(s)).toBe(true);
  });
}
