# 得分最高的最小轮调

> 难度：困难
>
> https://leetcode-cn.com/problems/smallest-rotation-with-highest-score/

## 题目

给你一个数组  `nums`，我们可以将它按一个非负整数 `k` 进行轮调，这样可以使数组变
为
 `[nums[k], nums[k + 1], ... nums[nums.length - 1], nums[0], nums[1], ..., nums[k-1]]` 
的形式。此后，任何值小于或等于其索引的项都可以记作一分。

- 例如，数组为  `nums = [2,4,1,3,0]`，我们按  `k = 2`  进行轮调后，它将变成
   `[1,3,0,2,4]`。这将记为 `3` 分，因为
  `1 > 0 [不计分]、3 > 1 [不计分]、0 <= 2 [计 1 分]、2 <= 3 [计 1 分]，4 <= 4 [计 1 分]`。

在所有可能的轮调中，返回我们所能得到的最高分数对应的轮调下标 `k` 。如果有多个答
案，返回满足条件的最小的下标 `k` 。

### 示例

#### 示例 1：

```
输入：nums = [2,3,1,4,0]
输出：3
解释：
下面列出了每个 k 的得分：
k = 0,  nums = [2,3,1,4,0],    score 2
k = 1,  nums = [3,1,4,0,2],    score 3
k = 2,  nums = [1,4,0,2,3],    score 3
k = 3,  nums = [4,0,2,3,1],    score 4
k = 4,  nums = [0,2,3,1,4],    score 3
所以我们应当选择 k = 3，得分最高。
```

#### 示例 2：

```
输入：nums = [1,3,0,2,4]
输出：0
解释：
nums 无论怎么变化总是有 3 分。
所以我们将选择最小的 k，即 0。
```

## 解题

### 暴力解法

```typescript
/**
 * 暴力解法
 * @desc 时间复杂度 O(N^2)  空间复杂度 O(1)
 * @param nums
 */
export function bestRotation(nums: number[]): number {
  const len = nums.length;
  let maxScore = 0;
  let k = 0;
  let result = 0;

  while (k < len) {
    let score = 0;
    for (let i = 0; i < len; i++) {
      if (nums[(i + k) % len] <= i) score++;
    }

    if (score > maxScore) {
      maxScore = score;
      result = k;
    }

    k++;
  }

  return result;
}
```

### 差分数组

对于数组`nums`中的元素`x`，当`x`所在下标大于或等于`x`时，元素`x`会记`1`分。因此
元素`x`记一分的下标范围是`[x, len - 1]`，有`len - x`个下标，元素`x`不计分的下标
范围是`[0, x - 1]`，有`x`个下标。

假设元素`x`的初始下标为`i`，则当轮调下标为`k`时，元素`x`位于下
标`(i - k + len) mod len`。如果元素`x`记`1`分，则有`(i - k + n) mod len ≥ x`，等
价于 `k ≤ (i - x + len) mod len`。由于元素`x`记`1`分的下标由`len-x`个，因此
有`k ≥ (i + 1) mod len`。

将取模运算去掉之后，可以得到`k`的实际取值范围：

- 当`i < x`时，`i + 1 ≤ k ≤ i - x + len`；
- 当`i ≥ x`时，`k ≥ i + 1`或`k ≤ i - x`。

对于数组 · 中的每个元素，都可以根据元素值与元素所在下标计算该元素记 `1` 分的轮调
下标范围。遍历所有元素之后，即可得到每个轮调下标对应的计 `1` 分的元素个数，计
`1` 分的元素个数最多的轮调下标即为得分最高的轮调下标。如果存在多个得分最高的轮调
下标，则取其中最小的轮调下标。

创建长度为 `len` 的数组 `points`，其中 `points[k]` 表示轮调下标为 `k` 时的得分。
对于数组 `nums` 中的每个元素，得到该元素记 `1` 分的轮调下标范围，然后将数组
`points` 的该下标范围内的所有元素加 `1`。当数组 `points` 中的元素值确定后，找到
最大元素的最小下标。该做法的时间复杂度仍然是 `O(n^2)`，为了降低时间复杂度，需要
利用差分数组。

假设元素`x`的初始下标为`i`，当`i < x`时应将`points`的下标范
围`[i + 1, i - x + len]`内所有元素加`1`，当`i ≥ x`时应将`points`的下标范
围`[0, i + 1]`和`[i - x, len - 1]`内的所有元素加`1`。由于是将一段或两段连续下标
范围内的元素加`1`，因此可以使用差分数组实现。定义长度为`len`的差分数组`diffs`，
其中`diffs[k] = points[k] - points[k - 1]`（特别地，`points[-1] = 0`），具体做法
是：令`low = (i + 1) mod len`，`high = (i - x + len + 1) mod len`，
将`diffs[low]`的值加`1`，将`diffs[high]`的值减`1`，如果`low > high`则
将`diffs[0]`的值加`1`。

遍历数组`nums`的所有元素并更新差分数组之后，遍历数组`diffs`并计算前缀和，则每个
下标处的前缀和表示当前轮调下标处的得分。在遍历过程中维护最大得分和最大得分的最小
轮调下标，遍历结束之后即可得到结果。

差分数组做法的正确性证明需要考虑 `low` 和 `high` 的不同情况。

- 如果 `low≤ high−1 < len − 1`，则有 `low < high < len`，更新 `diffs` 等价于将数
  组 `points` 的下标范围 `[low,high−1]` 内的所有元素加 1。
- 如果 `low ≤ high + len − 1 = len − 1`，则有 `0 = high ≤ low`，更新 `diffs` 等
  价于将数组 `points` 的下标范围 `[low,len − 1]` 内的所有元素加 `1`，`diffs[0]`
  先减 `1` 后加 `1` 因此 `diffs[0]` 没有变化，同第 1 种情况。
- 如果 `low ≥ high = 0`，则需要将 `diffs[0]` 加 `1`，更新 `diffs` 等价于将数组
  `points` 的下标范围 `[low,len − 1]` 和 `[0,high − 1]` 内的所有元素加 `1`。

上述三种情况对应的更新数组 `points` 的效果都符合预期，因此差分数组的做法可以得到
正确的结果。

```typescript
/**
 * 差分数组
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param nums
 */
export function bestRotation2(nums: number[]): number {
  const len = nums.length;
  // 差分数组，下标为轮调次数k，值为该轮调次数相对上一次轮调的得分差
  const diffs = new Array(len).fill(0);
  for (let i = 0; i < len; i++) {
    // nums[i]在 [low, high) 范围内会得分
    const low = (i + 1) % len;
    const high = (i - nums[i] + len + 1) % len;
    diffs[low]++;
    diffs[high]--;
    if (low >= high) diffs[0]++;
  }

  let bestIdx = 0;
  let maxScore = 0;
  let score = 0;
  for (let i = 0; i < len; i++) {
    score += diffs[i];
    if (score > maxScore) {
      bestIdx = i;
      maxScore = score;
    }
  }

  return bestIdx;
}
```
