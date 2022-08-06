/**
 * 栈
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param n
 * @param logs
 * @returns
 */
export function exclusiveTime(n: number, logs: string[]): number[] {
  const stack: [fnId: number, timestamp: number][] = []
  const res = new Array(n).fill(0)
  for (const log of logs) {
    const { fnId, type, timestamp } = parseLog(log)
    if (type === 'start') {
      if (stack.length) {
        res[stack[stack.length - 1][0]] += timestamp - stack[stack.length - 1][1]
        stack[stack.length - 1][1] = timestamp
      }
      stack.push([fnId, timestamp])
    }
    else {
      const [fnId, ts] = stack.pop()!
      res[fnId] += timestamp - ts + 1
      if (stack.length)
        stack[stack.length - 1][1] = timestamp + 1
    }
  }

  return res

  function parseLog(log: string) {
    const splitArr = log.split(':')
    return {
      fnId: Number(splitArr[0]),
      type: splitArr[1] as 'start' | 'end',
      timestamp: Number(splitArr[2]) + 1,
    }
  }
}
