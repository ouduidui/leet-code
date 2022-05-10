# 猫和老鼠 II

> 难度：困难
>
> https://leetcode.cn/problems/cat-and-mouse-ii/

## 题目

一只猫和一只老鼠在玩一个叫做猫和老鼠的游戏。

它们所处的环境设定是一个 `rows x cols` 的方格 `grid` ，其中每个格子可能是一堵墙、一块地板、一位玩家（猫或者老鼠）或者食物。

- 玩家由字符 `'C'` （代表猫）和 `'M'` （代表老鼠）表示。
- 地板由字符 `'.'` 表示，玩家可以通过这个格子。
- 墙用字符 `'#'` 表示，玩家不能通过这个格子。
- 食物用字符 `'F'` 表示，玩家可以通过这个格子。
- 字符 `'C'` ， `'M'` 和 `'F'` 在 `grid` 中都只会出现一次。

猫和老鼠按照如下规则移动：

- 老鼠 **先移动** ，然后两名玩家轮流移动。
- 每一次操作时，猫和老鼠可以跳到上下左右四个方向之一的格子，他们不能跳过墙也不能跳出 `grid` 。
- `catJump` 和 `mouseJump` 是猫和老鼠分别跳一次能到达的最远距离，它们也可以跳小于最大距离的长度。
- 它们可以停留在原地。
- 老鼠可以跳跃过猫的位置。

游戏有 `4` 种方式会结束：

- 如果猫跟老鼠处在相同的位置，那么猫获胜。
- 如果猫先到达食物，那么猫获胜。
- 如果老鼠先到达食物，那么老鼠获胜。
- 如果老鼠不能在 1000 次操作以内到达食物，那么猫获胜。

给你 `rows x cols` 的矩阵 `grid` 和两个整数 `catJump` 和 `mouseJump` ，双方都采取最优策略，如果老鼠获胜，那么请你返回 `true` ，否则返回 `false` 。

### 示例

#### 示例 1：

