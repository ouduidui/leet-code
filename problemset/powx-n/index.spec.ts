import  {myPow} from './index'

describe('Pow(x, n)', () => {
    describe('迭代', () => {
        testCase(myPow);
    })
});

function testCase(fn: Function) {
    it('示例一', () => {
        const x = 2.00000;
        const n = 10;
        const expected = 1024.00000;

        expect(fn(x, n)).toBe(expected)
    })

    it('示例一', () => {
        const x = 2.10000;
        const n = 3;
        const expected = 9.26100;

        expect(fn(x, n)).toBe(expected)
    })

    it('示例一', () => {
        const x = 2.00000;
        const n = -2;
        const expected = 0.25000;

        expect(fn(x, n)).toBe(expected)
    })
}