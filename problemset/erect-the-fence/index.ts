/**
 * Jarvis 算法
 * @desc 时间复杂度 O(N²) 空间复杂度 O(N)
 * @param trees
 * @returns
 */
export function outerTrees(trees: number[][]): number[][] {
  const len = trees.length
  if (len < 4)
    return trees

  let leftMost = 0
  for (let i = 0; i < len; i++) {
    if (trees[i][0] < trees[leftMost][0])
      leftMost = i
  }

  const res: number[][] = []
  const cross = (p: number[], q: number[], r: number[]) => (q[0] - p[0]) * (r[1] - q[1]) - (q[1] - p[1]) * (r[0] - q[0])

  const visit = new Array(len).fill(false)
  let p = leftMost
  do {
    let q = (p + 1) % len
    for (let r = 0; r < len; r++) {
      // 如果 r 在 pq 右侧，则 q = r
      if (cross(trees[p], trees[q], trees[r]) < 0)
        q = r
    }

    // 是否存在点 i，使得 p、q、i 在同一条直线上
    for (let i = 0; i < len; i++) {
      if (visit[i] || i === p || i === q)
        continue

      if (cross(trees[p], trees[q], trees[i]) === 0) {
        res.push(trees[i])
        visit[i] = true
      }
    }

    if (!visit[q]) {
      res.push(trees[q])
      visit[q] = true
    }

    p = q
  } while (p !== leftMost)

  return res
}

/**
 * Graham 算法
 * @desc 时间复杂度 O(NlogN) 空间复杂度 O(N)
 * @param trees
 * @returns
 */
export function outerTrees2(trees: number[][]): number[][] {
  const len = trees.length
  if (len < 4)
    return trees

  let bottom = 0
  // 找到 y 最小的点 bottom
  for (let i = 0; i < len; i++) {
    if (trees[i][1] < trees[bottom][i])
      bottom = i
  }

  const swap = (trees: number[][], i: number, j: number) => {
    [
      trees[i][0],
      trees[i][1],
      trees[j][0],
      trees[j][1],
    ]
    = [
        trees[j][0],
        trees[j][1],
        trees[i][0],
        trees[i][1],
      ]
    return trees
  }

  const cross = (p: number[], q: number[], r: number[]) => (q[1] - p[1]) * (r[0] - q[0]) - (q[0] - p[0]) * (r[1] - q[1])

  const distance = (p: number[], q: number[]) => (p[0] - q[0]) * (p[0] - q[0]) + (p[1] - q[1]) * (p[1] - q[1])

  trees = swap(trees, bottom, 0)

  // 以 bottom 原点，按照极坐标的角度大小进行排序
  trees.sort((a, b) => {
    const diff = cross(trees[0], a, b) - cross(trees[0], b, a)
    return diff === 0 ? distance(trees[0], a) - distance(trees[0], b) : diff > 0 ? 1 : -1
  })

  // 对于凸包最后且在同一条直线的元素按照距离从小到大进行排序
  let r = len - 1
  while (r > 0 && cross(trees[0], trees[len - 1], trees[r]) === 0)
    r--

  for (let l = r + 1, h = len - 1; l < h; l++, h--)
    trees = swap(trees, l, h)

  const stack = [trees[0], trees[1]]
  for (let i = 2; i < len; i++) {
    let top = stack.pop()!
    // 如果当前元素与栈顶的两个元素构成的向量顺时针旋转，则弹出栈顶元素
    while (cross(stack[stack.length - 1], top, trees[i]) > 0)
      top = stack.pop()!

    stack.push(top)
    stack.push(trees[i])
  }
  return stack
}

/**
 * Andrew 算法
 * @desc 时间复杂度 O(NlogN) 空间复杂度 O(N)
 * @param trees
 * @returns
 */
export function outerTrees3(trees: number[][]): number[][] {
  const len = trees.length
  if (len < 4)
    return trees

  // 按照 x 大小进行排序，如果 x 相同，则按照 y 的大小进行排序
  trees.sort((a, b) => {
    if (a[0] === b[0])
      return a[1] - b[1]

    return a[0] - b[0]
  })

  const hull = []
  const used = new Array(len).fill(false)

  // hull[0] 需要入栈两次，不进行标记
  hull.push(0)

  const cross = (p: number[], q: number[], r: number[]) => (q[0] - p[0]) * (r[1] - q[1]) - (q[1] - p[1]) * (r[0] - q[0])

  // 求出凸包的下半部分
  for (let i = 1; i < len; i++) {
    while (hull.length > 1 && cross(trees[hull[hull.length - 2]], trees[hull[hull.length - 1]], trees[i]) < 0) {
      used[hull[hull.length - 1]] = false
      hull.pop()
    }
    used[i] = true
    hull.push(i)
  }

  const m = hull.length
  // 求出凸包的上半部分
  for (let i = len - 2; i >= 0; i--) {
    if (!used[i]) {
      while (hull.length > m && cross(trees[hull[hull.length - 2]], trees[hull[hull.length - 1]], trees[i]) < 0) {
        used[hull[hull.length - 1]] = false
        hull.pop()
      }
      used[i] = true
      hull.push(i)
    }
  }

  // hull[0] 同时参与凸包的上半部分检测，需要去掉重复的 hull[0]
  hull.pop()

  const size = hull.length
  const res: number[][] = []
  for (let i = 0; i < size; i++)
    res[i] = trees[hull[i]]

  return res
}
