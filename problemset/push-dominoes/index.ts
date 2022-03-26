/**
 * 广度优先搜索
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param dominoes
 */
export function pushDominoes(dominoes: string): string {
  const len = dominoes.length
  const queue: number[] = []
  // 记录推倒的时间
  const time = new Array(len).fill(-1)
  // 存储每一块的受力
  const force: ('L' | 'R')[][] = new Array(len).fill([]).map(() => [])

  for (let i = 0; i < len; i++) {
    // 获取第一次倾倒方向
    const f = dominoes[i] as 'L' | 'R' | '.'
    // 如果不倾倒则跳过不处理
    if (f !== '.') {
      // 将下标入队
      queue.unshift(i)
      time[i] = 0
      // 存储该块倾倒方向（受力）
      force[i].push(f)
    }
  }

  // 初始化结果值，默认不倾倒
  const result = new Array(len).fill('.')

  while (queue.length) {
    const i = queue.pop()!
    // 如果该块有多个受力，那一定是左右受力，因此保持不动
    if (force[i].length === 1) {
      const f = force[i][0]
      result[i] = f
      // 获取因该块倾倒印象到的那一块下标
      const ni = f === 'L' ? i - 1 : i + 1
      if (ni >= 0 && ni < len) {
        const t = time[i]
        // 如果该块初始没有推倒动作
        if (time[ni] === -1) {
          // 入队
          queue.unshift(ni)
          time[ni] = t + 1
          force[ni].push(f)
        }
        // 如果该块下一秒才有推倒动作
        else if (time[ni] === t + 1) {
          force[ni].push(f)
        }
      }
    }
  }

  return result.join('')
}

/**
 * 模拟
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param dominoes
 */
export function pushDominoes2(dominoes: string): string {
  const s = [...dominoes]
  const len = s.length
  let i = 0

  // 初始化左边骨牌状态
  let leftDomino: 'L' | 'R' = 'L'

  while (i < len) {
    let j = i

    // 跳过没有推动的骨牌
    while (j < len && s[j] === '.')
      j++

    // 获取当前骨牌动作
    const rightDomino = j < len ? (s[j] as 'L' | 'R') : 'R'
    // 如果当前骨牌跟上一块骨牌动作一致
    if (leftDomino === rightDomino) {
      while (i < j)
        s[i++] = rightDomino
    }
    // 如果是左边骨牌向右倒，且右边骨牌向左倒的情况
    else if (leftDomino === 'R' && rightDomino === 'L') {
      let k = j - 1
      while (i < k) {
        s[i++] = 'R'
        s[k--] = 'L'
      }
    }
    // 更新leftDomino
    leftDomino = rightDomino
    // 将i定位到未处理的那一块
    i = j + 1
  }

  return s.join('')
}
