# 累加数

> 难度：中等
>
> https://leetcode-cn.com/problems/additive-number/

## 题目

**累加数** 是一个字符串，组成它的数字可以形成累加序列。

一个有效的 **累加序列** 必须 **至少** 包含 3 个数。除了最开始的两个数以外，序列中的每个后续数字必须是它之前两个数字之和。

给你一个只包含数字 '0'-'9' 的字符串，编写一个算法来判断给定输入是否是 **累加数** 。如果是，返回 true ；否则，返回 false 。

**说明：**累加序列里的数，除数字 0 之外，**不会** 以 0 开头，所以不会出现 1, 2, 03 或者 1, 02, 3 的情况。

 
### 示例

#### 示例 1：

```
输入："112358"
输出：true 
解释：累加序列为: 1, 1, 2, 3, 5, 8 。1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8
```

#### 示例 2：

```
输入："199100199"
输出：true 
解释：累加序列为: 1, 99, 100, 199。1 + 99 = 100, 99 + 100 = 199
```

## 解题

```ts
/**
 * 模拟
 * @desc 时间复杂度 O(N³)  空间复杂度 O(N)
 * @param num
 * @returns
 */
export function isAdditiveNumber(num: string): boolean {
  const len = num.length
  // 遍历定位第二个数值的起点位置
  for (let secondStart = 1; secondStart < len - 1; secondStart++) {
    // 如果开头为0的话，secondStart只能为1，否则跳出循环
    if (num[0] === '0' && secondStart !== 1) break

    // 遍历定位第二个数值的结束位置
    for (let secondEnd = secondStart; secondEnd < len - 1; secondEnd++) {
      // 如果开头为0的话，secondStart只能为1，否则跳出循环
      if (num[secondStart] === '0' && secondStart !== secondEnd)
        break

      // 开始验证
      if (valid(secondStart, secondEnd, num)) return true
    }
  }

  return false

  /**
   * 验证
   * @param secondStart
   * @param secondEnd
   * @param num
   * @returns
   */
  function valid(secondStart: number, secondEnd: number, num: string): boolean {
    const len = num.length
    // 初始第一个数值的定位
    let firstStart = 0
    let firstEnd = secondStart - 1
    while (secondEnd <= len - 1) {
      // 生成第三个数值
      const third = stringAdd(num, firstStart, firstEnd, secondStart, secondEnd)
      // 更新第三个数值的定位
      const thirdStart = secondEnd + 1
      const thirdEnd = secondEnd + third.length
      // 如果第三个数值超过界限或不在num中指定位置，则跳出循环
      if (thirdEnd >= len || num.slice(thirdStart, thirdEnd + 1) !== third)
        break

      // 如果已经到结尾，则证明验证成功
      if (thirdEnd === len - 1)
        return true

      // 往后顺延
      firstStart = secondStart
      firstEnd = secondEnd
      secondStart = thirdStart
      secondEnd = thirdEnd
    }

    return false
  }

  /**
   * 生成 first + second 的值
   * @param s
   * @param firstStart
   * @param firstEnd
   * @param secondStart
   * @param secondEnd
   * @returns
   */
  function stringAdd(
    s: string,
    firstStart: number,
    firstEnd: number,
    secondStart: number,
    secondEnd: number,
  ): string {
    const third: number[] = []
    let carry = 0
    let cur = 0
    while (firstEnd >= firstStart || secondEnd >= secondStart || carry !== 0) {
      cur = carry
      if (firstEnd >= firstStart)
        cur += Number(s[firstEnd--])
      if (secondEnd >= secondStart)
        cur += Number(s[secondEnd--])

      carry = (cur / 10) >> 0
      cur %= 10
      third.unshift(cur)
    }
    return third.join('')
  }
}
```