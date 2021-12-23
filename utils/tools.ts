/**
 * 测试两个二维数组是否相等
 * @param ans {number[][] | string[][]}
 * @param expected {number[][] | string[][]}
 */
export const twoDimensionalArrayEqual = (
    ans: number[][] | string[][],
    expected: number[][] | string[][]
) => {
    expect(ans.length).toBe(expected.length);

    const cache: number[] = [];

    expected.forEach(e => {
        const idx = ans.findIndex(a => arrEqual(a, e));
        expect(!cache.includes(idx) && idx !== -1).toBe(true);
        (idx !== -1) && cache.push(idx);
    })
}

const arrEqual = (a: string[] | number[], b: string[] | number[]): boolean => {
    if (a.length !== b.length) {
        return false;
    } else {
        a.sort();
        b.sort();
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) return false;
        }
    }

    return true;
}