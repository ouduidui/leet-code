import { pushDominoes, pushDominoes2 } from './index';

describe('推多米诺', () => {
  describe('广度优先搜索', () => {
    testCase(pushDominoes);
  });

  describe('模拟', () => {
    testCase(pushDominoes2);
  });
});

function testCase(fn: (dominoes: string) => string) {
  it('示例一', () => {
    const dominoes = 'RR.L';
    const expected = 'RR.L';
    expect(fn(dominoes)).toBe(expected);
  });

  it('示例二', () => {
    const dominoes = '.L.R...LR..L..';
    const expected = 'LL.RR.LLRRLL..';
    expect(fn(dominoes)).toBe(expected);
  });
}
