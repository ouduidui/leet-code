/**
 * 暴力解法
 * @desc 时间复杂度 O((n+m)log(n+m)) 空间复杂度 O(n+m)
 * @desc https://segmentfault.com/a/1190000010648740
 * @param nums1<Array<number>>
 * @param nums2<Array<number>>
 * @return number
 */
export function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    // 合并数组
    let nums: number[] = [...nums1, ...nums2];

    const len = nums.length;
    if (len === 1) return nums[0];

    // 使用sort对数组进行排序
    nums = nums.sort((a, b) => a - b);
    // 判断数组长度，返回中位数
    if (len % 2) {
        return nums[(len - 1) / 2]
    } else {
        return (nums[len / 2] + nums[len / 2 - 1]) / 2
    }
}
