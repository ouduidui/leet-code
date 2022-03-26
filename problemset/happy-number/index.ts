/**
 * 用哈希集合检测循环
 * @desc 时间复杂度 O(logN)  空间复杂度 O(logN)
 * @param n
 */
export function isHappy(n: number): boolean {
  if (n === 1) return true

  const set = new Set<number>()

  while (!set.has(n) && set.add(n)) {
    if (n === 1) return true
    let sum = 0
    while (n !== 0) {
      sum += (n % 10) ** 2
      n = (n / 10) >> 0
    }

    n = sum
  }

  return false
}

/**
 * 快慢指针法
 * @desc 时间复杂度 O(logN)  空间复杂度 O(1)
 * @param n
 */
export function isHappy2(n: number): boolean {
  if (n === 1) return true

  let slow = n
  let fast = getNext(n)

  while (fast !== 1 && slow !== fast) {
    slow = getNext(slow)
    fast = getNext(getNext(fast))
  }

  return fast === 1

  function getNext(n: number): number {
    let sum = 0
    while (n !== 0) {
      sum += (n % 10) ** 2
      n = (n / 10) >> 0
    }

    return sum
  }
}
