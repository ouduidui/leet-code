import {intToRoman} from "./index";

describe('整数转罗马数字', () => {
    describe('暴力解法', () => {
        testCase(intToRoman);
    })


});

function testCase(fn: Function) {
    test('示例一', () => {
        const num:number = 3;
        const expected:string = 'III';

        expect(fn(num)).toEqual(expected);
    })

    test('示例二', () => {
        const num:number = 4;
        const expected:string = 'IV';

        expect(fn(num)).toEqual(expected);
    })

    test('示例三', () => {
        const num:number = 9;
        const expected:string = 'IX';

        expect(fn(num)).toEqual(expected);
    })

    test('示例四', () => {
        const num:number = 58;
        const expected:string = 'LVIII';

        expect(fn(num)).toEqual(expected);
    })

    test('示例五', () => {
        const num:number = 1994;
        const expected:string = 'MCMXCIV';

        expect(fn(num)).toEqual(expected);
    })
}
