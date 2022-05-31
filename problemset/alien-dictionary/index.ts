/**
 * 拓扑排序 + 深度优先搜索
 * @desc 时间复杂度 O(NL)  空间复杂度 O(L)
 * @param words
 * @returns
 */
export function alienOrder(words: string[]): string {
  enum STATE {
    VISITING,
    VISITED,
  }

  let valid = true
  const edges = new Map<string, string[]>()
  const states = new Map<string, STATE>()
  const len = words.length
  for (const word of words) {
    const wordlen = word.length
    for (let j = 0; j < wordlen; j++) {
      const c = word[j]
      if (!edges.has(c))
        edges.set(c, [])
    }
  }

  for (let i = 1; i < len && valid; i++)
    addEdge(words[i - 1], words[i])

  const order: string[] = []
  let index = edges.size - 1
  const letterSet = edges.keys()
  for (const u of letterSet) {
    if (!states.has(u))
      dfs(u)
  }
  if (!valid) return ''

  return order.join('')

  function addEdge(before: string, after: string) {
    const len1 = before.length
    const len2 = after.length
    const len = Math.min(len1, len2)
    let i = 0
    while (i < len) {
      const c1 = before[i]
      const c2 = after[i]
      if (c1 !== c2) {
        edges.get(c1)?.push(c2)
        break
      }
      i++
    }
    if (i === len && len1 > len2)
      valid = false
  }

  function dfs(u: string) {
    states.set(u, STATE.VISITING)
    const adjacent = edges.get(u)!
    for (const v of adjacent) {
      if (!states.has(v)) {
        dfs(v)
        if (!valid) return
      }
      else if (states.get(v) === STATE.VISITING) {
        valid = false
        return
      }
    }
    states.set(u, STATE.VISITED)
    order[index] = u
    index--
  }
}

/**
 * 拓扑排序 + 广度优先搜索
 * @desc 时间复杂度 O(NL)  空间复杂度 O(L)
 * @param words
 * @returns
 */
export function alienOrder2(words: string[]): string {
  let valid = true
  const edges = new Map<string, string[]>()
  const indegrees = new Map<string, number>()
  const len = words.length
  for (const word of words) {
    const wordlen = word.length
    for (let j = 0; j < wordlen; j++) {
      const c = word[j]
      if (!edges.has(c))
        edges.set(c, [])
    }
  }

  for (let i = 1; i < len && valid; i++)
    addEdge(words[i - 1], words[i])

  if (!valid) return ''

  const queue: string[] = []
  const letterSet = edges.keys()
  for (const u of letterSet)
    if (!indegrees.has(u)) queue.push(u)

  const order: string[] = []
  while (queue.length) {
    const u = queue.shift()!
    order.push(u)
    const adjacent = edges.get(u)!
    for (const v of adjacent) {
      indegrees.set(v, indegrees.get(v)! - 1)
      if (indegrees.get(v) === 0) queue.push(v)
    }
  }

  return order.length === edges.size ? order.join('') : ''

  function addEdge(before: string, after: string) {
    const len1 = before.length
    const len2 = after.length
    const len = Math.min(len1, len2)
    let i = 0
    while (i < len) {
      const c1 = before[i]
      const c2 = after[i]
      if (c1 !== c2) {
        indegrees.set(c2, (indegrees.get(c2) || 0) + 1)
        edges.get(c1)?.push(c2)
        break
      }
      i++
    }
    if (i === len && len1 > len2)
      valid = false
  }
}
