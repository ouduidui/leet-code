import { validUtf8 } from './index';

describe('UTF-8 编码验证', () => {
  testCase(validUtf8);
});

function testCase(fn: (data: number[]) => boolean) {
  it('示例一', () => {
    const data = [197, 130, 1];
    const expected = true;
    expect(fn(data)).toBe(expected);
  });

  it('示例二', () => {
    const data = [235, 140, 4];
    const expected = false;
    expect(fn(data)).toBe(expected);
  });
}
