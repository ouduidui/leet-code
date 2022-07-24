# 公交站间的距离

> 难度：简单
>
> https://leetcode.cn/problems/distance-between-bus-stops/

## 题目

环形公交路线上有 `n` 个站，按次序从 `0` 到 `n - 1` 进行编号。我们已知每一对相邻公交站之间的距离，`distance[i]` 表示编号为 `i` 的车站和编号为 `(i + 1) % n` 的车站之间的距离。

环线上的公交车都可以按顺时针和逆时针的方向行驶。

返回乘客从出发点 start 到目的地 destination 之间的最短距离。

### 示例

#### 示例 1：

![image](https://user-images.githubusercontent.com/54696834/180630654-c16ceaa6-3eff-47ab-bc75-acd3f59942e1.png)

```
输入：distance = [1,2,3,4], start = 0, destination = 1
输出：1
解释：公交站 0 和 1 之间的距离是 1 或 9，最小值是 1。
```

#### 示例 2：

![image](https://user-images.githubusercontent.com/54696834/180630662-970a40c5-b3b5-485c-b4f3-446d0a3b07a4.png)

```
输入：distance = [1,2,3,4], start = 0, destination = 2
输出：3
解释：公交站 0 和 2 之间的距离是 3 或 7，最小值是 3。
 ```

#### 示例 3：

![image](https://user-images.githubusercontent.com/54696834/180630666-721bbb8a-5440-4058-adfa-443d8dca5b57.png)

```
输入：distance = [1,2,3,4], start = 0, destination = 3
输出：4
解释：公交站 0 和 3 之间的距离是 6 或 4，最小值是 4。
```

## 解题

```ts 
/**
 * 一次遍历
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param distance
 * @param start
 * @param destination
 * @returns
 */
export function distanceBetweenBusStops(
  distance: number[],
  start: number,
  destination: number,
): number {
  if (start > destination)
    [destination, start] = [start, destination]

  let sum = 0
  let dist = 0
  for (let i = 0; i < distance.length; i++) {
    sum += distance[i]
    if (i >= start && i < destination) dist += distance[i]
  }

  return Math.min(sum - dist, dist)
}
```