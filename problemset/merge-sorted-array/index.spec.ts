import { merge } from './index';

describe('合并两个有序数组', () => {
  testCase(merge);
});

function testCase(
  fn: (nums1: number[], m: number, nums2: number[], n: number) => void
) {
  it('示例一', () => {
    const nums1 = [1, 2, 3, 0, 0, 0];
    const m = 3;
    const nums2 = [2, 5, 6];
    const n = 3;
    const expected = [1, 2, 2, 3, 5, 6];
    fn(nums1, m, nums2, n);
    expect(nums1).toStrictEqual(expected);
  });

  it('示例二', () => {
    const nums1 = [1];
    const m = 1;
    const nums2: number[] = [];
    const n = 0;
    const expected = [1];
    fn(nums1, m, nums2, n);
    expect(nums1).toStrictEqual(expected);
  });

  it('示例三', () => {
    const nums1 = [0];
    const m = 0;
    const nums2: number[] = [1];
    const n = 1;
    const expected = [1];
    fn(nums1, m, nums2, n);
    expect(nums1).toStrictEqual(expected);
  });
}
