# 滑动窗口最大值

> 难度：困难
>
> https://leetcode-cn.com/problems/sliding-window-maximum/

## 题目

给你一个整数数组 `nums`，有一个大小为 `k` 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 `k` 个数字。滑动窗口每次只向右移动一位。

返回 滑动窗口中的最大值 。

### 示例

#### 示例 1：

```
输入：nums = [1,3,-1,-3,5,3,6,7], k = 3
输出：[3,3,5,5,6,7]
解释：
滑动窗口的位置                最大值
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
```

#### 示例 2：

```
输入：nums = [1], k = 1
输出：[1]
```

## 解题

### 优先队列

```ts
/**
 * 优先队列
 * @desc 时间复杂度 O(NlogN)  空间复杂度 O(N)
 * @param nums
 * @param k
 * @returns
 */
export function maxSlidingWindow(nums: number[], k: number): number[] {
  const queue = new PriorityQueue<[num: number, index: number]>(
    // 根据num继续排序，如果num相等根据index进行排序
    (a, b) => a[0] !== b[0] ? b[0] < a[0] : b[1] < a[1],
  )

  // 将前k个值入队
  for (let i = 0; i < k; i++)
    queue.offer([nums[i], i])

  const ans: number[] = []
  ans[0] = queue.peek()![0]

  // 遍历剩余值
  for (let i = k; i < nums.length; i++) {
    // 入队
    queue.offer([nums[i], i])

    // 如果队头的index不在滑动滑动区间内，则弹出
    while (queue.peek()![1] <= i - k)
      queue.poll()

    ans[i - k + 1] = queue.peek()![0]
  }

  return ans
}
```

### 单调队列

```ts
/**
 * 单调队列
 * @desc 时间复杂度 O(N)  空间复杂度 O(K)
 * @param nums
 * @param k
 * @returns
 */
export function maxSlidingWindow2(nums: number[], k: number): number[] {
  const len = nums.length
  const queue: number[] = []
  for (let i = 0; i < k; i++) {
    while (queue.length && nums[i] >= nums[queue[queue.length - 1]])
      queue.pop()

    queue.push(i)
  }

  const ans = [nums[queue[0]]]
  for (let i = k; i < len; i++) {
    while (queue.length && nums[i] >= nums[queue[queue.length - 1]])
      queue.pop()

    queue.push(i)

    while (queue[0] <= i - k)
      queue.shift()

    ans.push(nums[queue[0]])
  }

  return ans
}
```

### 分块 + 预处理

```ts
/**
 * 分块 + 预处理
 * @desc 时间复杂度 O(N)  空间复杂度 O(K)
 * @param nums
 * @param k
 * @returns
 */
export function maxSlidingWindow3(nums: number[], k: number): number[] {
  const len = nums.length
  const prefixMax = new Array<number>(len).fill(0)
  const suffixMax = new Array<number>(len).fill(0)

  for (let i = 0; i < len; i++) {
    if (i % k === 0)
      prefixMax[i] = nums[i]
    else
      prefixMax[i] = Math.max(prefixMax[i - 1], nums[i])
  }

  for (let i = len - 1; i >= 0; i--) {
    if ((i + 1) % k === 0)
      suffixMax[i] = nums[i]
    else
      suffixMax[i] = Math.max(suffixMax[i + 1], nums[i])
  }

  const ans: number[] = []
  for (let i = 0; i < len - k + 1; i++)
    ans.push(Math.max(suffixMax[i], prefixMax[i + k - 1]))

  return ans
}
```