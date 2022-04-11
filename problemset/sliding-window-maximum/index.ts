import { PriorityQueue } from '~/utils/priorityQueue'

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
