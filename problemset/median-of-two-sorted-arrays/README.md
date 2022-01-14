# 寻找两个正序数组的中位数

> 难度：困难
>
> https://leetcode-cn.com/problems/median-of-two-sorted-arrays/

## 题目

给定两个大小分别为 m 和 n 的正序（从小到大）数组`nums1`和`nums2`。请你找出并返回
这两个正序数组的**中位数** 。

### 示例

#### 示例 1：

```
输入：nums1 = [1,3], nums2 = [2]
输出：2.00000
解释：合并数组 = [1,2,3] ，中位数 2
```

#### 示例 2：

```
输入：nums1 = [1,2], nums2 = [3,4]
输出：2.50000
解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5
```

#### 示例 3：

```
输入：nums1 = [0,0], nums2 = [0,0]
输出：0.00000
```

#### 示例 4：

```
输入：nums1 = [], nums2 = [1]
输出：1.00000
```

#### 示例 5：

```
输入：nums1 = [2], nums2 = []
输出：2.00000
```

## 解法

### 暴力解法

```typescript
/**
 * 暴力解法
 * @desc 时间复杂度 O((n+m)log(n+m)) 空间复杂度 O(n+m)
 * @desc https://segmentfault.com/a/1190000010648740
 * @param nums1 {Array<number>}
 * @param nums2 {Array<number>}
 * @return {number}
 */
export function findMedianSortedArrays(
  nums1: number[],
  nums2: number[]
): number {
  // 合并数组
  let nums: number[] = [...nums1, ...nums2];

  const len = nums.length;
  if (len === 1) return nums[0];

  // 使用sort对数组进行排序
  nums = nums.sort((a, b) => a - b);
  // 判断数组长度，返回中位数
  if (len % 2) {
    // 奇数长度
    return nums[(len - 1) / 2];
  } else {
    // 偶数长度
    return (nums[len / 2] + nums[len / 2 - 1]) / 2;
  }
}
```

### 二分法

```typescript
/**
 * 二分法
 * @desc 时间复杂度 O(log(n+m)) 空间复杂度 O(1)
 * @param nums1 {Array<number>}
 * @param nums2 {Array<number>}
 * @return {number}
 */
export function findMedianSortedArrays2(
  nums1: number[],
  nums2: number[]
): number {
  // 总长度
  const len: number = nums1.length + nums2.length;

  // 判断是奇数还是偶数
  if (len % 2) {
    const middleIdx: number = (len - 1) / 2;
    return getMiddleNum(nums1, nums2, middleIdx, false);
  } else {
    const middleIdx: number = len / 2; // 获取第二个中位值idx
    return getMiddleNum(nums1, nums2, middleIdx, true);
  }

  /**
   * 获取数组的中位值
   * @param nums1 {Array<number>}
   * @param nums2 {Array<number>}
   * @param middleIdx {number}
   * @param isEven {boolean} 是否为偶数
   */
  function getMiddleNum(
    nums1: Array<number>,
    nums2: Array<number>,
    middleIdx: number,
    isEven: boolean = false
  ): number {
    let idx1: number = 0;
    let idx2: number = 0;

    let prevMiddleNum: number = NaN;
    let middleNum: number = NaN;

    // 遍历
    while (idx1 + idx2 <= middleIdx) {
      // 获取两个数组当前值
      const num1: number = nums1[idx1];
      const num2: number = nums2[idx2];

      if (num1 === num2) {
        // 如果num1等于num2，判断idx1和idx2是否来到临界值，如果是的话，只进一位；如果不是的话进两位
        idx1 + idx2 < middleIdx
          ? (prevMiddleNum = middleNum = num1)
          : setMiddleNum(num1);
        idx1++;
        idx2++;
      } else if (num1 < num2 || (!num2 && num2 !== 0)) {
        // 如果num1小于num2，或者num2没有值
        idx1++;
        setMiddleNum(num1);
      } else if (num1 > num2 || (!num1 && num1 !== 0)) {
        // 如果num1大于num2，或者num1没有值
        idx2++;
        setMiddleNum(num2);
      }
    }

    return isEven ? (prevMiddleNum + middleNum) / 2 : middleNum;

    /**
     * 设置中位数
     * @param num {number}
     */
    function setMiddleNum(num: number): void {
      if (isNaN(middleNum)) {
        prevMiddleNum = middleNum = num;
      } else {
        prevMiddleNum = middleNum;
        middleNum = num;
      }
    }
  }
}
```

### 划分数组

```typescript
/**
 * 划分数组
 * @desc 时间复杂度 O(log min(n,m)) 空间复杂度 O(1)
 * @param nums1 {Array<number>}
 * @param nums2 {Array<number>}
 * @return {number}
 */
export function findMedianSortedArrays3(
  nums1: number[],
  nums2: number[]
): number {
  // 确保nums1长度小于nums2
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays3(nums2, nums1);
  }

  const len1: number = nums1.length;
  const len2: number = nums2.length;

  // 前一部分的最大值
  let median1: number = 0;
  // 后一部分的最小值
  let median2: number = 0;

  let left: number = 0;
  let right: number = len1;

  while (left <= right) {
    // 前一部分包含 nums1[0 .. i-1] 和 nums2[0 .. j-1]
    // 后一部分包含 nums1[i .. len1-1] 和 nums2[j .. len2-1]
    let i: number = Math.floor((left + right) / 2);
    let j: number = Math.floor((len1 + len2 + 1) / 2) - i;

    // nums_im1, nums_i, nums_jm1, nums_j 分别表示 nums1[i-1], nums1[i], nums2[j-1], nums2[j]
    let num_im1: number = i === 0 ? -Infinity : nums1[i - 1];
    let num_i: number = i === len1 ? Infinity : nums1[i];
    let num_jm1: number = j === 0 ? -Infinity : nums2[j - 1];
    let num_j: number = j === len2 ? Infinity : nums2[j];

    if (num_im1 <= num_j) {
      median1 = Math.max(num_im1, num_jm1);
      median2 = Math.min(num_i, num_j);
      left = i + 1;
    } else {
      right = i - 1;
    }
  }

  return (len1 + len2) % 2 ? median1 : (median1 + median2) / 2;
}
```
