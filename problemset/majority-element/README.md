# 多数元素

> 难度：简单
>
> https://leetcode-cn.com/problems/majority-element/

## 题目

给定一个大小为 `n` 的数组，找到其中的多数元素。多数元素是指在数组中出现次数 **大
于** `⌊ n/2 ⌋`  的元素。

你可以假设数组是非空的，并且给定的数组总是存在多数元素。

### 示例

#### 示例  1：

```
输入：[3,2,3]
输出：3
```

#### 示例  2：

```
输入：[2,2,1,1,1,2,2]
输出：2
```

## 解题

### 哈希表

```typescript
/**
 * 哈希表
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param nums
 * @returns
 */
export function majorityElement(nums: number[]): number {
  const counts = new Map<number, number>();

  for (const num of nums) {
    counts.set(num, (counts.get(num) || 0) + 1);
  }

  let res: number;
  const count = (nums.length / 2) >> 0;
  for (const [key, value] of counts.entries()) {
    if (value > count) {
      res = key;
      break;
    }
  }

  return res!;
}
```

### 排序

```typescript
/**
 * 排序
 * @desc 时间复杂度 O(NlogN)  空间复杂度 O(logN)
 * @param nums
 * @returns
 */
export function majorityElement2(nums: number[]): number {
  nums.sort((a, b) => a - b);
  return nums[nums.length - 1];
}
```

### 分治法

```typescript
/**
 * 分治法
 * @desc 时间复杂度 O(NlogN)  空间复杂度 O(logN)
 * @param nums
 * @returns
 */
export function majorityElement3(nums: number[]): number {
  return majorityElementRec(nums, 0, nums.length - 1);

  /**
   * 找到l和r区间的众数
   * @param nums
   * @param l
   * @param r
   */
  function majorityElementRec(nums: number[], l: number, r: number): number {
    // 如果只有一个值的话，直接返回
    if (l === r) return nums[l];

    // 进行对半分治，找到左右区间的众数
    const mid = (l + r) >> 1;
    const left = majorityElementRec(nums, l, mid);
    const right = majorityElementRec(nums, mid + 1, r);

    // 如果左右区间的众数是一样的，则它就是两个区间合起来的众数
    if (left === right) return left;

    // 如果左右区间的众数是不一样，则比较他们出现的次数，返回次数多者
    return countInRange(nums, left, l, r) > countInRange(nums, right, l, r)
      ? left
      : right;
  }

  /**
   * 以l和r区间，找到num出现的次数
   * @param nums
   * @param num
   * @param l
   * @param r
   */
  function countInRange(
    nums: number[],
    num: number,
    l: number,
    r: number
  ): number {
    let count = 0;
    for (let i = l; i <= r; i++) {
      if (nums[i] === num) {
        count++;
      }
    }
    return count;
  }
}
```

### Boyer-Moore 投票算法

如果我们把众数记为 `+1`，把其他数记为 `-1`，将它们全部加起来，显然和大于 `0`，从
结果本身我们可以看出众数比其他数多。

Boyer-Moore 算法的本质和分治十分类似。我们首先给出 Boyer-Moore 算法的详细步骤：

- 我们维护一个候选众数 `candidate` 和它出现的次数 `count`。初始时 `candidate` 可
  以为任意值，`count` 为 0；
- 我们遍历数组 `nums` 中的所有元素，对于每个元素 `x`，在判断 `x` 之前，如果
  `count` 的值为 `0`，我们先将 `x` 的值赋予 `candidate`，随后我们判断 `x`：
  - 如果 `x` 与 `candidate` 相等，那么计数器 `count` 的值增加 `1`；
  - 如果 `x` 与 `candidate` 不等，那么计数器 `count` 的值减少 `1`。
- 在遍历完成后，`candidate` 即为整个数组的众数。

我们举一个具体的例子，例如下面的这个数组：

```
[7, 7, 5, 7, 5, 1 | 5, 7 | 5, 5, 7, 7 | 7, 7, 7, 7]
```

在遍历到数组中的第一个元素以及每个在 `|` 之后的元素时，`candidate` 都会因为
`count` 的值变为 `0` 而发生改变。最后一次 `candidate` 的值从 `5` 变为 `7`，也就
是这个数组中的众数。

