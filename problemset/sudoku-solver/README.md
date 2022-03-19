# 解数独

> 难度：困难
>
> https://leetcode-cn.com/problems/sudoku-solver/

## 题目

编写一个程序，通过填充空格来解决数独问题。

数独的解法需 遵循如下规则：

1. 数字`1-9`在每一行只能出现一次。
2. 数字`1-9`在每一列只能出现一次。
3. 数字`1-9`在每一个以粗实线分隔的`3x3`宫内只能出现一次。（请参考示例图）
4. 数独部分空格内已填入了数字，空白格用`'.'`表示。

### 示例

![sudoku-solver-1](https://user-images.githubusercontent.com/88995580/159103327-79c378ce-8cca-4360-b3fa-92bee3fa85dc.png)

```
输入：board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
输出：[["5","3","4","6","7","8","9","1","2"],["6","7","2","1","9","5","3","4","8"],["1","9","8","3","4","2","5","6","7"],["8","5","9","7","6","1","4","2","3"],["4","2","6","8","5","3","7","9","1"],["7","1","3","9","2","4","8","5","6"],["9","6","1","5","3","7","2","8","4"],["2","8","7","4","1","9","6","3","5"],["3","4","5","2","8","6","1","7","9"]]
```

解释：输入的数独如上图所示，唯一有效的解决方案如下所示：

![sudoku-solver-2](https://user-images.githubusercontent.com/88995580/159103313-c7fc3e07-d5fb-40f8-a33d-c997687e92b1.png)

## 解法

```typescript
/**
 * 回溯
 * @param board {string[][]}
 * @return {void}
 */
export function solveSudoku(board: string[][]): void {
  backTracking();

  function backTracking(): boolean {
    for (let i: number = 0; i < 9; i++) {
      for (let j: number = 0; j < 9; j++) {
        if (board[i][j] !== '.') continue;
        for (let val: number = 1; val <= 9; val++) {
          const valStr: string = val + '';
          if (isValid(i, j, valStr, board)) {
            board[i][j] = valStr;

            if (backTracking()) {
              return true;
            }

            board[i][j] = '.';
          }
        }
        return false;
      }
    }
    return true;
  }

  function isValid(
    row: number,
    col: number,
    val: string,
    board: string[][]
  ): boolean {
    // 判断行有没有重复
    if (board[row].includes(val)) {
      return false;
    }

    // 判断列有没有重复
    for (let i: number = 0; i < 9; i++) {
      if (board[i][col] === val) {
        return false;
      }
    }

    // 判断九宫格有没有重复
    let startRow: number = Math.floor(row / 3) * 3;
    let startCol: number = Math.floor(col / 3) * 3;

    for (let i: number = startRow; i < startRow + 3; i++) {
      for (let j: number = startCol; j < startCol + 3; j++) {
        if (board[i][j] === val) return false;
      }
    }

    return true;
  }
}
```
