/**
 * 滑动窗口
 * @desc 时间复杂度 O(NM) 空间复杂度 O(M)  N=s长度 M=单词数量
 * @param s
 * @param words
 */
export function findSubstring(s: string, words: string[]): number[] {
    const sLen: number = s.length;
    const wordLen: number = words[0].length;
    const wordNum: number = words.length;
    const wLen: number = wordLen * wordNum;

    // 利用Map对word进行去重，并保存出现次数
    let wordMap = new Map<string, number>();
    for (let word of words) {
        let count: number = wordMap.has(word) ? wordMap.get(word)! : 0;
        wordMap.set(word, count + 1);
    }

    let res: number[] = [];
    let left: number = 0;
    let right: number = wLen - 1;
    while (right < sLen) {
        right++;
        if (right - left === wLen) {  // 当窗口长度刚好等于wLen，就进行匹配
            if (match()) res.push(left);
            left++;
        }

    }

    return res;


    function match(): boolean {
        // 获取窗口字符串
        let str = s.substring(left, right);
        // 按长度拆分str，并统计单词出现次数
        let map = new Map<string, number>();
        for (let i: number = 0; i < wordNum; i++) {
            let word = str.substring(i * wordLen, (i + 1) * wordLen);
            let count: number = map.has(word) ? map.get(word)! : 0;
            map.set(word, count + 1);
        }

        // map和wordMap继续匹配
        for (let [key, value] of wordMap) {
            if (!map.has(key) || map.get(key) !== value) {
                return false;
            }
        }
        return true;
    }
}