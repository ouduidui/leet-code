/**
 * 模拟 + 队列
 * @desc 时间复杂度 O(NK)  空间复杂度 O(N)
 * @param n
 * @param k
 * @returns
 */
export function findTheWinner(n: number, k: number): number {
  const queue = new Array(n).fill(0).map((_, i) => i + 1)
  while (queue.length > 1) {
    for (let i = 1; i < k; i++)
      queue.push(queue.shift()!)
    queue.shift()
  }
  return queue[0]
}

/**
 * 数学 + 递归
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param n
 * @param k
 * @returns
 */
export function findTheWinner2(n: number, k: number): number {
  return n === 1
    ? 1
    : (k + findTheWinner2(n - 1, k) - 1) % n + 1
}

/**
 * 数学 + 迭代
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param n
 * @param k
 * @returns
 */
export function findTheWinner3(n: number, k: number): number {
  let winner = 1
  for (let i = 2; i <= n; i++)
    winner = (k + winner - 1) % i + 1
  return winner
}
