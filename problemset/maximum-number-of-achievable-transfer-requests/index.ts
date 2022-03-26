/**
 * 回溯 + 枚举
 * @desc 时间复杂度 O(2^M)  空间复杂度 O(M + N)
 * @param n
 * @param requests
 */
export function maximumRequests(n: number, requests: number[][]): number {
  // 记录每栋的变化率，初始为 0
  const delta = new Array(n).fill(0)
  let ans = 0
  backTrack(requests, 0, n, 0)
  return ans

  function backTrack(
    requests: number[][],
    index: number,
    zeroCount: number,
    count: number,
  ) {
    // 如果处理完全部请求
    if (index === requests.length) {
      if (zeroCount === n) ans = Math.max(ans, count)
      return
    }

    // 不批准第index个人的请求，继续看下一个人的请求
    backTrack(requests, index + 1, zeroCount, count)

    // 批准这个人的请求的话，更新数据
    count++
    // 获取当前请求（from -> 离开的栋号， to -> 想去的栋号）
    const [from, to] = requests[index]
    // 如果离开那栋之前刚好住满，现在离开一人则会多一栋变化率不为 0 的
    zeroCount -= delta[from] === 0 ? 1 : 0
    // 如果搬进去那栋之前刚好住满，现在想进来一人则会多一栋变化率不为 0 的
    zeroCount -= delta[to] === 0 ? 1 : 0
    // 更新两栋的变化量
    delta[from]--
    delta[to]++
    // 如果离开那栋之前刚好多一人，这个人搬出去后刚好变化率为 0
    zeroCount += delta[from] === 0 ? 1 : 0
    // 如果搬进来那栋之前刚好缺一人，这个人搬进来后刚好变化率为 0
    zeroCount += delta[to] === 0 ? 1 : 0

    // 接着审批下个人
    backTrack(requests, index + 1, zeroCount, count)

    // 回溯
    delta[from]++
    delta[to]--
  }
}

/**
 * 二进制枚举
 * @desc 时间复杂度 O(2^M * N)  空间复杂度 O(N)
 * @param n
 * @param requests
 */
export function maximumRequests2(n: number, requests: number[][]): number {
  const delta = new Array(n).fill(0)
  let ans = 0
  const m = requests.length
  // 用二进制遍历出所有选择方式
  for (let mask = 0; mask < 1 << m; mask++) {
    // 计算当前选择方式的换楼数
    const count = mask.toString(2).split('0').join('').length
    // 如果当前换楼数目没有之前的答案多，就没必要后续的验证
    if (count <= ans) continue

    // 重置delta
    delta.fill(0)

    // 找到换楼的请求，更新delta数据
    for (let i = 0; i < m; i++) {
      if ((mask & (1 << i)) !== 0) {
        delta[requests[i][0]]++
        delta[requests[i][1]]--
      }
    }

    // 如果换楼后，全部没有变化的话，更新返回值
    if (delta.every(i => i === 0)) ans = count
  }

  return ans
}
