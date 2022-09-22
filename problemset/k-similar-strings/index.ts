/**
 * 广度优先遍历
 * @param s1
 * @param s2
 * @returns
 */
export function kSimilarity(s1: string, s2: string): number {
  const n = s1.length
  const queue: [string, number][] = []
  const visit = new Set<string>()
  queue.push([s1, 0])
  visit.add(s1)
  let step = 0
  while (queue.length) {
    const sz = queue.length
    for (let i = 0; i < sz; i++) {
      // eslint-disable-next-line prefer-const
      let [cur, pos] = queue.shift()!
      if (cur === s2)
        return step

      while (pos < n && cur[pos] === s2[pos])
        pos++

      for (let j = pos + 1; j < n; j++) {
        if (s2[j] === cur[j])
          continue

        if (s2[pos] === cur[j]) {
          const next = swap(cur, pos, j)
          if (!visit.has(next)) {
            visit.add(next)
            queue.push([next, pos + 1])
          }
        }
      }
    }
    step++
  }
  return step

  function swap(cur: string, i: number, j: number) {
    const arr = [...cur];
    [arr[i], arr[j]] = [arr[j], arr[i]]
    return arr.join('')
  }
}
