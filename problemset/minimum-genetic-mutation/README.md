# 最小基因变化

> 难度：中等
>
> https://leetcode-cn.com/problems/minimum-genetic-mutation/

## 题目

基因序列可以表示为一条由 `8` 个字符组成的字符串，其中每个字符都是 `'A'`、`'C'`、`'G'` 和 `'T'` 之一。

假设我们需要调查从基因序列 `start` 变为 `end` 所发生的基因变化。一次基因变化就意味着这个基因序列中的一个字符发生了变化。

- 例如，`"AACCGGTT"` --> `"AACCGGTA"` 就是一次基因变化。

另有一个基因库 `bank` 记录了所有有效的基因变化，只有基因库中的基因才是有效的基因序列。

给你两个基因序列 `start` 和 `end` ，以及一个基因库 `bank` ，请你找出并返回能够使 `start` 变化为 `end` 所需的最少变化次数。如果无法完成此基因变化，返回 `-1` 。

注意：起始基因序列 `start` 默认是有效的，但是它并不一定会出现在基因库中。

### 示例

#### 示例 1：

```
输入：start = "AACCGGTT", end = "AACCGGTA", bank = ["AACCGGTA"]
输出：1
```

#### 示例 2：

```
输入：start = "AACCGGTT", end = "AAACGGTA", bank = ["AACCGGTA","AACCGCTA","AAACGGTA"]
输出：2
```

#### 示例 3：

```
输入：start = "AAAAACCC", end = "AACCCCCC", bank = ["AAAACCCC","AAACCCCC","AACCCCCC"]
输出：3
```

## 解题

### 广度优先搜索

```ts 
/**
 * 广度优先搜索
 * @desc 时间复杂度 O(MN)  空间复杂度 O(MN)
 * @param start
 * @param end
 * @param bank
 * @returns
 */
export function minMutation(
  start: string,
  end: string,
  bank: string[],
): number {
  if (start === end) return 0

  if (!bank.includes(end)) return -1

  const visited = new Set<string>()
  const keys = ['A', 'C', 'G', 'T']
  const queue = [start]
  visited.add(start)

  let step = 1
  while (queue.length) {
    const size = queue.length
    for (let i = 0; i < size; i++) {
      const cur = queue.pop()!
      for (let j = 0; j < 8; j++) {
        for (let k = 0; k < 4; k++) {
          if (keys[k] !== cur[j]) {
            // 生成新的基因
            const sb = [...cur]
            sb[j] = keys[k]
            const next = sb.join('')
            // 如果在bank中存在该基因且未出现过
            if (!visited.has(next) && bank.includes(next)) {
              if (next === end)
                return step

              queue.unshift(next)
              visited.add(next)
            }
          }
        }
      }
    }
    step++
  }

  return -1
}
```

### 预处理优化

```ts 
/**
 * 预处理优化
 * @desc 时间复杂度 O(M²N)  空间复杂度 O(M²)
 * @param start
 * @param end
 * @param bank
 * @returns
 */
export function minMutation2(
  start: string,
  end: string,
  bank: string[],
): number {
  const m = start.length
  const n = bank.length
  const adj: number[][] = new Array(n).fill(0).map(() => [])
  let endIndex = -1
  for (let i = 0; i < n; i++) {
    // 定位到结束基因的下标
    if (end === bank[i]) endIndex = i

    for (let j = i + 1; j < n; j++) {
      let mutations = 0
      for (let k = 0; k < m; k++) {
        if (bank[i][k] !== bank[j][k])
          mutations++

        if (mutations > 1) break
      }

      if (mutations === 1) {
        adj[i].push(j)
        adj[j].push(i)
      }
    }
  }

  if (endIndex === -1) return -1

  const queue: number[] = []
  const visited: boolean[] = new Array(n).fill(false)
  let step = 1
  for (let i = 0; i < n; i++) {
    let mutations = 0
    for (let k = 0; k < m; k++) {
      if (start[k] !== bank[i][k])
        mutations++

      if (mutations > 1)
        break
    }
    if (mutations === 1) {
      queue.push(i)
      visited[i] = true
    }
  }

  while (queue.length) {
    const size = queue.length
    for (let i = 0; i < size; i++) {
      const cur = queue.shift()!
      if (cur === endIndex)
        return step

      for (const next of adj[cur]) {
        if (visited[next])
          continue

        visited[next] = true
        queue.push(next)
      }
    }
    step++
  }

  return -1
}
```