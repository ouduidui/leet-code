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
