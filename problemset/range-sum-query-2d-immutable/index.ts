/**
 * 一维前缀和
 */
export class NumMatrix {
  sums: number[][] = []

  /**
   * @desc 时间复杂度 O(MN)  空间复杂度 O(MN)
   * @param matrix
   */
  constructor(matrix: number[][]) {
    const m = matrix.length
    if (m > 0) {
      const n = matrix[0].length
      this.sums = new Array<number[]>(m).fill([]).map(() => new Array(n + 1).fill(0))
      for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++)
          this.sums[i][j + 1] = this.sums[i][j] + matrix[i][j]
      }
    }
  }

  /**
   * @desc 时间复杂度 O(N)  空间复杂度 O(1)
   * @param row1
   * @param col1
   * @param row2
   * @param col2
   * @returns
   */
  sumRegion(row1: number, col1: number, row2: number, col2: number): number {
    let sum = 0
    for (let i = row1; i <= row2; i++)
      sum += this.sums[i][col2 + 1] - this.sums[i][col1]

    return sum
  }
}

/**
 * 二维前缀和
 */
export class NumMatrix2 {
  sums: number[][] = []

  /**
   * @desc 时间复杂度 O(MN)  空间复杂度 O(MN)
   * @param matrix
   */
  constructor(matrix: number[][]) {
    const m = matrix.length
    if (m > 0) {
      const n = matrix[0].length
      this.sums = new Array<number[]>(m + 1).fill([]).map(() => new Array(n + 1).fill(0))
      for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
          this.sums[i + 1][j + 1]
          = this.sums[i][j + 1]
          + this.sums[i + 1][j]
          - this.sums[i][j]
          + matrix[i][j]
        }
      }
    }
  }

  /**
   * @desc 时间复杂度 O(N)  空间复杂度 O(1)
   * @param row1
   * @param col1
   * @param row2
   * @param col2
   * @returns
   */
  sumRegion(row1: number, col1: number, row2: number, col2: number): number {
    return this.sums[row2 + 1][col2 + 1]
    - this.sums[row1][col2 + 1]
    - this.sums[row2 + 1][col1]
    + this.sums[row1][col1]
  }
}
