/**
 * 暴力解法
 * @desc 时间复杂度 O(N^2)  空间复杂度 O(N)
 * @param s<string> 字符串
 * @return number
 */
export function lengthOfLongestSubstring(s: string): number {
    if (s.length < 2) return s.length

    let count: number = 0;
    // 遍历
    for (let i: number = 0; i < s.length; i++) {
        // 重置一下set，将第一个值放入
        const set: Set<string> = new Set(s[i]);
        // 遍历剩余的值
        for (let j: number = i + 1; j < s.length; j++) {
            // 如果set中包含，则更新count，结束遍历；否则将其加入set中
            if (set.has(s[j])) {
                count = Math.max(count, j - i);
                break;
            } else {
                set.add(s[j])
            }

            // 遍历结束后，更新count
            if (j === s.length - 1) {
                count = Math.max(count, j - i + 1);
            }
        }
    }
    return count;
}

/**
 * 滑动窗口
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param s<string> 字符串
 * @return number
 */
export function lengthOfLongestSubstring2(s: string): number {
    if (s.length < 2) return s.length;

    const set: Set<string> = new Set();
    let count: number = 0;
    let leftPointer: number = 0;
    let rightPointer: number = 0;

    while (leftPointer < s.length) {
        while (rightPointer < s.length && !set.has(s[rightPointer])) {
            set.add(s[rightPointer]);
            rightPointer++;
        }

        count = Math.max(count, rightPointer - leftPointer);
        set.delete(s[leftPointer]);
        leftPointer++;
    }
    return count;
}
