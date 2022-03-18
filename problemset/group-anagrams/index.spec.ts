import { twoDimensionalArrayEqual } from '~/utils/tools';
import { groupAnagrams } from './index';

describe('字母异位词分组', () => {
  describe('排序', () => {
    testCase(groupAnagrams);
  });
});

function testCase(fn: (strs: string[]) => string[][]) {
  it('示例一', () => {
    const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
    const expected = [['bat'], ['nat', 'tan'], ['ate', 'eat', 'tea']];

    twoDimensionalArrayEqual(fn(strs), expected, true);
  });

  it('示例二', () => {
    const strs = [''];
    const expected = [['']];

    twoDimensionalArrayEqual(fn(strs), expected, true);
  });

  it('示例三', () => {
    const strs = ['a'];
    const expected = [['a']];

    twoDimensionalArrayEqual(fn(strs), expected, true);
  });
}
