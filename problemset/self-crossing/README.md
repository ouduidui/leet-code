# 路径交叉

> 难度：困难
>
> https://leetcode.cn/problems/self-crossing/

## 题目

给你一个整数数组 `distance` 。

从 `X-Y` 平面上的点 `(0,0)` 开始，先向北移动 `distance[0]` 米，然后向西移动 `distance[1]` 米，向南移动 `distance[2]` 米，向东移动 `distance[3]` 米，持续移动。也就是说，每次移动后你的方位会发生逆时针变化。

判断你所经过的路径是否相交。如果相交，返回 `true` ；否则，返回 `false` 。

### 示例

#### 示例 1：

![image](https://user-images.githubusercontent.com/54696834/173212679-18ebd6c3-c94b-4cb9-99be-33bf9e42ecb1.png)

```
输入：distance = [2,1,1,2]
输出：true
```

#### 示例 2：

![image](https://user-images.githubusercontent.com/54696834/173212681-2d80a6f8-f08d-46f1-8efe-72a7950052fe.png)

```
输入：distance = [1,2,3,4]
输出：false
```

#### 示例 3：

![image](https://user-images.githubusercontent.com/54696834/173212687-f634df26-d2dc-4da8-b0d8-9f705fe28259.png)

```
输入：distance = [1,1,1,1]
输出：true
```

## 解题

### 归纳法（归纳路径交叉的情况）

```ts 
/**
 * 归纳法（归纳路径交叉的情况）
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param distance
 * @returns
 */
export function isSelfCrossing(distance: number[]): boolean {
  const n: number = distance.length
  for (let i = 3; i < n; ++i) {
    // 第 1 类路径交叉的情况 内卷
    if (distance[i] >= distance[i - 2] && distance[i - 1] <= distance[i - 3])
      return true

    // 第 2 类路径交叉的情况 首尾重叠
    if (i === 4 && (distance[3] === distance[1]
            && distance[4] >= distance[2] - distance[0]))
      return true

    // 第 3 类路径交叉的情况 外卷
    if (i >= 5 && (distance[i - 3] - distance[i - 5] <= distance[i - 1]
            && distance[i - 1] <= distance[i - 3]
            && distance[i] >= distance[i - 2] - distance[i - 4]
            && distance[i - 2] > distance[i - 4]))
      return true
  }
  return false
}
```

### 归纳法（归纳路径不交叉时的状态）

```ts 
/**
 * 归纳法（归纳路径不交叉时的状态）
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param distance
 * @returns
 */
export function isSelfCrossing2(distance: number[]): boolean {
  const n: number = distance.length

  // 处理第 1 种情况 外卷
  let i = 0
  while (i < n && (i < 2 || distance[i] > distance[i - 2]))
    ++i

  if (i === n)
    return false

  // 处理第 j 次移动的情况
  if ((i === 3 && distance[i] === distance[i - 2])
        || (i >= 4 && distance[i] >= distance[i - 2] - distance[i - 4]))
    distance[i - 1] -= distance[i - 3]

  ++i

  // 处理第 2 种情况 内卷
  while (i < n && distance[i] < distance[i - 2])
    ++i

  return i !== n
}
```