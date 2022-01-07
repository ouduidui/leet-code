import {addBinary} from './index'

describe('二进制求和', () => {
    testCase(addBinary)
});

function testCase(fn: (a: string, b: string) => string) {
    it('示例一', () => {
        const a = '11';
        const b = '1';
        const expected = '100';

        expect(fn(a, b)).toBe(expected)
    })

    it('示例二', () => {
        const a = '1010';
        const b = '1011';
        const expected = '10101';

        expect(fn(a, b)).toBe(expected)
    })
}