![sample_111_1955](https://user-images.githubusercontent.com/54696834/167544476-0702a5be-f76d-404c-89f8-bc3b3c522ea0.png)

```
输入：grid = ["####F","#C...","M...."], catJump = 1, mouseJump = 2
输出：true
解释：猫无法抓到老鼠，也没法比老鼠先到达食物。
```

#### 示例 2：

![sample_2_1955](https://user-images.githubusercontent.com/54696834/167544485-c389a38d-374e-4837-8c22-9be93870e9e9.png)

```
输入：grid = ["M.C...F"], catJump = 1, mouseJump = 4
输出：true
```

#### 示例 3：

```
输入：grid = ["M.C...F"], catJump = 1, mouseJump = 3
输出：false
```

#### 示例 4：

```
输入：grid = ["C...#","...#F","....#","M...."], catJump = 2, mouseJump = 5
输出：false
```

#### 示例 5：

```
输入：grid = [".M...","..#..","#..#.","C#.#.","...#F"], catJump = 3, mouseJump = 1
输出：true
```

## 解题

```ts 
type StateType = [number, number, TURN]

type ResultType = [
    mouseResult: [result: RESULT_FLAG, move: number],
    catResult: [result: RESULT_FLAG, move: number],
]

enum TURN {
  MOUSE_TURN = 0,
  CAT_TURN = 1,
}

enum RESULT_FLAG {
  UNKNOWN = 0,
  MOUSE_WIN = 1,
  CAT_WIN = 2,
}

const MAX_MOVES = 1000
const DIRS = [[-1, 0], [1, 0], [0, -1], [0, 1]]

/**
 * 拓扑排序
 * @desc 时间复杂度 O(M²N²(M+N))  空间复杂度 O(M²N²)
 * @param grid
 * @param catJump
 * @param mouseJump
 * @returns
 */
export function canMouseWin(
  grid: string[],
  catJump: number,
  mouseJump: number,
): boolean {
  const rows = grid.length
  const cols = grid[0].length
  let startMouse = -1
  let startCat = -1
  let food = -1
  const getPosKey = (row: number, col: number): number => row * cols + col
  const getPos = (key: number): [number, number] => [(key / cols) >> 0, key % cols]

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const c = grid[i][j]
      if (c === 'M')
        startMouse = getPosKey(i, j)
      else if (c === 'C')
        startCat = getPosKey(i, j)
      else if (c === 'F')
        food = getPosKey(i, j)
    }
  }

  const total = rows * cols
  const degrees: [mouse: number, cat: number][][]
  = new Array(total).fill(0).map(() => new Array(total).fill(0).map(() => [0, 0]))

  // 计算每个状态的度
  for (let mouse = 0; mouse < total; mouse++) {
    const [mouseRow, mouseCol] = getPos(mouse)
    if (grid[mouseRow][mouseCol] === '#') continue

    for (let cat = 0; cat < total; cat++) {
      const [catRow, catCol] = getPos(cat)
      if (grid[catRow][catCol] === '#') continue

      degrees[mouse][cat][TURN.MOUSE_TURN]++
      degrees[mouse][cat][TURN.CAT_TURN]++

      for (const dir of DIRS) {
        for (
          let row = mouseRow + dir[0], col = mouseCol + dir[1], jump = 1;
          row >= 0 && row < rows && col >= 0 && col < cols && grid[row][col] !== '#' && jump <= mouseJump;
          row += dir[0], col += dir[1], jump++
        ) {
          const nextMouse = getPosKey(row, col)
          const nextCat = getPosKey(catRow, catCol)
          degrees[nextMouse][nextCat][TURN.MOUSE_TURN]++
        }

        for (
          let row = catRow + dir[0], col = catCol + dir[1], jump = 1;
          row >= 0 && row < rows && col >= 0 && col < cols && grid[row][col] !== '#' && jump <= catJump;
          row += dir[0], col += dir[1], jump++
        ) {
          const nextMouse = getPosKey(mouseRow, mouseCol)
          const nextCat = getPosKey(row, col)
          degrees[nextMouse][nextCat][TURN.CAT_TURN]++
        }
      }
    }
  }

  const results: ResultType[][]
  = new Array(total).fill(0)
    .map(() => new Array(total).fill(0)
      .map(() => [[RESULT_FLAG.UNKNOWN, 0], [RESULT_FLAG.UNKNOWN, 0]]),
    )
  const queue: StateType[] = []

  // 猫和老鼠在同一个单元格，猫获胜
  for (let pos = 0; pos < total; pos++) {
    const [row, col] = getPos(pos)
    if (grid[row][col] === '#') continue

    results[pos][pos][TURN.MOUSE_TURN][0] = RESULT_FLAG.CAT_WIN
    results[pos][pos][TURN.MOUSE_TURN][1] = 0
    results[pos][pos][TURN.CAT_TURN][0] = RESULT_FLAG.CAT_WIN
    results[pos][pos][TURN.CAT_TURN][1] = 0
    queue.push([pos, pos, TURN.MOUSE_TURN])
    queue.push([pos, pos, TURN.CAT_TURN])
  }

  // 猫和食物在同一个单元格，猫获胜
  for (let mouse = 0; mouse < total; mouse++) {
    const [mouseRow, mouseCol] = getPos(mouse)
    if (grid[mouseRow][mouseCol] === '#' || mouse === food) continue

    results[mouse][food][TURN.MOUSE_TURN][0] = RESULT_FLAG.CAT_WIN
    results[mouse][food][TURN.MOUSE_TURN][1] = 0
    results[mouse][food][TURN.CAT_TURN][0] = RESULT_FLAG.CAT_WIN
    results[mouse][food][TURN.CAT_TURN][1] = 0
    queue.push([mouse, food, TURN.MOUSE_TURN])
    queue.push([mouse, food, TURN.CAT_TURN])
  }

  // 老鼠和食物在同一个单元格且猫和食物不在同一个单元格，老鼠获胜
  for (let cat = 0; cat < total; cat++) {
    const [catRow, catCol] = getPos(cat)
    if (grid[catRow][catCol] === '#' || cat === food) continue

    results[food][cat][TURN.MOUSE_TURN][0] = RESULT_FLAG.MOUSE_WIN
    results[food][cat][TURN.MOUSE_TURN][1] = 0
    results[food][cat][TURN.CAT_TURN][0] = RESULT_FLAG.MOUSE_WIN
    results[food][cat][TURN.CAT_TURN][1] = 0
    queue.push([food, cat, TURN.MOUSE_TURN])
    queue.push([food, cat, TURN.CAT_TURN])
  }

  // 拓扑排序
  while (queue.length) {
    const [mouse, cat, turn] = queue.shift()!
    const [result, moves] = results[mouse][cat][turn]
    const prevStates = getPrevStates(mouse, cat, turn)
    for (const prevState of prevStates) {
      const [prevMouse, prevCat, prevTurn] = prevState
      if (results[prevMouse][prevCat][prevTurn][0] === RESULT_FLAG.UNKNOWN) {
        const canWin
        = (result === RESULT_FLAG.MOUSE_WIN && prevTurn === TURN.MOUSE_TURN)
        || (result === RESULT_FLAG.CAT_WIN && prevTurn === TURN.CAT_TURN)
        if (canWin) {
          results[prevMouse][prevCat][prevTurn][0] = result
          results[prevMouse][prevCat][prevTurn][1] = moves + 1
          queue.push([prevMouse, prevCat, prevTurn])
        }
        else {
          degrees[prevMouse][prevCat][prevTurn]--
          if (degrees[prevMouse][prevCat][prevTurn] === 0) {
            const loseResult = prevTurn === TURN.MOUSE_TURN ? RESULT_FLAG.CAT_WIN : RESULT_FLAG.MOUSE_WIN
            results[prevMouse][prevCat][prevTurn][0] = loseResult
            results[prevMouse][prevCat][prevTurn][1] = moves + 1
            queue.push([prevMouse, prevCat, prevTurn])
          }
        }
      }
    }
  }

  const [result, move] = results[startMouse][startCat][TURN.MOUSE_TURN]
  return result === RESULT_FLAG.MOUSE_WIN && move <= MAX_MOVES

  function getPrevStates(mouse: number, cat: number, turn: TURN): StateType[] {
    const prevStates: StateType[] = []
    const [mouseRow, mouseCol] = getPos(mouse)
    const [catRow, catCol] = getPos(cat)
    const prevTurn = turn === TURN.MOUSE_TURN ? TURN.CAT_TURN : TURN.MOUSE_TURN
    const maxJump = prevTurn === TURN.MOUSE_TURN ? mouseJump : catJump
    const startRow = prevTurn === TURN.MOUSE_TURN ? mouseRow : catRow
    const startCol = prevTurn === TURN.MOUSE_TURN ? mouseCol : catCol
    prevStates.push([mouse, cat, prevTurn])

    for (const dir of DIRS) {
      for (
        let i = startRow + dir[0], j = startCol + dir[1], jump = 1;
        i >= 0 && i < rows && j >= 0 && j < cols && grid[i][j] !== '#' && jump <= maxJump;
        i += dir[0], j += dir[1], jump++
      ) {
        const prevMouseRow = prevTurn === TURN.MOUSE_TURN ? i : mouseRow
        const prevMouseCol = prevTurn === TURN.MOUSE_TURN ? j : mouseCol
        const prevCatRow = prevTurn === TURN.MOUSE_TURN ? catRow : i
        const prevCatCol = prevTurn === TURN.MOUSE_TURN ? catCol : j
        const prevMouse = getPosKey(prevMouseRow, prevMouseCol)
        const prevCat = getPosKey(prevCatRow, prevCatCol)
        prevStates.push([prevMouse, prevCat, prevTurn])
      }
    }

    return prevStates
  }
}
```