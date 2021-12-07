import {countAndSay} from './index';

describe('外观数列', () => {
    describe('遍历生成', () => {
        testCase(countAndSay);
    })
});

function testCase(fn:Function) {
    it('示例一', () => {
        const n:number = 1;
        const expected: string = '1';

        expect(fn(n)).toBe(expected);
    })

    it('示例二', () => {
        const n:number = 4;
        const expected: string = '1211';

        expect(fn(n)).toBe(expected);
    })
}