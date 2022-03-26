/**
 * 两次遍历
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param ratings
 */
export function candy(ratings: number[]): number {
  const len = ratings.length
  let result = 0
  let i

  // 从左到右遍历一次
  // 如果右边比左边高分则按照左边的糖数 + 1，否则为 1
  // 此时会忽略掉了右边比左边低分的情况
  const left = [1]
  for (i = 1; i < len; i++)
    left[i] = ratings[i] > ratings[i - 1] ? left[i - 1] + 1 : 1

  // 从右到左遍历遍历
  // 如果左边比右边高分则按照右边的糖数 + 1，否则为 1
  // 此时，当前的小朋友的糖数是left和right中的最大值者
  let right = 0
  for (i = len - 1; i >= 0; i--) {
    right = i < len - 1 && ratings[i] > ratings[i + 1] ? right + 1 : 1
    result += Math.max(left[i], right)
  }

  return result
}

/**
 * 常数空间遍历
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param ratings
 */
export function candy2(ratings: number[]): number {
  const len = ratings.length
  let result = 1
  let inc = 1 // 递增长度
  let dec = 0 // 递减长度
  let pre = 1 // 上一个的糖数

  // 从左到右遍历
  for (let i = 1; i < len; i++) {
    // 如果递增或相等
    if (ratings[i] >= ratings[i - 1]) {
      dec = 0 // 清空递减长度
      // 如果是相等，则设置为1，如果不是相等则上一个加一
      pre = ratings[i] === ratings[i - 1] ? 1 : pre + 1
      // 更新结果
      result += pre
      // 更新递增长度
      inc = pre
    }
    // 如果递减
    else {
      // 更新递减序列
      dec++
      // 当递增和递减等长的时候，需要把最近的递增序列的最后一个同学也并进递减序列中
      if (dec === inc) dec++
      // 更新结果
      result += dec
      // 重置pre
      pre = 1
    }
  }

  return result
}
