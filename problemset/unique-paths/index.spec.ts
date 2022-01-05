import {uniquePaths, uniquePaths2} from "./index";

describe('不同路径', () => {
    describe('组合数学', () => {
        testCase(uniquePaths)
    })

    describe('组合数学', () => {
        testCase(uniquePaths2)
    })
});

function testCase(fn: (m: number, n: number) => number) {
    it('示例一', () => {
        const m = 3;
        const n = 7;
        const expected = 28;

        expect(fn(m, n)).toBe(expected)
    })

    it('示例二', () => {
        const m = 3;
        const n = 2;
        const expected = 3;

        expect(fn(m, n)).toBe(expected)
    })

    it('示例三', () => {
        const m = 7;
        const n = 3;
        const expected = 28;

        expect(fn(m, n)).toBe(expected)
    })

    it('示例四', () => {
        const m = 3;
        const n = 3;
        const expected = 6;

        expect(fn(m, n)).toBe(expected)
    })
}