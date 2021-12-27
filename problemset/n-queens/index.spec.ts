import {twoDimensionalArrayEqual} from "../../utils/tools";
import {solveNQueens} from "./index";

describe('N 皇后', () => {
    describe('基于集合的回溯', () => {
        testCase(solveNQueens);
    })
});

function testCase(fn: Function) {
    it('示例一', () => {
        const n = 4;
        const expected = [[".Q..", "...Q", "Q...", "..Q."], ["..Q.", "Q...", "...Q", ".Q.."]];

        twoDimensionalArrayEqual(fn(n), expected)
    })

    it('示例二', () => {
        const n = 1;
        const expected = [["Q"]];

        twoDimensionalArrayEqual(fn(n), expected)
    })
}