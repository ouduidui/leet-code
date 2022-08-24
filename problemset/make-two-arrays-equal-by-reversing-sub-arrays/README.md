# 通过翻转子数组使两个数组相等

> 难度：简单
>
> https://leetcode.cn/problems/make-two-arrays-equal-by-reversing-sub-arrays/

## 题目

给你两个长度相同的整数数组 `target` 和 `arr` 。每一步中，你可以选择 `arr` 的任意 **非空子数组** 并将它翻转。你可以执行此过程任意次。

如果你能让 `arr` 变得与 `target` 相同，返回 `True`；否则，返回 `False` 。

### 示例

#### 示例 1：

```
输入：target = [1,2,3,4], arr = [2,4,1,3]
输出：true
解释：你可以按照如下步骤使 arr 变成 target：
1- 翻转子数组 [2,4,1] ，arr 变成 [1,4,2,3]
2- 翻转子数组 [4,2] ，arr 变成 [1,2,4,3]
3- 翻转子数组 [4,3] ，arr 变成 [1,2,3,4]
上述方法并不是唯一的，还存在多种将 arr 变成 target 的方法。
```

#### 示例 2：

```
输入：target = [7], arr = [7]
输出：true
解释：arr 不需要做任何翻转已经与 target 相等。
```

#### 示例 3：

```
输入：target = [3,7,9], arr = [3,7,11]
输出：false
解释：arr 没有数字 9 ，所以无论如何也无法变成 target 。
```

## 解题

### 哈希表

```ts 
/**
 * 哈希表
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param target
 * @param arr
 * @returns
 */
export function canBeEqual(target: number[], arr: number[]): boolean {
  if (target.length !== arr.length) return false

  const map = new Map<number, number>()
  for (const num of target)
    map.set(num, (map.get(num) || 0) + 1)

  for (const num of arr) {
    if (!map.get(num))
      return false

    const count = map.get(num)!
    if (count === 1)
      map.delete(num)
    else
      map.set(num, count - 1)
  }

  return map.size === 0
}
```

### 排序

```ts
/**
 * 排序
 * @desc 时间复杂度 O(NlogN)  空间复杂度 O(logN)
 * @param target
 * @param arr
 * @returns
 */
export function canBeEqual2(target: number[], arr: number[]): boolean {
  return target.sort().toString() === arr.sort().toString()
}
```