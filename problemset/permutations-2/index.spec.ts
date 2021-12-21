import {permuteUnique} from "./index"

describe('全排列 II', () => {
    testCase(permuteUnique);
});

function testCase(fn: Function) {
    it('示例一', () => {
        const nums = [1, 1, 2];
        const expected = [[1, 1, 2], [1, 2, 1], [2, 1, 1]];

        checkExpected(fn(nums) as number[][], expected)
    })

    it('示例二', () => {
        const nums = [1, 2, 3];
        const expected = [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]];

        checkExpected(fn(nums) as number[][], expected)
    })
}

function checkExpected(ans: number[][], expected: number[][]) {
    expect(ans.length).toBe(expected.length);

    const cache: number[] = [];
    expected.forEach(e => {
        const idx = ans.findIndex(a => arrEqual(a, e));
        expect(!cache.includes(idx) && idx !== -1).toBe(true);
        (idx !== -1) && cache.push(idx);
    })
}

function arrEqual(a: number[], b: number[]): boolean {
    if (a.length !== b.length) {
        return false
    } else {
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) {
                return false
            }
        }
        return true;
    }
}