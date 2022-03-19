# 分发糖果

> 难度：困难
>
> https://leetcode-cn.com/problems/candy/

## 题目

`n` 个孩子站成一排。给你一个整数数组 `ratings` 表示每个孩子的评分。

你需要按照以下要求，给这些孩子分发糖果：

- 每个孩子至少分配到 `1` 个糖果。
- 相邻两个孩子评分更高的孩子会获得更多的糖果。

请你给每个孩子分发糖果，计算并返回需要准备的 **最少糖果数目** 。

### 示例

#### 示例 1：

```
输入：ratings = [1,0,2]
输出：5
解释：你可以分别给第一个、第二个、第三个孩子分发 2、1、2 颗糖果。
```

#### 示例 2：

```
输入：ratings = [1,2,2]
输出：4
解释：你可以分别给第一个、第二个、第三个孩子分发 1、2、1 颗糖果。
第三个孩子只得到 1 颗糖果，这满足题面中的两个条件。
```

## 解题

### 两次遍历

```typescript
/**
 * 两次遍历
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param ratings
 */
export function candy(ratings: number[]): number {
  const len = ratings.length;
  let result = 0;
  let i;

  // 从左到右遍历一次
  // 如果右边比左边高分则按照左边的糖数 + 1，否则为 1
  // 此时会忽略掉了右边比左边低分的情况
  const left = [1];
  for (i = 1; i < len; i++) {
    left[i] = ratings[i] > ratings[i - 1] ? left[i - 1] + 1 : 1;
  }

  // 从右到左遍历遍历
  // 如果左边比右边高分则按照右边的糖数 + 1，否则为 1
  // 此时，当前的小朋友的糖数是left和right中的最大值者
  let right = 0;
  for (i = len - 1; i >= 0; i--) {
    right = i < len - 1 && ratings[i] > ratings[i + 1] ? right + 1 : 1;
    result += Math.max(left[i], right);
  }

  return result;
}
```

### 常数空间遍历

注意到糖果总是尽量少给，且从 11 开始累计，每次要么比相邻的同学多给一个，要么重新
置为 11。依据此规则，我们可以画出下图：

![candy-1](https://user-images.githubusercontent.com/54696834/159101936-22317acc-55aa-41b7-85af-f25fd3688684.png)

其中相同颜色的柱状图的高度总恰好为 1,2,3 …。

而高度也不一定一定是升序，也可能是 … 3,2,1 的降序：

![candy-2](https://user-images.githubusercontent.com/54696834/159101938-402727b0-66aa-4f61-9719-bf1c48620bcc.png)

注意到在上图中，对于第三个同学，他既可以被认为是属于绿色的升序部分，也可以被认为
是属于蓝色的降序部分。因为他同时比两边的同学评分更高。我们对序列稍作修改：

![candy-3](https://user-images.githubusercontent.com/54696834/159101935-5736f681-8707-4708-a296-ae3b0961895e.png)

注意到右边的升序部分变长了，使得第三个同学不得不被分配 4 个糖果。

依据前面总结的规律，我们可以提出本题的解法。我们从左到右枚举每一个同学，记前一个
同学分得的糖果数量为 `pre`：

- 如果当前同学比上一个同学评分高，说明我们就在最近的递增序列中，直接分配给该同学
  `pre+1` 个糖果即可。
- 否则我们就在一个递减序列中，我们直接分配给当前同学一个糖果，并把该同学所在的递
  减序列中所有的同学都再多分配一个糖果，以保证糖果数量还是满足条件。
  - 我们无需显式地额外分配糖果，只需要记录当前的递减序列长度，即可知道需要额外分
    配的糖果数量。
  - 同时注意当当前的递减序列长度和上一个递增序列等长时，需要把最近的递增序列的最
    后一个同学也并进递减序列中。

这样，我们只要记录当前递减序列的长度 `dec`，最近的递增序列的长度 `inc` 和前一个
同学分得的糖果数量 `pre` 即可。

```typescript
/**
 * 常数空间遍历
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param ratings
 */
export function candy2(ratings: number[]): number {
  const len = ratings.length;
  let result = 1;
  let inc = 1; // 递增长度
  let dec = 0; // 递减长度
  let pre = 1; // 上一个的糖数

  // 从左到右遍历
  for (let i = 1; i < len; i++) {
    // 如果递增或相等
    if (ratings[i] >= ratings[i - 1]) {
      dec = 0; // 清空递减长度
      // 如果是相等，则设置为1，如果不是相等则上一个加一
      pre = ratings[i] === ratings[i - 1] ? 1 : pre + 1;
      // 更新结果
      result += pre;
      // 更新递增长度
      inc = pre;
    }
    // 如果递减
    else {
      // 更新递减序列
      dec++;
      // 当递增和递减等长的时候，需要把最近的递增序列的最后一个同学也并进递减序列中
      if (dec === inc) dec++;
      // 更新结果
      result += dec;
      // 重置pre
      pre = 1;
    }
  }

  return result;
}
```
