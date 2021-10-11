/**
 * 暴力解法
 * @desc 时间复杂度：O(N) N为num的长度  空间复杂度：O(1)
 * @param num {number}
 * @return {string}
 */
export function intToRoman(num: number): string {
    const romanMap: Map<number, string> = new Map([
        [1, 'I'], [5, 'V'], [10, 'X'], [50, 'L'], [100, 'C'], [500, 'D'], [1000, 'M']
    ]);

    let carry:number = 0;  // 进位
    let roman:string = '';  // 罗马值结果

    while (num > 0) {
        const n:number = num % 10;
        num = Math.floor(num / 10);

        let r:string = '';  // 当前数值对应的罗马值

        if(n === 1 || n === 5){
            r += romanMap.get(n * Math.pow(10, carry));
        }else if(n < 5) {
            if(n === 4) {
                r += romanMap.get(Math.pow(10, carry));
                r += romanMap.get(5 * Math.pow(10, carry));
            }else {
                r += Array(n).fill(romanMap.get(Math.pow(10, carry))).join('');
            }
        }else if(n < 10) {
            if(n === 9) {
                r += romanMap.get(Math.pow(10, carry));
                r += romanMap.get(10 * Math.pow(10, carry));
            }else {
                r += romanMap.get(5 * Math.pow(10, carry))
                r += Array(n - 5).fill(romanMap.get(Math.pow(10, carry))).join('');
            }
        }

        carry++;
        roman = r + roman; // 将新的罗马值插在前面
    }

    return roman;
}