`Boyer-Moore` 算法的正确性较难证明，这里给出一种较为详细的用例子辅助证明的思路，
供读者参考：

首先我们根据算法步骤中对 `count` 的定义，可以发现：在对整个数组进行遍历的过程中
，`count` 的值一定非负。这是因为如果 `count` 的值为 `0`，那么在这一轮遍历的开始
时刻，我们会将 `x` 的值赋予 `candidate` 并在接下来的一步中将 `count` 的值增加
`1`。因此 `count` 的值在遍历的过程中一直保持非负。

那么 `count` 本身除了计数器之外，还有什么更深层次的意义呢？我们还是以数组

```
[7, 7, 5, 7, 5, 1 | 5, 7 | 5, 5, 7, 7 | 7, 7, 7, 7]
```

作为例子，首先写下它在每一步遍历时 `candidate` 和 `count` 的值：

```
nums:      [7, 7, 5, 7, 5, 1 | 5, 7 | 5, 5, 7, 7 | 7, 7, 7, 7]
candidate:  7  7  7  7  7  7   5  5   5  5  5  5   7  7  7  7
count:      1  2  1  2  1  0   1  0   1  2  1  0   1  2  3  4
```

我们再定义一个变量 `value`，它和真正的众数 `maj` 绑定。在每一步遍历时，如果当前
的数 `x` 和 `maj` 相等，那么 `value` 的值加 `1`，否则减 `1`。`value` 的实际意义
即为：到当前的这一步遍历为止，众数出现的次数比非众数多出了多少次。我们将 `value`
的值也写在下方：

```
nums:      [7, 7, 5, 7, 5, 1 | 5, 7 | 5, 5, 7, 7 | 7, 7, 7, 7]
value:      1  2  1  2  1  0  -1  0  -1 -2 -1  0   1  2  3  4
```

有没有发现什么？我们将 count 和 value 放在一起：

```
nums:      [7, 7, 5, 7, 5, 1 | 5, 7 | 5, 5, 7, 7 | 7, 7, 7, 7]
count:      1  2  1  2  1  0   1  0   1  2  1  0   1  2  3  4
value:      1  2  1  2  1  0  -1  0  -1 -2 -1  0   1  2  3  4
```

发现在每一步遍历中，`count` 和 `value` 要么相等，要么互为相反数！并且在候选众数
`candidate` 就是 `maj` `时，它们相等，candidate` 是其它的数时，它们互为相反数！

为什么会有这么奇妙的性质呢？这并不难证明：我们将候选众数 `candidate` 保持不变的
连续的遍历称为「一段」。在同一段中，`count` 的值是根据 `candidate == x` 的判断进
行加减的。那么如果 `candidate` 恰好为 `maj`，那么在这一段中，`count` 和 `value`
的变化是同步的；如果 `candidate` 不为 `maj`，那么在这一段中 `count` 和 `value`
的变化是相反的。因此就有了这样一个奇妙的性质。

这样以来，由于：

- 我们证明了 `count` 的值一直为非负，在最后一步遍历结束后也是如此；
- 由于 `value` 的值与真正的众数 `maj` 绑定，并且它表示「众数出现的次数比非众数多
  出了多少次」，那么在最后一步遍历结束后，`value` 的值为正数；

在最后一步遍历结束后，`count` 非负，`value` 为正数，所以它们不可能互为相反数，只
可能相等，即 `count == value`。因此在最后「一段」中，`count` 的 `value` 的变化是
同步的，也就是说，`candidate` 中存储的候选众数就是真正的众数 `maj`。

> 言简意赅的说明投票算法：
>
> 如果候选人不是 maj 则 maj,会和其他非候选人一起反对 会反对候选人,所以候选人一定
> 会下台(maj==0 时发生换届选举)
>
> 如果候选人是 maj , 则 maj 会支持自己，其他候选人会反对，同样因为 maj 票数超过
> 一半，所以 maj 一定会成功当选

```typescript
/**
 * Boyer-Moore 投票算法
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param nums
 * @returns
 */
export function majorityElement4(nums: number[]): number {
  let count = 0; // 出现次数
  let candidate: number; // 候选众数

  for (const num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count += num === candidate! ? 1 : -1;
  }

  return candidate!;
}
```
