/**
 * 动态规划
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param height {number[]}
 * @return {number}
 */
export function trap(height: number[]): number {
  const len = height.length
  if (!len) return 0

  // 记录从左到右扫描的最大值数组
  const leftMax: number[] = new Array(len).fill(0)
  for (let i = 0; i < len; i++)
    leftMax[i] = i === 0 ? height[i] : Math.max(leftMax[i - 1], height[i])

  // 记录从右到左扫描的最大值数组
  const rightMax = new Array(len).fill(0)
  for (let i = len - 1; i >= 0; i--) {
    rightMax[i]
      = i === len - 1 ? height[i] : Math.max(rightMax[i + 1], height[i])
  }

  let ans = 0
  // leftMax和rightMax重叠的区域减掉height[i]就是对应区域的接水量
  for (let i = 0; i < len; i++)
    ans += Math.min(leftMax[i], rightMax[i]) - height[i]

  return ans
}

/**
 * 单调栈
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param height {number[]}
 * @return {number}
 */
export function trap2(height: number[]): number {
  let ans = 0
  const stack: number[] = []
  for (let i = 0; i < height.length; i++) {
    while (
      stack.length
      && /* 栈有值 */ height[i]
        > height[stack[stack.length - 1]] /* 当前高度比上一个高度高的话 */
    ) {
      // 获取栈顶，并弹出
      const top = stack.pop() as number

      // 确保栈还有值
      if (!stack.length) break

      // 获取左边坐标
      const left = stack[stack.length - 1] as number
      // 计算出宽高
      const w = i - left - 1
      const h = Math.min(height[left], height[i]) - height[top]
      ans += w * h
    }

    // 入栈
    stack.push(i)
  }

  return ans
}

/**
 * 双指针
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param height {number[]}
 * @return {number}
 */
export function trap3(height: number[]): number {
  let ans = 0

  let left = 0
  let right: number = height.length - 1
  let leftMaxHeight = 0
  let rightMaxHeight = 0

  while (left < right) {
    // 更新左右最大高度
    leftMaxHeight = Math.max(leftMaxHeight, height[left])
    rightMaxHeight = Math.max(rightMaxHeight, height[right])

    if (height[left] < height[right]) {
      // 当height[left] < height[right] 在动态规划中必有leftMax[left] < rightMax[left]
      // 因此在动态规划中，此时的高度为 Math.min(leftMax[left], rightMax[left]) - height[left]
      // 即 leftMaxHeight - height[left]
      ans += leftMaxHeight - height[left]
      left++
    }
    else {
      // 同理，当height[left] >= height[right] 在动态规划中必有leftMax[right] >= rightMax[right]
      // 因此在动态规划中，此时的高度为 Math.min(leftMax[right], rightMax[right]) - height[right]
      // 即 rightMaxHeight - height[right]
      ans += rightMaxHeight - height[right]
      right--
    }
  }

  return ans
}
