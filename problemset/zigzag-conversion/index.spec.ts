import {convert} from "./index"

describe('Z字形变换', () => {
    describe('按行排序', () => {
        testCase(convert);
    });
});

function testCase(fn: Function) {
    test('示例一', () => {
        const s: string = "PAYPALISHIRING";
        const numRows: number = 3;
        const expected: string = "PAHNAPLSIIGYIR";

        expect(fn(s, numRows)).toBe(expected);
    });

    test('示例二', () => {
        const s: string = "PAYPALISHIRING";
        const numRows: number = 4;
        const expected: string = "PINALSIGYAHRPI";

        expect(fn(s, numRows)).toBe(expected);
    });

    test('示例三', () => {
        const s: string = "A";
        const numRows: number = 1;
        const expected: string = "A";

        expect(fn(s, numRows)).toBe(expected);
    });
}
