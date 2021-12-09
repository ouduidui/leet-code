import {combinationSum2} from "./index"

describe(' 组合总和 II', () => {
    testCase(combinationSum2);
});

function testCase(fn: Function) {
    it('示例一', () => {
        const candidates: number[] = [10, 1, 2, 7, 6, 1, 5];
        const target: number = 8;
        const expected: number[][] = [
            [1, 1, 6],
            [1, 2, 5],
            [1, 7],
            [2, 6]
        ];

        const result: number[][] = fn(candidates, target);
        checkTest(result, expected);
    })

    it('示例二', () => {
        const candidates: number[] = [2, 5, 2, 1, 2];
        const target: number = 5;
        const expected: number[][] = [
            [1, 2, 2],
            [5]
        ];

        const result: number[][] = fn(candidates, target);
        checkTest(result, expected);
    })

    it('示例三', () => {
        const candidates: number[] = [3, 1, 3, 5, 1, 1];
        const target: number = 8;
        const expected: number[][] = [
            [1, 1, 1, 5],
            [1, 1, 3, 3],
            [3, 5]
        ];

        const result: number[][] = fn(candidates, target);
        checkTest(result, expected);
    })
}

function checkTest(result: number[][], expected: number[][]) {
    expect(result.length).toBe(expected.length);
    for (let i: number = 0; i < expected.length; i++) {
        const idx = result.findIndex(r => {
            if (r.length === expected[i].length && expected[i].every(e => r.includes(e))) {
                return true;
            }
        })
        expect(idx).not.toBe(-1);
    }
}