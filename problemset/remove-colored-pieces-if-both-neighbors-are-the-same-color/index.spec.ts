import { winnerOfGame } from '.';

describe('如果相邻两个颜色均相同则删除当前颜色', () => {
  testCase(winnerOfGame);
});

function testCase(fn: (colors: string) => boolean) {
  it('示例一', () => {
    const colors = 'AAABABB';
    const expected = true;
    expect(fn(colors)).toBe(expected);
  });

  it('示例二', () => {
    const colors = 'AA';
    const expected = false;
    expect(fn(colors)).toBe(expected);
  });

  it('示例三', () => {
    const colors = 'ABBBBBBBAAA';
    const expected = false;
    expect(fn(colors)).toBe(expected);
  });
}
